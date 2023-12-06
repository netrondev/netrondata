import { type ReactNode } from "react";
import { Panel } from "./Panel";
import { Heading } from "./Heading";
import { FaTimes } from "react-icons/fa";
import { ButtonIcon } from "./ButtonIcon";
import { Seperator } from "./Seperator";
import { cn } from "~/utils/cn";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";

// ref https://mui.com/material-ui/react-modal/
export function Modal(props: {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  onBack?: () => void;
  title?: string | ReactNode;
  type?: "over" | "right";
  className?: string;
}) {
  if (!props.open) return <></>;

  if (props.type === "right") {
    return (
      <div className="absolute bottom-0 right-0 top-0 z-[100] h-screen min-w-[35%] overflow-hidden bg-neutral-300/50 shadow-2xl backdrop-blur-sm">
        <Panel className="h-full">
          <header className="flex">
            <Heading>{props.title}</Heading>
            <ButtonIcon
              variant="subtle"
              onClick={() => {
                props.onClose();
              }}
            >
              <FaTimes />
            </ButtonIcon>
          </header>
          <Seperator />
          {props.children}
        </Panel>
      </div>
    );
  }

  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 z-[100] h-screen w-screen rounded-lg  p-20 "
        )}
      >
        <div
          className="fixed left-0 top-0  h-screen w-screen bg-neutral-100/25 backdrop-blur-[1px] transition"
          onClick={() => {
            props.onClose();
          }}
        />
        <section
          className={cn(
            "relative rounded-lg border bg-white p-10 shadow-2xl shadow-neutral-400",
            props.className
          )}
        >
          <header className="flex items-center">
            {props.onBack && (
              <ButtonIcon
                variant="subtle"
                className="mr-2"
                onClick={props.onBack}
              >
                <BsArrowLeft />
              </ButtonIcon>
            )}

            <Heading>{props.title}</Heading>
            <ButtonIcon
              variant="subtle"
              onClick={() => {
                props.onClose();
              }}
            >
              <FaTimes />
            </ButtonIcon>
          </header>
          <Seperator />

          {props.children}
        </section>
      </div>
    </>
  );
}
