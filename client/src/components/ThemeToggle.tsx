/**
 * Theme Toggle Component
 * Allows users to switch between light and dark modes
 * Design: Minimalist, editorial style
 */

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 hover:bg-secondary text-foreground focus-ring"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" strokeWidth={1.5} />
      ) : (
        <Sun className="w-5 h-5" strokeWidth={1.5} />
      )}
    </button>
  );
}
