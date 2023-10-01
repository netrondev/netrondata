import { useEffect, useState } from "react";
import { Database, Query } from "../useData/typeparser";
import { Surreal } from "surrealdb.js";

export enum WebsocketStatus {
  OPEN = 0,
  CLOSED = 1,
  RECONNECTING = 2,
}

export const createDBHook =
  <DB extends Database<any>>(inputs: {
    // token: string;
    host: string;
    db: string;
    ns: string;
  }) =>
  <SQL extends string>(props: { live?: boolean; query: SQL }) => {
    type Out = Query<SQL, DB>;

    const [conn, setConn] = useState<Surreal>();
    const [result, setResult] = useState<Out[]>();
    const [uuid, setUuid] = useState<string>();

    const [trigger, setTrigger] = useState(0);
    const [listening, setListening] = useState(false);
    const db = new Surreal();

    const [status, setStatus] = useState<"OPEN" | "CLOSED" | "RECONNECTING">();

    function checkStatus() {
      try {
        const a = db.status as WebsocketStatus;
        if (a === WebsocketStatus.OPEN) setStatus("OPEN");
        if (a === WebsocketStatus.CLOSED) setStatus("CLOSED");
        if (a === WebsocketStatus.RECONNECTING) setStatus("RECONNECTING");
      } catch (err) {}
    }

    useEffect(() => {
      //   if (!inputs.token) return;
      if (conn) return;

      const doconnect = async () => {
        db.connect(`${inputs.host}/sql`);
        checkStatus();
        // await db.authenticate(inputs.token);
        await db.use({ ns: inputs.ns, db: inputs.db });
        checkStatus();
        if (!result) {
          console.log("doing query...");
          const data_q = await db.query(props.query);
          const data = data_q?.at(0)!.result as Out[];
          setResult(data);
        } else {
          // console.log("skipping query...");
        }

        if (props.live) {
          if (!listening) {
            const data_live = await db.query<[string]>(`LIVE ${props.query}`);
            const uuid_new = data_live.at(0)!.result!;

            // surrealState.add({ uuid: uuid_new, query: props.query });

            setUuid(uuid_new);
            console.log(`LIVE ${uuid_new}`);
            setListening(true);
            db.listenLive(uuid_new, (onlive) => {
              console.log("live data:", { onlive, result });

              if (onlive.action === "DELETE") {
                setResult([]);
              }

              if (onlive.action === "CREATE") {
                console.log("before", result);
                const newdata = result ?? [];
                newdata.push(onlive.result as Out);
                console.log("push", onlive.result);
                console.log("after", newdata);
                setResult(newdata);
              }
            }).catch(console.error);
          } else {
            // console.log("skipping subscription");
          }
        }
      };

      doconnect().catch(console.error);

      return () => {
        if (uuid) {
          console.log(`KILL ${uuid}`);
          db.kill(uuid).catch(console.error);
        }
      };
    }, [trigger, result, setResult]);

    return {
      updated: new Date(),
      data: result,
      // status: status ?? null,
      refetch: () => {
        setTrigger(trigger + 1);
      },
    };
  };
