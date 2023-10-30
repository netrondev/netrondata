import React, { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { cn } from "../utils/cn";
import { Button } from "./Button";
import { NoSSR } from "./NoSSR";

export type MenuItem<G> = {
  id: string;
  title: string;
  subitems?: MenuItem<Partial<G>>[];
  // expanded?: boolean;
  // active?: boolean;
  // is_done?: boolean;
} & Partial<G>;

export function ExpandableDiv(props: {
  children: ReactNode;
  expanded: boolean;
  className?: string;
}) {
  const [height, set_height] = useState<number>();
  const [width, set_width] = useState<number>();

  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function updateSize() {
      if (elementRef.current) {
        set_width(elementRef.current.clientWidth);
        if (elementRef.current.clientHeight !== 0) {
          set_height(elementRef.current.clientHeight);
        }

        // setOffsetLeft(elementRef.current.offsetLeft);
      }

      // setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className={cn("transition-all overflow-clip", props.className)}
      style={{ height: props.expanded ? height : 0 }}
    >
      <div
        ref={elementRef}
        className={cn(
          "transition-all",
          props.expanded ? "opacity-100" : "opacity-0"
        )}
      >
        {props.children}
      </div>
    </div>
  );
}

function ContentMenu<G>(props: {
  // title: string;
  // exercises?: MenuItem<G>[];
  data: MenuItem<G>;
  // is_done?: boolean;
  // subitems: boolean;
  active_id?: string;
  expanded: boolean;
  onExpand: (item: MenuItem<G>) => void;
  defaultComponent?: (item: MenuItem<G>) => ReactNode;
}) {
  // const [expanded, setExpanded] = useState(false);

  if (!props.data) return <div>no data</div>;

  return (
    <div className="rounded border text-neutral-700 dark:text-neutral-500 divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800">
      <div className="flex whitespace-nowrap items-center">
        <div className="flex-1">
          {props.defaultComponent
            ? props.defaultComponent(props.data)
            : props.data.title}
        </div>

        {/* {props.is_done && <AiOutlineCheck />} */}

        <Button
          className="flex items-center rounded"
          onClick={() => {
            props.onExpand(props.data);
          }}
        >
          <BsChevronDown
            className={cn(
              "transition",
              props.data.subitems ? "rotate-0" : "rotate-180"
            )}
          />
        </Button>
      </div>

      <NoSSR>
        <ExpandableDiv expanded={props.expanded}>
          <div
            className={cn(
              "flex flex-col divide-y overflow-hidden text-sm transition-all dark:bg-neutral-800 dark:border-neutral-700 divide-neutral-200 dark:divide-neutral-700"
            )}
          >
            {props.data.subitems?.map((i) => {
              return (
                <div
                  key={i.title}
                  className={cn(
                    "flex cursor-pointer gap-2 p-1 transition hover:bg-sky-50 dark:hover:bg-neutral-700",
                    props.active_id === i.id && "text-sky-500"
                  )}
                >
                  <div className="flex-1">
                    {props.defaultComponent ? (
                      <>{props.defaultComponent(i)}</>
                    ) : (
                      <span>{i.title}</span>
                    )}
                  </div>

                  {/* <AiOutlineCheck
                    className={cn(
                      "mt-1"
                      // props.is_done ? "opacity-100" : "opacity-5"
                    )}
                  /> */}
                  {/* {i.title} */}
                </div>
              );
            })}
          </div>
        </ExpandableDiv>
      </NoSSR>
    </div>
  );
}

export function MenuDropdown<G>(props: {
  contents: MenuItem<G>[];
  defaultComponent?: (item: MenuItem<G>) => ReactNode;
  active_id?: string;
}) {
  const [expanded_id, set_expanded_id] = useState<string>();

  return (
    <section className="flex flex-col gap-1">
      {props.contents.map((i) => (
        <ContentMenu<G>
          key={i.title}
          // title={i.title}
          data={i}
          // exercises={i.subitems}
          // is_done={i.is_done}
          // subitems={expanded === i.title}
          active_id={props.active_id}
          expanded={
            expanded_id === i.id ??
            i.subitems?.find((z) => z.id === props.active_id)
              ? true
              : false
          }
          defaultComponent={props.defaultComponent}
          onExpand={(item) => {
            set_expanded_id(item.id);
          }}
        />
      ))}
    </section>
  );
}
