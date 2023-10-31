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
    variant?: "text" | "contained" | "outlined";
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
    size = "md",
    active: active,
    tooltip,
    variant,
    className,
    href,
    ...rest
  } = props;

  function render_button() {
    return (
      <button
        {...rest}
        className={cn(
          "flex font-normal tracking-wider  transition",
          "items-center whitespace-nowrap rounded p-1 px-2",
          "text-sky-500 hover:text-sky-600",
          "dark:text-sky-500 dark:hover:text-sky-100",
          size === "sm" && "gap-1 rounded p-1 text-xs",
          size === "md" || (!size && "gap-3 rounded p-2 px-3 font-normal"),
          size == "lg" && "gap-4 rounded-lg p-2 px-3 text-lg",

          active && "text-indigo-500 dark:text-indigo-300",

          variant === "text" &&
            cn(
              "text-sky-500 bg-sky-500/5 hover:bg-sky-500/10 hover:text-sky-600",
              "dark:text-sky-500 dark:bg-sky-800/30 hover:dark:text-sky-200/90",
              active &&
                cn("text-indigo-500 bg-indigo-100", "dark:text-indigo-300")
            ),

          variant === "contained" &&
            cn(
              "bg-sky-600 text-white hover:bg-sky-500",
              "dark:bg-sky-600 dark:text-white hover:dark:bg-sky-500",
              active && cn("bg-indigo-500 text-white", "dark:text-indigo-300")
            ),

          variant === "outlined" &&
            cn(
              "border",
              "text-sky-500 bg-sky-500/5 hover:bg-sky-500/10 hover:text-sky-600 border-sky-400",
              "dark:text-sky-500 dark:bg-sky-800/30 hover:dark:text-sky-200/90 dark:border-sky-700",
              active &&
                cn(
                  "text-indigo-500 border-indigo-500 bg-indigo-100",
                  "dark:text-indigo-300"
                )
            ),

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
