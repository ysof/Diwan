/**
 * Poem Detail Page
 * Focused reading experience for individual poems
 * Design: Editorial, minimalist, poem-focused with decorative framing
 */

import { Link, useParams } from "wouter";
import { Layout } from "@/components/Layout";
import { getPoemById, categories } from "@/lib/data";
import { ArrowLeft, Share2 } from "lucide-react";

export default function Poem() {
  const params = useParams();
  const poemId = params.id as string;
  const poem = getPoemById(poemId);

  if (!poem) {
    return (
      <Layout>
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              القصيدة غير موجودة
            </h1>
            <Link href="/poems">
              <button className="px-6 py-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
                العودة إلى القصائد
                <ArrowLeft className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Navigation */}
          <Link href="/poems">
            <button className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 mb-8">
              <ArrowLeft className="w-4 h-4" />
              العودة إلى القصائد
            </button>
          </Link>

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {poem.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  {poem.poet}
                </p>
                <time className="text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date(poem.date).toLocaleDateString("ar-SA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 border border-border rounded-lg">
                <Share2 className="w-4 h-4" />
                مشاركة
              </button>
            </div>
          </header>

          {/* Poem Image */}
          {poem.id === "alsharjah" && (
            <div className="mb-12">
              <img
                src="/poems/sharjah.png"
                alt="الشارقة"
                className="w-full max-h-[420px] object-cover rounded-xl shadow-sm"
              />
            </div>
          )}

          {/* Categories */}
          <div className="mb-10 pb-8 border-b border-border">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
              التصنيفات:
            </p>
            <div className="flex gap-2 flex-wrap">
              {(() => {
                const category = categories.find((c) => c.name === poem.category || poem.category.includes(c.name));
                return category ? (
                  <Link key={category.id} href={`/category/${category.id}`}>
                    <span className="inline-block px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 cursor-pointer">
                      {category.name}
                    </span>
                  </Link>
                ) : null;
              })()}
            </div>
          </div>

          {/* Poem Content with Decorative Frame */}
          <section className="mb-12 poem-frame" dir="rtl">
            <div className="poem-text">
              {Array.isArray(poem.content) ? (
                <div className="space-y-8">
                  {poem.content.map((verse: string[], index: number) => {
                    const right = verse[0] || "";
                    const left = verse[1] || "";

                    return (
                      <div key={index} className="verse-row">
                        {/* Sadr (Right part) */}
                        <div className="sadr">{right}</div>
                        {/* Ajuuz (Left part) */}
                        <div className="ajuuz">{left}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="whitespace-pre-wrap">{poem.content}</div>
              )}
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-border flex justify-between items-center">
            <Link href="/poems">
              <button className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
                <ArrowLeft className="w-4 h-4" />
                جميع القصائد
              </button>
            </Link>

            <Link href="/">
              <button className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
                الرئيسية
              </button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
