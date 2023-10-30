import React, { useState } from "react";
import { Alert } from "./Alert";
import { Section } from "./Section";
import { MenuDropdown } from "./MenuDropdown";
import { Button } from "./Button";

export default { title: "MenuDropdown" };

export const MenuDropdownSamples = () => {
  const [active_id, active_id_set] = useState("1_1");
  const [contents, menustate] = useState([
    {
      id: "0",
      title: "Advanced Props",
      is_done: true,
      subitems: [
        {
          id: "0_0",
          title: "Type-Checking React Props With Discriminated Unions",
          is_done: true,
        },
        {
          id: "0_1",
          title: "Destructuring Discriminated Unions in React Props",
          is_done: true,
        },
      ],
    },
    {
      id: "1",
      title: "Using Generics with Components",
      is_done: true,
      expanded: true,
      subitems: [
        {
          id: "1_0",
          title: "DRY out Code with Generic Type Helpers",
          is_done: true,
        },
        {
          id: "1_1",
          title: "Refactoring to a Type Helper",
          is_done: true,
          subitems: [],
        },
      ],
    },
  ]);
  return (
    <Section className="flex flex-col">
      <MenuDropdown
        contents={contents}
        active_id={active_id}
        defaultComponent={(i) => (
          <Button
            active={i.id === active_id}
            onClick={(z) => {
              active_id_set(i.id);
            }}
          >
            {i.title}
          </Button>
        )}
      />
    </Section>
  );
};
