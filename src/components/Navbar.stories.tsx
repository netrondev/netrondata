import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Page } from "./Page";

export default {
  title: "Navbar",
};

// export const NavbarPreview = () => (
//   <Navbar logo={"TestName"}  />
// );

export const NavbarFancyLogo = () => {
  const [tab, setTab] = useState<"content" | "meta" | "exercise">("content");
  return (
    <>
      <Page className="">
        <Navbar
          menu={[
            {
              title: "Content",
              active: tab === "content",
              onClick: () => {
                setTab("content");
              },
            },
            {
              title: "Meta Data",
              active: tab === "meta",
              onClick: () => {
                setTab("meta");
              },
            },
            {
              title: "Exercise",
              active: tab === "exercise",
              onClick: () => {
                setTab("exercise");
              },
            },
          ]}
        />

        <Navbar
          menu={[
            {
              title: "Only title",
              active: true,
            },
            {
              title: "ClickEvent",
              active: true,
              onClick: () => {
                console.log("clicked!");
              },
            },

            {
              title: "Downdown Test 2",
              active: true,
              subItems: [
                { title: "Test asdasd", active: true },
                { title: "asdf", href: "www.google.com", active: true },
              ],
            },
          ]}
        />
      </Page>
      <Page className="mt-1">
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
};
