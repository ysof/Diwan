/**
 * Categories Page - التصنيفات
 * Display all categories overview
 * Design: Editorial, clean, organized
 */

import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { categories, getPoemsByCategory } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function Categories() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              التصنيفات
            </h1>
            <p className="text-lg text-muted-foreground">
              استكشف القصائد حسب الموضوع والتصنيف
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const poemCount = getPoemsByCategory(category.id).length;
              return (
                <Link key={category.id} href={`/category/${category.id}`}>
                  <div className="editorial-card cursor-pointer group h-full">
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        {poemCount} قصيدة
                      </span>
                      <ArrowLeft className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
