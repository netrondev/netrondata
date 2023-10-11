import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { cn } from "../utils/cn";
import { Button } from "./Button";

export type MenuItems = {
  title: string;
  subitems?: MenuItems[];
  is_done?: boolean;
};

function ContentMenu(props: {
  title: string;
  exercises?: MenuItems[];
  is_done?: boolean;
  expanded: boolean;
  onExpand: (item: { title: string }) => void;
}) {
  // const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded border text-neutral-700 dark:text-neutral-500 divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800">
      <Button
        className="flex w-full items-center rounded"
        onClick={() => {
          props.onExpand({ title: props.title });
        }}
      >
        <div className="flex-1 whitespace-nowrap text-left">{props.title}</div>
        {props.is_done && <AiOutlineCheck />}
        <BsChevronDown
          className={cn(
            "transition",
            props.expanded ? "rotate-0" : "rotate-180"
          )}
        />
      </Button>
      <div
        className={cn(
          "flex flex-col divide-y overflow-hidden text-sm transition-all dark:bg-neutral-800 dark:border-neutral-700 divide-neutral-200 dark:divide-neutral-700",
          props.expanded ? "h-80" : "h-0"
        )}
      >
        {props.exercises?.map((i) => (
          <div
            key={i.title}
            className="flex cursor-pointer gap-2 p-1 transition hover:bg-sky-50 dark:hover:bg-neutral-700"
          >
            <AiOutlineCheck
              className={cn(
                "mt-1",
                props.is_done ? "opacity-100" : "opacity-5"
              )}
            />
            {i.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MenuDropdown(props: { contents: MenuItems[] }) {
  const [expanded, set_expanded] = useState<string>();

  return (
    <section className="flex flex-col gap-1">
      {props.contents.map((i) => (
        <ContentMenu
          key={i.title}
          title={i.title}
          exercises={i.subitems}
          is_done={i.is_done}
          expanded={expanded === i.title}
          onExpand={(item) => {
            set_expanded(item.title);
          }}
        />
      ))}
    </section>
  );
}
