import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <div className="p-10 border shadow-2xl font-sans">
    <div style={{ padding: 10 }}>{children}</div>
  </div>
);
