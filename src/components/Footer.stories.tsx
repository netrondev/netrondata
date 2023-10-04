import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default {
  title: "Footer",
};

// export const NavbarPreview = () => (
//   <Navbar logo={"TestName"}  />
// );

export const FooterTest = () => {
  return (
    <Footer
      logo={<div>NETRON</div>}
      menu={[
        {
          title: "Learn",
          subItems: [
            {
              title: "Pro Workshops",
            },
            {
              title: "Free Tutorials",
            },
            {
              title: "Tips",
              href: "/tips",
            },
            {
              title: "Articles",
            },
            {
              title: "Concepts",
            },
            {
              title: "Search",
            },
          ],
        },
        {
          title: "About",
          subItems: [
            {
              title: "All Products",
            },
            {
              title: "FAQ",
            },
            {
              title: "Credits",
            },
          ],
        },
        {
          title: "Tools",
          subItems: [
            {
              title: "Learning Path",
            },
            {
              title: "VSCode Extension",
            },
            {
              title: "TS Reset",
            },
            {
              title: "Discord Server",
            },
            {
              title: "Concepts",
            },
          ],
        },
        {
          title: "Contact",
          subItems: [
            {
              title: "Contact Us",
            },
            {
              title: "Email support",
            },
          ],
        },
      ]}
    />
  );
};
