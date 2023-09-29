import React, {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from "react";
import { Tooltip, cn } from "..";

type ButtonEvent = Parameters<
  NonNullable<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >["onClick"]
  >
>[0];

export function Button(
  props: {
    icon?: ReactNode;
    children?: ReactNode;
    href?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
    active?: boolean;
    tooltip?: string;
    onClick?: (e: ButtonEvent) => void | Promise<void>;
  } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  const {
    icon,
    size,
    active: active,
    tooltip,
    className,
    href,
    ...rest
  } = props;

  function render_button() {
    return (
      <button
        {...rest}
        className={cn(
          "flex border font-normal tracking-wider text-neutral-600 transition",
          "items-center",
          size === "sm" && "gap-1 rounded px-2 py-1 text-sm",
          size === "md" || (!size && "gap-3 rounded-lg p-1 px-2 font-normal"),
          size == "lg" && "gap-4 rounded-xl p-3",
          active
            ? "border-purple-300 bg-purple-700/10 text-purple-600"
            : cn(
                "bg-neutral-100 text-neutral-500 hover:bg-neutral-200",
                "dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:bg-neutral-900 hover:dark:text-neutral-300"
              ),
          // active === false && "opacity-90",

          className
        )}
      >
        {icon}
        {props.children}
      </button>
    );
  }

  if (tooltip) {
    return <Tooltip tooltip={tooltip}>{render_button()}</Tooltip>;
  }

  return render_button();
}