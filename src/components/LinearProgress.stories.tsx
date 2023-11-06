import React, { useState } from "react";
import { Alert } from "./Alert";
import { Section } from "./Section";
import { MenuDropdown } from "./MenuDropdown";
import { Button } from "./Button";
import { LinearProgress } from "./LinearProgress";

export default { title: "Progress" };

export const LinearProgressStory = () => {
  return <LinearProgress value={0.5} />;
};
