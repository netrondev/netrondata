import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";

import type { GlobalProvider } from "@ladle/react";
import { useLadleContext } from "@ladle/react";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const ctx = useLadleContext();

  return (
    <html className={ctx.globalState.theme === "light" ? "" : "dark"}>
      <div className="p-10 border shadow-2xl font-sans">
        <div style={{ padding: 10 }}>{children}</div>
      </div>
    </html>
  );
};
