import React from "react";
import { cn } from "../utils/cn";

export function Heading(props: { children: string; className?: string }) {
  return (
    <h1
      className={cn(
        "text-xl font-semibold uppercase text-neutral-600 dark:text-neutral-400",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}
