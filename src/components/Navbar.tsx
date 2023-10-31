import React, { ReactNode, useState } from "react";
import { Button } from "./Button";
import { ButtonDropdown } from "./ButtonDropdown";
import { cn } from "../utils/cn";
import { FiMenu } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { ExpandableDiv } from "./MenuDropdown";
import { NoSSR } from "./NoSSR";

export type NavMenuItem<G = {}> = {
  title: string;
  href?: string;
  component?: ReactNode;
  active?: boolean;
  subItems?: NavMenuItem<Partial<G>>[];
  onClick?: () => void | Promise<void>;
} & Partial<G>;

function NavbarItem<G>(props: {
  item: NavMenuItem<G>;
  defaultComponent?: (item: NavMenuItem<G>) => ReactNode;
}) {
  if (props.item.subItems) {
    return (
      <ButtonDropdown
        panel={
          <div className="p-2 flex flex-col gap-1">
            {props.item.subItems.map((i) => (
              <NavbarItem
                key={i.title}
                item={i}
                defaultComponent={props.defaultComponent}
              />
            ))}
          </div>
        }
      >
        {props.item.title}
      </ButtonDropdown>
    );
  }

  if (props.item.component) return <>{props.item.component}</>;

  if (props.item.onClick)
    return (
      <Button
        variant="text"
        active={props.item.active}
        onClick={props.item.onClick}
      >
        {props.item.title}
      </Button>
    );

  if (props.defaultComponent) return props.defaultComponent(props.item);

  if (props.item.href)
    return (
      <a href={props.item.href}>
        <Button href={props.item.href} className="w-full">
          {props.item.title}
        </Button>
      </a>
    );

  return <span>{props.item.title}</span>;
}

export function Navbar<G>(props: {
  logo?: ReactNode | string;
  className?: string;
  menu: NavMenuItem<G>[];
  menuSecondary?: NavMenuItem<G>[];
  defaultComponent?: (item: NavMenuItem<G>) => ReactNode;
}) {
  const [menuMainOpen, setMenuMainOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "flex flex-row space-x-0 md:space-x-2 items-center",
          props.className
        )}
      >
        {props.logo && (
          <Button className="">
            {/* Vulcan<span className="font-bold">University</span> */}
            {typeof props.logo === "string" ? (
              <span className="font-bold text-black dark:text-white">
                {props.logo}
              </span>
            ) : (
              props.logo
            )}
          </Button>
        )}

        <div className="flex-1 md:hidden" />

        <div className="hidden md:flex flex-row space-x-2 items-center">
          {props.menu.map((i) => (
            <NavbarItem
              key={i.title}
              item={i}
              defaultComponent={props.defaultComponent}
            />
          ))}
        </div>

        <div className="flex-1 hidden md:block" />

        <Button
          className="aspect-square block md:hidden bg-transparent border-none"
          onClick={() => {
            setMenuMainOpen(!menuMainOpen);
          }}
        >
          <FiMenu />
        </Button>

        <div className="hidden md:flex flex-row space-x-2 items-center">
          {props.menuSecondary?.map((i) => (
            <NavbarItem
              key={i.title}
              item={i}
              defaultComponent={props.defaultComponent}
            />
          ))}
        </div>
      </nav>
      <NoSSR>
        <ExpandableDiv expanded={menuMainOpen} className={"block md:hidden"}>
          <div
            className={cn(
              "md:hidden",
              "flex flex-col gap-1 p-2 bg-neutral-300/10 shadow-2xl",
              "border-t border-b border-neutral-400/50 dark:border-neutral-500/50"
            )}
          >
            {props.menu.map((i) => (
              <NavbarItem
                key={i.title}
                item={i}
                defaultComponent={props.defaultComponent}
              />
            ))}

            {props.menuSecondary && (
              <hr className="my-2 border-neutral-400/50 dark:border-neutral-500/50" />
            )}

            {props.menuSecondary?.map((i) => (
              <NavbarItem
                key={i.title}
                item={i}
                defaultComponent={props.defaultComponent}
              />
            ))}
          </div>
        </ExpandableDiv>
      </NoSSR>
    </>
  );
}
