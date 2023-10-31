import React from "react";
import { Button } from "./Button";
import "tailwindcss/tailwind.css";
import { Label } from "./Label";
import { cn } from "../utils/cn";
export default { title: "Button" };

export const ButtonPreview = () => {
  const ButtonStates = (props: { className?: string }) => (
    <>
      <div className={cn(props.className)}>
        <Label title="Normal State">
          <Button>Default</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Label>
      </div>

      <div className={cn(props.className)}>
        <Label title="Active state">
          <Button active>Default</Button>
          <Button variant="text" active>
            Text
          </Button>
          <Button variant="contained" active>
            Contained
          </Button>
          <Button variant="outlined" active>
            Outlined
          </Button>
        </Label>
      </div>
    </>
  );

  return (
    <>
      <div className="flex flex-row gap-2">
        <Label title="default">
          <Button>Default</Button>
        </Label>

        <Label title="small:">
          <Button size="sm">TEST BUTTON</Button>
          <Button size="sm" variant="text">
            Text
          </Button>
          <Button size="sm" variant="contained">
            Contained
          </Button>
          <Button size="sm" variant="outlined">
            Outlined
          </Button>
        </Label>

        <Label title="medium">
          <Button size="md">TEST BUTTON</Button>

          <Button size="md" variant="text">
            Text
          </Button>
          <Button size="md" variant="contained">
            Contained
          </Button>
          <Button size="md" variant="outlined">
            Outlined
          </Button>
        </Label>

        <Label title="large">
          <Button size="lg">TEST BUTTON</Button>

          <Button size="lg" variant="text">
            Text
          </Button>
          <Button size="lg" variant="contained">
            Contained
          </Button>
          <Button size="lg" variant="outlined">
            Outlined
          </Button>
        </Label>
      </div>

      <div className="flex">
        <ButtonStates />
        <ButtonStates className="dark" />
      </div>
    </>
  );
};
