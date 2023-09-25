import React from "react";
import { Button } from "./Button";
import { Loading } from "./Loading";
import { Container } from "./Container";
import { cn } from "../utils/cn";

export function Navbar(props: { className?: string }) {
  return (
    <nav
      className={cn(
        // "text-purple fixed left-0 right-0 top-0 z-50 bg-neutral-50/90 px-5 py-4 backdrop-blur"
        "text-purple z-50 px-5 py-4 backdrop-blur"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 text-xs">
          <Button>
            {/* Vulcan<span className="font-bold">University</span> */}

            <span className="font-bold text-black dark:text-white">LOGO</span>
          </Button>
          {/* <Button href="/">
            <AppName />
          </Button> */}
          {/* <Link href="/components">Components</Link> */}
          {/* <Link href="/workshops">Pro Workshops</Link>
          <Link href="/tutorials">Free Tutorials</Link>
          <Link href="/tips">Tips</Link>
          <Link href="/articles">Articles</Link> */}

          <div className="flex-1" />
        </div>
      </Container>
    </nav>
  );
}
