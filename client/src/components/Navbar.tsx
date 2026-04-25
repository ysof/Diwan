/**
 * Navbar Component
 * Professional, sticky navigation bar with RTL support
 * Design: Minimalist, editorial, calm
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = { label: string; href: string };

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "الرئيسية", href: "/" },
      { label: "القصائد", href: "/poems" },
      { label: "التصنيفات", href: "/categories" },
      { label: "عن الشاعر", href: "/about" },
      { label: "تواصل", href: "/contact" },
    ],
    [],
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus({ preventScroll: true });
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Diwan Logo"
            className="h-10 block dark:hidden"
          />
          <img
            src="/logo-white.png"
            alt="Diwan Logo"
            className="h-10 hidden dark:block"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary transition-colors duration-300"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={[
          "md:hidden border-t border-border bg-card overflow-hidden",
          "transition-[max-height,opacity,transform] duration-300 ease-out",
          isOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-1",
        ].join(" ")}
      >
        <div
          ref={panelRef}
          tabIndex={-1}
          className="container flex flex-col gap-2 py-4 outline-none"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300 text-right"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
