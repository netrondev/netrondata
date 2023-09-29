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


Reference: 
https://medium.com/@irekrog/quick-and-simple-create-and-publish-react-component-on-npm-df528cd26b0
https://github.com/irekrog/my-awesome-button-alert-component