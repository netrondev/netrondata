import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export function Page(props: { children: ReactNode; className?: string }) {
  return (
    <section
      className={cn(
        "text-neutral-800 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800",
        props.className
      )}
    >
      {props.children}
    </section>
  );
}
