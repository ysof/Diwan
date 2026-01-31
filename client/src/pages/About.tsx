/**
 * About Page - عن ديوان
 * Information about the website and its mission
 * Design: Editorial, informative, calm
 */

import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}{" "}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8\">
            عن ديـــوان
          </h1>
          {/* Content Sections */}
          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                رؤيتنا
              </h2>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                مهمتنا
              </h2>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">قيمنا</h2>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                تصنيفاتنا
              </h2>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                التصميم
              </h2>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                اتصل بنا
              </h2>
              <p className="text-muted-foreground mb-4">
                هل لديك اقتراحات أو تعليقات؟ نود أن نسمع منك!
              </p>
              <Link href="/contact">
                <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors duration-300">
                  تواصل معنا
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
