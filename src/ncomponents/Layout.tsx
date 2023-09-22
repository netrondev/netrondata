import { useEffect, type ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";

import { Section } from "./Section";
import { useRouter } from "next/router";
import { AppVersion } from "./Version";
import { Loading } from "./Loading";
import { Footer } from "./Footer";

export function AdminCheck(props: { children: ReactNode }) {
  const session = useSession();

  if (session.status === "loading") {
    return <>LOADING...</>;
  }

  if (session.status === "authenticated" && session.data.user.is_admin) {
    return (
      <Section className="border border-purple-500 dark:border-purple-500">
        {props.children}
      </Section>
    );
  }

  return <>NOT AUTHORIZED</>;
}

export default function Layout(props: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const {
    // systemTheme, theme,
    setTheme,
  } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  const session = useSession();

  if (typeof window !== "undefined") {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        const systemThemeUpdate = e.matches ? "dark" : "light";
        setTheme(systemThemeUpdate);
      });
  }

  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);

  if (session.status === "loading")
    return (
      <div className="animate-pulse">
        <Loading className="mx-auto mt-20 h-20 w-20 animate-spin" />
      </div>
    );

  return (
    <section className="flex h-screen flex-col justify-between text-neutral-500">
      {props.children}
    </section>
  );
}
