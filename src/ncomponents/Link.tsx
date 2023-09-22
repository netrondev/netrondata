import React, { DetailedHTMLProps } from "react";

export function Link(
  props: DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return <a {...props} />;
}
