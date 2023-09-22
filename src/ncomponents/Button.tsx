import React from "react";

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button style={{ background: "white", color: "blue" }}>
      {props.label}
    </button>
  );
};
