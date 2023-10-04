import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export default function Alert(props: {
  severity: "error" | "success" | "info" | "warning";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded border px-3 py-2 text-xs",
        props.severity === "error" &&
          "border-red-500 bg-red-50 text-red-500 dark:bg-red-950",
        props.severity === "success" &&
          "border-green-500 bg-green-50 text-green-500 dark:bg-green-950",
        props.severity === "info" &&
          "border-sky-500 bg-sky-50 text-sky-500 dark:bg-sky-950",
        props.severity === "warning" &&
          "border-orange-500 bg-orange-50 text-orange-500 dark:bg-orange-950",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
