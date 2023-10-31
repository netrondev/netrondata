import React, { useState } from "react";
import { Alert } from "./Alert";
import { Section } from "./Section";
import { MenuDropdown } from "./MenuDropdown";
import { Button } from "./Button";
import { Seperator } from "./Seperator";

export default { title: "Seperator" };

export const SeperatorStory = () => {
  return (
    <div className="flex flex-col gap-10">
      <Seperator />

      <div className="h-[50px] w-full bg-black/5 flex gap-2">
        test
        <Seperator vertical />
        test
      </div>
    </div>
  );
};
