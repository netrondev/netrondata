
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
