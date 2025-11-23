"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else if (stored === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      // auto detect (system)
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
        setIsDark(true);
      }
    }
  }, []);

  const toggle = () => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="px-2 py-1 text-sm rounded-md border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
