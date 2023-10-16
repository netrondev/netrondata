import React from "react";
import { cn } from "../utils/cn";

export function Panel(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div
      {...props}
      className={cn(
        "bg-neutral-300/50 dark:bg-neutral-600/50 p-5 rounded shadow-xl",
        props.className
      )}
    />
  );
}
