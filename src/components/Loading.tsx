import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "../utils/cn";

export function Loading(props: { className?: string; size?: number }) {
  return (
    <AiOutlineLoading3Quarters
      className={cn(
        "animate-spin self-center text-emerald-400",
        props.className
      )}
      size={props.size}
    />
  );
}
