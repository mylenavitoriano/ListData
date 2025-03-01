"use client";
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return resolvedTheme === "dark" ? (
    <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
      <LucideSun />
    </Button>
  ) : (
    <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
      <LucideMoon />
    </Button>
  );
};

export default ThemeSwitch;
