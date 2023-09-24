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
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded border text-neutral-600">
      <Button
        className="flex w-full items-center rounded"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className="flex-1 whitespace-nowrap text-left">{props.title}</div>
        {props.is_done && <AiOutlineCheck />}
        <BsChevronDown
          className={cn("transition", expanded ? "rotate-0" : "rotate-180")}
        />
      </Button>
      <div
        className={cn(
          "flex flex-col divide-y overflow-hidden text-sm transition-all",
          expanded ? "h-80" : "h-0"
        )}
      >
        {props.exercises?.map((i) => (
          <div
            key={i.title}
            className="flex cursor-pointer gap-2 p-1 transition hover:bg-sky-50"
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
  return (
    <section className="flex flex-col gap-1">
      {props.contents.map((i) => (
        <ContentMenu
          key={i.title}
          title={i.title}
          exercises={i.subitems}
          is_done={i.is_done}
        />
      ))}
    </section>
  );
}
