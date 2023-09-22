import { type ReactNode } from "react";

export function Page(props: { children: ReactNode }) {
  return <section className="mt-20">{props.children}</section>;
}
