import React, { ReactNode } from "react";
import { Button } from "./Button";
import { ButtonDropdown } from "./ButtonDropdown";
import { cn } from "../utils/cn";

export type NavMenuItem = {
  title: string;
  href?: string;
  component?: ReactNode;
  subItems?: NavMenuItem[];
  onClick?: () => void | Promise<void>;
};

function NavbarItem(props: {
  item: NavMenuItem;
  defaultComponent?: (item: NavMenuItem) => ReactNode;
}) {
  if (props.item.subItems) {
    return (
      <ButtonDropdown
        panel={
          <div className="p-2 flex flex-col gap-1">
            {props.item.subItems.map((i) => {
              if (i.component) {
                return <div key={i.title}>{i.component}</div>;
              }

              if (props.defaultComponent) {
                return <div key={i.title}>{props.defaultComponent(i)}</div>;
              }

              return (
                <a
                  key={i.title}
                  href={i.href}
                  className="text-neutral-500 hover:text-neutral-700 transition dark:hover:text-neutral-300"
                >
                  {i.title}
                </a>
              );
            })}
          </div>
        }
      >
        {props.item.title}
      </ButtonDropdown>
    );
  }

  if (props.item.component) return <>{props.item.component}</>;

  if (props.item.onClick)
    return <Button onClick={props.item.onClick}>{props.item.title}</Button>;

  if (props.defaultComponent) return props.defaultComponent(props.item);

  if (props.item.href)
    return (
      <a
        key={props.item.title}
        href={props.item.href}
        className="text-neutral-500 hover:text-neutral-700 transition dark:hover:text-neutral-300"
      >
        {props.item.component}
      </a>
    );

  return <span>{props.item.title}</span>;
}

export function Navbar(props: {
  logo?: ReactNode | string;
  className?: string;
  menu: NavMenuItem[];
  menuSecondary?: NavMenuItem[];
  defaultComponent?: (item: NavMenuItem) => ReactNode;
}) {
  return (
    <nav
      className={cn("flex flex-row space-x-2 items-center", props.className)}
    >
      {props.logo && (
        <Button>
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
      {props.menu.map((i) => (
        <NavbarItem
          key={i.title}
          item={i}
          defaultComponent={props.defaultComponent}
        />
      ))}

      <div className="flex-1" />

      {props.menuSecondary?.map((i) => (
        <NavbarItem
          key={i.title}
          item={i}
          defaultComponent={props.defaultComponent}
        />
      ))}
    </nav>
  );
}
