import React, { ReactNode } from "react";
import { NavMenuItem } from "./Navbar";
import { cn } from "../utils/cn";
export function Footer(props: {
  logo: ReactNode | string;
  className?: string;
  menu?: NavMenuItem[];
  // menuSecondary?: NavMenuItem[];
}) {
  return (
    <footer
      className={cn(
        "relative z-10 mt-16 flex items-center justify-center  bg-neutral-100 dark:bg-neutral-800 px-8 pb-24 pt-24 md:mt-0 md:pb-40 md:pt-14 text-neutral-500 dark:text-white",
        props.className
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-center md:items-start md:justify-between">
        <nav
          className="flex flex-row flex-wrap gap-16 md:gap-24"
          aria-label="footer"
        >
          {props.menu?.map((m, idx) => (
            <div key={idx}>
              <strong className="inline-block pb-5 font-mono text-sm uppercase tracking-wide">
                {m.title}
              </strong>
              <ul className="flex flex-col gap-2">
                {m.subItems?.map((s, sidx) => (
                  <li className="" key={`s_${sidx}`}>
                    <a className="transition" href={s.href}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {props.logo ?? <div className="text-neutral-500">LOGO</div>}
      </div>
    </footer>
  );
}
