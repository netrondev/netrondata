import { type Surreal } from "surrealdb.js";
import { z } from "zod";

export async function SR_getInfoForKV({ db }: { db: Surreal }) {
  const result = await db
    .query<
      [
        {
          namespaces: Record<string, string>;
          users: Record<string, string>;
        }
      ]
    >("INFO FOR KV;")
    .catch((err) => {
      console.log(err);
    });

  if (!result) throw new Error("could not get KV;");

  //   console.log(result[0]);

  const parsed = z
    .object({
      namespaces: z.record(z.string(), z.string()),
      users: z.record(z.string(), z.string()),
    })
    .strict()
    .parse(result[0]?.result);

  return parsed;
}

export async function SR_getInfoForNS({ db }: { db: Surreal }) {
  const result = await db
    .query<
      [
        {
          namespaces: Record<string, string>;
          users: Record<string, string>;
        }
      ]
    >("INFO FOR NS;")
    .catch((err) => {
      console.log(err);
    });

  if (!result) throw new Error("could not get NS;");

  const parsed = z
    .object({
      databases: z.record(z.string(), z.string()),
      tokens: z.record(z.string(), z.string()),
      users: z.record(z.string(), z.string()),
    })
    .strict()
    .parse(result[0]?.result);

  return parsed;
}

export async function SR_getInfoForDB({ db }: { db: Surreal }) {
  const result = await db
    .query<
      [
        {
          namespaces: Record<string, string>;
          users: Record<string, string>;
        }
      ]
    >("INFO FOR DB;")
    .catch((err) => {
      console.log(err);
    });

  if (!result) throw new Error("could not get DB;");

  // console.log(result[0]?.result);

  const parsed = z
    .object({
      analyzers: z.record(z.string(), z.string()),
      functions: z.record(z.string(), z.string()),
      params: z.record(z.string(), z.string()),
      scopes: z.record(z.string(), z.string()),
      tables: z.record(z.string(), z.string()),
      tokens: z.record(z.string(), z.string()),
      users: z.record(z.string(), z.string()),
    })
    .strict()
    .parse(result[0]?.result);

  return parsed;
}

export async function SR_getInfoForTABLE({
  db,
  table,
}: {
  db: Surreal;
  table: string;
}) {
  const result = await db
    .query<
      [
        {
          namespaces: Record<string, string>;
          users: Record<string, string>;
        }
      ]
    >(`INFO FOR TABLE ${table};`)
    .catch((err) => {
      console.log(err);
    });

  if (!result) throw new Error("could not get DB;");

  console.log(result[0]?.result);

  const parsed = z
    .object({
      events: z.record(z.string(), z.string()),
      fields: z.record(z.string(), z.string()),
      indexes: z.record(z.string(), z.string()),
      lives: z.record(z.string(), z.string()),
      tables: z.record(z.string(), z.string()),
    })
    .strict()
    .parse(result[0]?.result);

  return parsed;
}

export async function SR_derive_fields_from_table({
  db,
  table,
}: {
  db: Surreal;
  table: string;
}) {
  const result = await db
    .query<
      [
        {
          namespaces: Record<string, string>;
          users: Record<string, string>;
        }
      ]
    >(`SELECT * FROM ${table} LIMIT 100;`)
    .catch((err) => {
      console.log(err);
    });

  if (!result) throw new Error("could not get DB;");

  // console.log(result[0]?.result);

  return result[0]?.result;
}

export async function SR_info({ db }: { db: Surreal }) {
  const kv = await SR_getInfoForKV({ db });
  const ns = await SR_getInfoForNS({ db });
  const dbinfo = await SR_getInfoForDB({ db });

  return { kv, ns, db: dbinfo };
}
