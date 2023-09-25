import React from "react";
import { Navbar } from "./Navbar";

export default {
  title: "Navbar",
};

// export const NavbarPreview = () => (
//   <Navbar logo={"TestName"}  />
// );

export const NavbarFancyLogo = () => (
  <Navbar
    logo={<div>FancyLogo</div>}
    className="flex flex-row gap-2 items-center"
    menu={[
      {
        href: "/workshops",
        component: <a href="/workshops">Pro Workshops</a>,
        title: "Pro Workshops",
      },
      {
        href: "/tutorials",
        component: <a href="/tutorials">Free Tutorials</a>,
        title: "Free Tutorials",
      },
      {
        href: "/tips",
        component: <a href="/tips">Tips</a>,
        title: "Tips",
      },
      {
        href: "/articles",
        component: <a href="/articles">Articles</a>,
        title: "Articles",
      },
    ]}
    menuSecondary={[
      {
        href: "/search",
        component: <a href="/search">Search</a>,
        title: "Search",
      },
      {
        href: "/feedback",
        component: <a href="/feedback">Feedback</a>,
        title: "Feedback",
      },
      {
        href: "/account",
        title: "Account",
        subItems: [
          {
            href: "/purchases",
            component: <a href="/purchases">Purchases</a>,
            title: "Purchases",
          },
          {
            href: "/faq",
            component: <a href="/faq">FAQ</a>,
            title: "FAQ",
          },
          {
            href: "/logout",
            component: <a href="/logout">Log out</a>,
            title: "Log out",
          },
        ],
      },
    ]}
  />
);
