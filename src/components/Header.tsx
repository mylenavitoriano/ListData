"use client";

import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import LogoLight from "../../public/logo-light.webp";
import LogoDark from "../../public/logo-dark.webp";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from 'next/link'

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme as "light" | "dark");
    }
  }, [resolvedTheme]);

  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={theme === "light" ? LogoLight : LogoDark}
            alt="Logo List.Data"
            priority
            quality={100}
            height={75}
          />
        </Link>
        <ThemeSwitch />
      </div>
      <hr className="border-t border-secondary my-4" />
    </header>
  );
};

export default Header;
