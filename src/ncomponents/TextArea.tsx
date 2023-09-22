import { type TextareaHTMLAttributes } from "react";
import { cn } from "~/nutils/cn";

export function TextArea(
  props: { className?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        "rounded border-none p-1 focus:outline-none",
        props.className
      )}
    />
  );
}
