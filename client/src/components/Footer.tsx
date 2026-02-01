/**
 * Footer Component
 * Editorial, minimal footer with copyright and links
 * Design: Calm, professional
 */

import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16 md:mt-24">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              {/* Light mode logo */}
              <img
                src="/logo.png"
                alt="Diwan Logo"
                className="h-10 block dark:hidden"
              />

              {/* Dark mode logo */}
              <img
                src="/logo-white.png"
                alt="Diwan Logo"
                className="h-10 hidden dark:block"
              />
            </Link>
            {""}
            <p className="text-muted-foreground leading-relaxed">
              مجلة الشعر العربي الحديثة، مكان هادئ لاستكشاف وقراءة الشعر بكل
              هدوء وتأمل.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              الروابط السريعة
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/poems"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  القصائد
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  التصنيفات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  عن ديوان
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>البريد الإلكتروني: info@diwan.com</li>
              <li>الهاتف: +966 50 000 0000</li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                  نموذج التواصل
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} ديـــوان. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
