/**
 * Home Page - الرئيسية
 * Hero section matching reference layout
 */

import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { poems, categories } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  const featuredPoems = poems.slice(0, 3);

  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* ===== TEXT ABOVE HEAD ===== */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              ديوان الشاعر زعل بن سرحان الغفلي
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              مكان هادئ وجميل لاستكشاف وقراءة الشعر العربي. نقدم لك مختارات من
              أجمل القصائد في بيئة تحترم الكلمة وتقدرها.
            </p>

            {/* ===== POET IMAGE (CENTER / 3D) ===== */}
            <div className="relative flex justify-center mb-12">
              <img
                src="/poet-hero.png"
                alt="الشاعر زعل بن سرحان الغفلي"
                className="
                  w-[220px]
                  md:w-[300px]
                  relative
                  z-10
                  drop-shadow-[0_35px_45px_rgba(0,0,0,0.35)]
                "
              />
            </div>

            {/* ===== BUTTONS BELOW LEGS ===== */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/poems">
                <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2">
                  ابدأ القراءة
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </Link>

              <Link href="/categories">
                <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-secondary transition-colors duration-300">
                  استكشف التصنيفات
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED POEMS ================= */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              قصائد مختارة
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              اختيارنا من أجمل القصائد لهذا الأسبوع
            </p>

            <div className="grid gap-6">
              {featuredPoems.map(poem => (
                <Link key={poem.id} href={`/poem/${poem.id}`}>
                  <div className="editorial-card cursor-pointer group">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {poem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {poem.poet}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      {poem.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/poems">
                <button className="px-6 py-2 text-primary font-semibold hover:text-accent transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
                  عرض جميع القصائد
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              التصنيفات
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              اكتشف القصائد حسب التصنيفات المختلفة
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map(category => (
                <Link key={category.id} href={`/category/${category.id}`}>
                  <div className="editorial-card cursor-pointer group text-center">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              عن ديـــوان
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ديـــوان هي منصة مخصصة لعشاق الشعر العربي. نؤمن بأن الشعر هو روح
              الأدب العربي، وأن كل قصيدة تستحق أن تُقرأ بهدوء وتأمل.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              هنا تجد مختارات من القصائد الجميلة، منظمة بعناية وعرضة بتصميم
              يحترم الكلمة ويقدرها.
            </p>
            <Link href="/about">
              <button className="px-6 py-2 text-primary font-semibold hover:text-accent transition-colors duration-300">
                اقرأ المزيد
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
