import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";

import type { GlobalProvider } from "@ladle/react";
import { useLadleContext } from "@ladle/react";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const ctx = useLadleContext();

  return (
    <html className={ctx.globalState.theme === "light" ? "" : "dark"}>
      {children}
    </html>
  );
};
