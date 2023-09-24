import { type ButtonHTMLAttributes, type DetailedHTMLProps, type ReactNode } from "react";
type ButtonEvent = Parameters<NonNullable<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>["onClick"]>>[0];
export default function Button(props: {
    icon?: ReactNode;
    children?: ReactNode;
    href?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
    active?: boolean;
    tooltip?: string;
    onClick?: (e: ButtonEvent) => void | Promise<void>;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export {};
