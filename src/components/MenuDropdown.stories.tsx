import React from "react";
import { Alert } from "./Alert";
import { Section } from "./Section";
import { MenuDropdown } from "./MenuDropdown";

export default { title: "MenuDropdown" };

export const MenuDropdownSamples = () => (
  <Section className="flex flex-col">
    <MenuDropdown
      contents={[
        {
          title: "Advanced Props",
          meta: { is_done: true },
          subitems: [
            { title: "Type-Checking React Props With Discriminated Unions" },
            { title: "Destructuring Discriminated Unions in React Props" },
          ],
        },

        {
          title: "Using Generics with Components",
          meta: { is_done: true },
          subitems: [
            { title: "DRY out Code with Generic Type Helpers" },
            { title: "Refactoring to a Type Helper" },
          ],
        },
      ]}
    />
  </Section>
);
