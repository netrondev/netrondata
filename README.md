
NetronData is a typescript package that aims to make it as easy and painless for developers to build applications. By combining good UI components and simple data access patterns you can go from idea to product much faster.

```sh
# add the dependency
pnpm add netrondata
```

Add to `tailwind.config.ts` keeping what you have already.

```ts
import path from "path";

export default {
  content: [
    path.join(path.dirname(require.resolve("netrondata")), "**/*.{js,cjs,mjs}"),
  ],
  darkMode: "class",
} 
```


# Auto Generate db schema

```ts
import { schema_generate } from "netrondata";

const surrealdb = new Surreal();
await surrealdb.connect(`https://hostname/rpc`);
await surrealdb.signin({
  user: "user",
  pass: "pass",
  NS: "yournamespace",
  DB: "yourdatabase",
});
// this will generate and write the file to your source repo.
await schema_generate({ db: surrealdb, fileout: "src/dbschema.ts" });
```

Once generated you can then import from the generated schema file.

```ts
import { type Query } from "netrondata"
import { type DB } from "./dbschema"

const typed = Query<"SELECT * FROM tablename", DB>

```