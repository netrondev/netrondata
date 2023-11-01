import React, { type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import { cn } from "~/utils/cn";

export function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className={cn(
        "rounded border-2 border-transparent transition p-2 focus:outline-none",
        "bg-neutral-200 hover:bg-white focus:border-sky-300",
        "dark:bg-neutral-800 hover:dark:bg-neutral-900 focus:dark:border-sky-700",
        props.className
      )}
    />
  );
}
