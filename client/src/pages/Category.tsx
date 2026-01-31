/**
 * Category Detail Page - صفحة تصنيف
 * Display poems in a specific category
 * Design: Editorial, focused, calm
 */

import { Link, useParams } from "wouter";
import { Layout } from "@/components/Layout";
import { getPoemsByCategory, getCategoryById, categories } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function Category() {
  const params = useParams();
  const categoryId = params.id as string;
  const category = getCategoryById(categoryId);
  const categoryPoems = getPoemsByCategory(categoryId);

  if (!category) {
    return (
      <Layout>
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              التصنيف غير موجود
            </h1>
            <Link href="/categories">
              <button className="px-6 py-2 text-primary font-semibold hover:text-accent transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
                العودة إلى التصنيفات
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
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link href="/categories">
              <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 mb-6">
                <ArrowLeft className="w-4 h-4" />
                العودة إلى التصنيفات
              </button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {category.description}
            </p>
          </div>

          {/* Poems in Category */}
          {categoryPoems.length > 0 ? (
            <div className="space-y-6">
              {categoryPoems.map((poem) => (
                <Link key={poem.id} href={`/poem/${poem.id}`}>
                  <div className="editorial-card cursor-pointer group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {poem.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-3">{poem.poet}</p>
                        <p className="text-foreground leading-relaxed mb-4">
                          {poem.excerpt}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {poem.categories.map((catId) => {
                            const cat = categories.find((c) => c.id === catId);
                            return cat ? (
                              <span
                                key={catId}
                                className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                              >
                                {cat.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(poem.date).toLocaleDateString("ar-SA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                لا توجد قصائد في هذا التصنيف حالياً
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
