import React, { type ReactNode, useState } from "react";

import { Button } from "./Button";
import { cn } from "../utils/cn";
import { BsChevronDown } from "react-icons/bs";

export function ButtonDropdown(props: {
  className?: string;
  children: ReactNode;
  panel: ReactNode;
  side?: "left" | "right";
}) {
  const [open, open_set] = useState(false);

  return (
    <>
      <div className={cn("relative w-full md:w-auto", props.className)}>
        <Button
          onClick={() => {
            open_set(!open);
          }}
          className="w-full border-none"
        >
          <span className="w-full">{props.children}</span>
          <BsChevronDown />
        </Button>
        {open && (
          <div
            className={cn(
              "absolute right-0 z-[60] whitespace-nowrap rounded border bg-white shadow-xl md:left-auto dark:bg-neutral-800",
              "border-neutral-300 dark:border-neutral-600",
              props.side === "right" ? "right-0" : "left-0"
            )}
            onClick={() => {
              open_set(!open);
            }}
          >
            {props.panel}
          </div>
        )}
      </div>
      {open && (
        <div
          className="absolute left-0 right-0 top-0 bottom-0 z-30"
          onClick={() => {
            open_set(false);
          }}
        />
      )}
    </>
  );
}
