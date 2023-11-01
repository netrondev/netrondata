import React from "react";
import {
  type ReactNode,
  type DetailedHTMLProps,
  type LabelHTMLAttributes,
} from "react";
import { Section } from "./Section";
import { cn } from "..";

export function Label(
  props: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > & { title: string; children: ReactNode }
) {
  const { title, children, ...rest } = props;

  return (
    <Section className={"w-full"}>
      <label
        {...rest}
        className={cn("text-xs text-neutral-400 dark:text-neutral-400")}
      >
        {title}
      </label>
      {children}
    </Section>
  );
}
