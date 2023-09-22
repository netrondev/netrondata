import Button from "./Button";
import { AuthStatus } from "./Navbar";

export function NavbarAdmin({
  is_admin,
  status,
}: {
  is_admin?: boolean;
  status: AuthStatus;
}) {
  //////////////////

  if (status === "loading") return null;
  if (status === "unauthenticated") return null;

  if (is_admin)
    return (
      <>
        <Button href="/admin/post">Post</Button>
      </>
    );

  return null;
}
