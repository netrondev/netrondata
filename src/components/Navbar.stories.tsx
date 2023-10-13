import React from "react";
import { Navbar } from "./Navbar";
import { Page } from "./Page";

export default {
  title: "Navbar",
};

// export const NavbarPreview = () => (
//   <Navbar logo={"TestName"}  />
// );

export const NavbarFancyLogo = () => (
  <>
    <Page className="p-5">
      <Navbar
        menu={[
          {
            title: "Only title",
          },
          {
            title: "ClickEvent",
            onClick: () => {
              console.log("clicked!");
            },
          },

          {
            title: "Downdown Test 2",
            subItems: [
              { title: "Test asdasd" },
              { title: "asdf", href: "www.google.com" },
            ],
          },
        ]}
      />
    </Page>
    <Page className="mt-5 p-5">
      <Navbar
        logo={<div>FancyLogo</div>}
        className="flex flex-row gap-2 items-center"
        defaultComponent={(n) => (
          <div className="text-red-500 border border-red-500 px-1">
            {n.title}
          </div>
        )}
        menu={[
          {
            href: "/workshops",
            component: <a href="/workshops">Pro Workshops</a>,
            title: "Pro Workshops",
            subItems: [
              {
                title: "SubItem",
                href: "/test/test",
              },
              {
                title: "SubItem",
              },
              {
                title: "SubItem",
              },
            ],
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
          {
            title: "defaultComponent",
          },
        ]}
        menuSecondary={[
          {
            href: "/search",
            component: <a href="/search">Search</a>,
            title: "Search",
          },
          {
            title: "Click With default",
            onClick: () => {
              console.log("click");
            },
          },
          {
            href: "/feedback",
            component: <a href="/feedback">Feedback</a>,
            title: "Feedback",
          },
          {
            title: "Dropdown Test",
            subItems: [
              {
                href: "/purchases",
                title: "Purchases",
              },
              {
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
    </Page>
  </>
);
