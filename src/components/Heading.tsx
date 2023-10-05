import React, { DetailedHTMLProps, ReactNode } from "react";
import { cn } from "../utils/cn";

export function Heading(
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h1
      {...props}
      className={cn(
        "text-xl font-semibold uppercase text-neutral-600 dark:text-neutral-400",
        props.className
      )}
    />
  );
}
