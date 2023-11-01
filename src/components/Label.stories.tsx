import React from "react";
import { Button } from "./Button";
import "tailwindcss/tailwind.css";
import { Label } from "./Label";
import { cn } from "../utils/cn";
import { Input } from "./Input";
export default { title: "Label" };

export const LabelPreview = () => {
  return (
    <>
      <Label title="default">
        <div>test</div>
        <Input defaultValue={"asdf"} />
      </Label>

      <div className="dark">
        <Label title="default">
          <div>test</div>
          <Input defaultValue={"asdf"} />
        </Label>
      </div>
    </>
  );
};
