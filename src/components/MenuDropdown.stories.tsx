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
          is_done: true,
          subitems: [
            {
              title: "Type-Checking React Props With Discriminated Unions",
              is_done: true,
            },
            {
              title: "Destructuring Discriminated Unions in React Props",
              is_done: true,
            },
          ],
        },

        {
          title: "Using Generics with Components",
          is_done: true,
          subitems: [
            {
              title: "DRY out Code with Generic Type Helpers",
              is_done: true,
            },
            {
              title: "Refactoring to a Type Helper",
              is_done: true,
              subitems: [],
            },
          ],
        },
      ]}
      defaultComponent={(i) => <div>{i.subitems![0]!.is_done}</div>}
    />
  </Section>
);
