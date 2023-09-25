import React, { ReactNode } from "react";
import { Button } from "./Button";
import { Loading } from "./Loading";
import { Container } from "./Container";
import { cn } from "../utils/cn";
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
  className?: string;
  menu: NavMenuItem[];
  menuSecondary?: NavMenuItem[];
}) {
  return (
    <nav
      className={cn(
        // "text-purple fixed left-0 right-0 top-0 z-50 bg-neutral-50/90 px-5 py-4 backdrop-blur"
        "text-purple z-50 px-5 py-4 backdrop-blur"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 text-xs">
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
        </div>
      </Container>
    </nav>
  );
}
