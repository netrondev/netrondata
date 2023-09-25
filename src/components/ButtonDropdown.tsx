import React, { type ReactNode, useState } from "react";

import { Button } from "./Button";
import { cn } from "../utils/cn";

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
          className="w-full border-none bg-neutral-50"
        >
          <span className="w-full">{props.children}</span>

          <span>⌄</span>
        </Button>
        {open && (
          <div
            className={cn(
              "absolute left-0 z-[60] whitespace-nowrap rounded-xl border bg-white shadow-xl md:left-auto",
              props.side === "right" ? "right-0" : "left-0"
            )}
          >
            {props.panel}
          </div>
        )}
      </div>
    </>
  );
}
