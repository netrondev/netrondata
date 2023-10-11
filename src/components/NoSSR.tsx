import React, { ReactNode, useEffect, useState } from "react";

export function NoSSR(props: { children: ReactNode }) {
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    if (!showChild) setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return <></>;
  }

  return <></>;
}
