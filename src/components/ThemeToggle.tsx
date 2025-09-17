"use client";
import { Moon, Sun } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur-md border border-white/10"
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6 text-gray-800" />
      ) : (
        <Sun className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
}
