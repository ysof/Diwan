/**
 * Poems Page - القصائد
 * Display all poems in a list format
 * Design: Clean, editorial, focused on content
 */

import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { poems, categories } from "@/lib/data";

export default function Poems() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              القصائد
            </h1>
            <p className="text-lg text-muted-foreground">
              مختارة من أجمل القصائد العربية
            </p>
          </div>

          {/* Poems Grid */}
          <div className="space-y-6">
            {poems.map((poem) => (
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
                          const category = categories.find((c) => c.id === catId);
                          return category ? (
                            <span
                              key={catId}
                              className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                            >
                              {category.name}
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
        </div>
      </div>
    </Layout>
  );
}
