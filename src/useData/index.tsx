import React from "react";
import { useEffect, useState } from "react";
import { Surreal } from "surrealdb.js";
import { Database, Query } from "./typeparser";

enum WebsocketStatus {
  OPEN = 0,
  CLOSED = 1,
  RECONNECTING = 2,
}

export function useBasic() {
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(test + 1);
  }, [test]);

  return test;
}

export const createDBhook =
  <DB extends Database<any>>({
    token,
    dburl,
  }: {
    token: string;
    dburl: string;
  }) =>
  <Q extends string>({ live, query }: { live?: boolean; query: Q }) => {
    type Out = Query<Q, DB>;

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
      if (!token) return;
      if (conn) return;

      const doconnect = async () => {
        db.connect(`${dburl}/sql`);
        checkStatus();
        await db.authenticate(token);
        checkStatus();
        if (!result) {
          console.log("doing query...");
          const data_q = await db.query(query);
          const data = data_q[0].result as Out[];
          setResult(data);
        } else {
          // console.log("skipping query...");
        }

        if (live) {
          if (!listening) {
            const data_live = await db.query<[string]>(`LIVE ${query}`);
            const uuid_new = data_live[0].result!;

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
