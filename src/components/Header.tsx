"use client";

import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import LogoLight from "../../public/logo-light.png";
import LogoDark from "../../public/logo-dark.png";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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
        <Image
          src={theme === "light" ? LogoLight : LogoDark}
          alt="Logo List.Data"
          priority
        />
        <ThemeSwitch />
      </div>
      <hr className="border-t border-secondary my-4" />
    </header>
  );
};

export default Header;
