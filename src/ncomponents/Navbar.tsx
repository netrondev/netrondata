// import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./Avatar";
import { NavbarAdmin } from "./NavbarAdmin";
import Button from "./Button";

import { Loading } from "./Loading";
import { AppName } from "./Version";
import Link from "next/link";
import { Container } from "./Container";
import { cn } from "~/nutils/cn";

export type AuthStatus = "authenticated" | "unauthenticated" | "loading";

export function Navbar(props: {
  status?: AuthStatus;
  className?: string;
  image?: string;
  signIn?: () => {};
  signOut?: () => {};
}) {
  const { status, image, signIn, signOut, className } = props;

  return (
    <nav
      className={cn(
        // "text-purple fixed left-0 right-0 top-0 z-50 bg-neutral-50/90 px-5 py-4 backdrop-blur"
        "text-purple z-50 px-5 py-4 backdrop-blur"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 text-xs">
          <Link href="/">
            {/* Vulcan<span className="font-bold">University</span> */}

            <span className="font-bold text-black dark:text-white">NETRON</span>
          </Link>
          {/* <Button href="/">
            <AppName />
          </Button> */}
          <Link href="/components">Components</Link>
          {/* <Link href="/workshops">Pro Workshops</Link>
          <Link href="/tutorials">Free Tutorials</Link>
          <Link href="/tips">Tips</Link>
          <Link href="/articles">Articles</Link> */}

          <div className="flex-1" />

          {/* <span>Search</span>
          <span>Feedback</span> */}

          {status === "authenticated" && (
            <>
              <NavbarAdmin status={status} is_admin={false} />

              {/* <Button href="/wallet" className="h-7 items-center">
                wallet
              </Button> */}

              <Avatar
                image={image ?? ""}
                // image={null}
                onClick={function (): void {
                  if (signOut) signOut();
                }}
              />
            </>
          )}
          {status === "unauthenticated" && (
            <Button
              onClick={() => {
                if (signIn) signIn();
              }}
            >
              Account
            </Button>
          )}

          {status === "loading" && <Loading />}
        </div>
      </Container>
    </nav>
  );
}
