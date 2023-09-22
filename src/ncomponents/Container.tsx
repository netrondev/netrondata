import { type ReactNode } from "react";
import { cn } from "../nutils/cn";

export function Container(props: { children: ReactNode; className?: string }) {
  return (
    <section className={props.className}>
      <div className={cn("mx-auto max-w-6xl")}>{props.children}</div>
    </section>
  );
}
