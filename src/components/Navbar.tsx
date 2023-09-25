import React, { ReactNode } from "react";
import { Button } from "./Button";
import { ButtonDropdown } from "./ButtonDropdown";

type NavMenuItem = {
  title: string;
  href?: string;
  component?: ReactNode;
  subItems?: NavMenuItem[];
};

function NavbarItem(props: { item: NavMenuItem }) {
  if (props.item.subItems) {
    return (
      <ButtonDropdown
        panel={
          <div className="p-2">
            {props.item.subItems.map((i) => {
              return <div key={i.title}>{i.component}</div>;
            })}
          </div>
        }
      >
        {props.item.title}
      </ButtonDropdown>
    );
  }
  return <div key={props.item.title}>{props.item.component}</div>;
}

export function Navbar(props: {
  logo: ReactNode | string;
  className: string;
  menu: NavMenuItem[];
  menuSecondary?: NavMenuItem[];
}) {
  return (
    <nav className={props.className}>
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
      {props.menu.map((i) => (
        <NavbarItem key={i.title} item={i} />
      ))}

      <div className="flex-1" />

      {props.menuSecondary?.map((i) => (
        <NavbarItem key={i.title} item={i} />
      ))}
    </nav>
  );
}
