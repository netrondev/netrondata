import { Surreal } from "surrealdb.js";
import {
  SR_derive_fields_from_table,
  SR_info,
} from "../surreal/surreal_helpers";

import jsonToZod from "json-to-zod";
import fs from "fs";

export async function schema_generate(inputs: { db: Surreal }) {
  const db = inputs.db;
  const info = await SR_info({ db });
  let schema_data = `import { z } from "zod";\n`;
  const names: { table: string; zodname: string; typename: string }[] = [];

  for (const table of Object.keys(info.db.tables)) {
    const rows = await SR_derive_fields_from_table({ db, table });
    const zodname = `TB${table}`;
    const typename = `TB${table}_type`;
    names.push({ table, zodname, typename });
    const o = jsonToZod(rows, zodname);
    schema_data += `export ${o}\nexport type ${typename} = z.infer<typeof ${zodname}>[number];\n\n`;
  }

  let combined = `export type DB = {\n`;
  names.forEach((i) => {
    combined += `  ${i.table}: ${i.typename}\n`;
  });

  combined += `}\n`;
  schema_data += combined;

  await fs.promises.writeFile("src/dbschema.ts", schema_data);
  process.exit();
}
