/**
 * Navbar Component
 * Professional, sticky navigation bar with RTL support
 * Design: Minimalist, editorial, calm
 */

import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Brand */}
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ديوان"
            className="h-10 w-auto md:h-12 object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            الرئيسية
          </Link>
          <Link
            href="/poems"
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            القصائد
          </Link>
          <Link
            href="/categories"
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            التصنيفات
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            عن ديوان
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            تواصل
          </Link>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border bg-card">
        <div className="container flex flex-col gap-2 py-4">
          <Link
            href="/"
            className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300"
          >
            الرئيسية
          </Link>
          <Link
            href="/poems"
            className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300"
          >
            القصائد
          </Link>
          <Link
            href="/categories"
            className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300"
          >
            التصنيفات
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300"
          >
            عن ديوان
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300"
          >
            تواصل
          </Link>
        </div>
      </div>
    </nav>
  );
}
