import {
  type ComponentProps,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { cn } from "~/utils/cn";
import { Button } from "./Button";
import React from "react";

export function ButtonIcon(props: {
  // icon?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: ComponentProps<typeof Button>["variant"];
}) {
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn("aspect-square", props.className)}
      variant={props.variant}
    >
      {props.children}
    </Button>
  );
}
