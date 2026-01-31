/**
 * Poem Detail Page - صفحة قصيدة
 * Focused reading experience for individual poems
 * Design: Editorial, minimalist, poem-focused
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
            <h1 className="text-3xl font-bold text-foreground mb-4">
              القصيدة غير موجودة
            </h1>
            <Link href="/poems">
              <button className="px-6 py-2 text-primary font-semibold hover:text-accent transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
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
        <div className="max-w-2xl mx-auto">
          {/* Navigation */}
          <Link href="/poems">
            <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 mb-8">
              <ArrowLeft className="w-4 h-4" />
              العودة إلى القصائد
            </button>
          </Link>

          {/* Article Header */}
          <header className="mb-12 pb-8 border-b border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {poem.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-lg text-primary font-semibold mb-2">{poem.poet}</p>
                <time className="text-sm text-muted-foreground">
                  {new Date(poem.date).toLocaleDateString("ar-SA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 border border-border rounded-lg hover:border-primary">
                <Share2 className="w-4 h-4" />
                مشاركة
              </button>
            </div>
          </header>

          {/* Categories */}
          <div className="mb-12 pb-8 border-b border-border">
            <p className="text-sm text-muted-foreground mb-3">التصنيفات:</p>
            <div className="flex gap-2 flex-wrap">
              {poem.categories.map((catId) => {
                const category = categories.find((c) => c.id === catId);
                return category ? (
                  <Link key={catId} href={`/category/${catId}`}>
                    <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                      {category.name}
                    </span>
                  </Link>
                ) : null;
              })}
            </div>
          </div>

          {/* Poem Content */}
          <div className="poem-text text-foreground mb-12 whitespace-pre-wrap">
            {poem.content}
          </div>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-border flex justify-between items-center">
            <Link href="/poems">
              <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300">
                <ArrowLeft className="w-4 h-4" />
                جميع القصائد
              </button>
            </Link>
            <Link href="/">
              <button className="text-primary hover:text-accent transition-colors duration-300">
                الرئيسية
              </button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
