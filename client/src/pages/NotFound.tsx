/**
 * NotFound Page - 404
 * Displayed when a page is not found
 * Design: Editorial, helpful, calm
 */

import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="container py-20 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold text-primary opacity-20 mb-4">
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              الصفحة غير موجودة
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون قد حُذفت أو تم نقلها.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2">
                العودة إلى الرئيسية
                <ArrowLeft className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/poems">
              <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-secondary transition-colors duration-300">
                استكشف القصائد
              </button>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-muted-foreground mb-8">قد تكون مهتماً بـ:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/">
                <div className="editorial-card cursor-pointer group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    الرئيسية
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    اكتشف أحدث القصائد والمختارات
                  </p>
                </div>
              </Link>
              <Link href="/poems">
                <div className="editorial-card cursor-pointer group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    القصائد
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    تصفح جميع القصائد المتاحة
                  </p>
                </div>
              </Link>
              <Link href="/categories">
                <div className="editorial-card cursor-pointer group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    التصنيفات
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    استكشف حسب الموضوع والتصنيف
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
