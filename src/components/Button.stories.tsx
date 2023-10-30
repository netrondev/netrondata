import React from "react";
import { Button } from "./Button";
import "tailwindcss/tailwind.css";
import { Label } from "./Label";
export default { title: "Button" };

export const ButtonPreview = () => (
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

    <div className="flex flex-row dark gap-2 mt-2">
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
  </>
);
