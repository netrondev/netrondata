import { useSession } from "next-auth/react";
import { type ReactNode } from "react";

export function LayoutAdmin(props: { children: ReactNode }) {
  const session = useSession();
  if (session.status === "loading") return null;
  if (session.status === "unauthenticated") return null;
  if (!session.data) return null;

  return <>{props.children}</>;
}
