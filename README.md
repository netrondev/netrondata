# Netron Data components

```
pnpm build
npm publish
```


# Usage

`pnpm add netrondata`

edit tailwind.config.ts

```ts

import { type Config } from "tailwindcss";

// ADD THIS:
import path from "path";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // ADD THIS:
    path.join(path.dirname(require.resolve("netrondata")), "**/*.{js,cjs,mjs}"),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

```


# Data hook

Uses surrealdb.

```tsx
import { createDBHook } from "netrondata";
import { type DB } from "./surreal_schema_gen";

export const useDB = createDBHook<DB>({
  host: "https://yourdbhostname.com",
  db: "yourdb",
  ns: "yourns",
});

function Example() {
  const test = useDB({ live: true, query: "SELECT * FROM user;" });

  return (
    <div className="">
      {<pre>{JSON.stringify(test.data, null, 2)}</pre>}
    </div>
  );
}

```


Reference: 
https://medium.com/@irekrog/quick-and-simple-create-and-publish-react-component-on-npm-df528cd26b0
https://github.com/irekrog/my-awesome-button-alert-component


```toml
# Netron connection data
NETRON_HOST="https://nautilus.netron.co.za"
NETRON_USER="${props.username}"
NETRON_PASS="${props.password}"
NETRON_NS="${props.namespace}"
NETRON_DB="default"
```