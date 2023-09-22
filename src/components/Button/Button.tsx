import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button style={{ background: "white", color: "blue" }}>
      {props.label} woo
    </button>
  );
};

export default Button;
