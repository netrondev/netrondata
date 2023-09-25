import React from "react";
import { ButtonDropdown } from "./ButtonDropdown";
import "tailwindcss/tailwind.css";
export default { title: "ButtonDropdown" };

export const ButtonPreview = () => (
  <ButtonDropdown panel={<div>menu</div>}>TEST BUTTON</ButtonDropdown>
);
