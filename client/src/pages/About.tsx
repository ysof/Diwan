/**
 * About Page - عن الشاعر
 * Poet biography and literary background
 * Design: Editorial, calm, biographical
 */

import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Poet Image */}
          <div className="mb-10 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700">
              <img
                src="/poet.png"
                alt="الشاعر زعل بن سرحان الغفلي"
                className="
        w-full
        h-full
        object-cover
        object-[50%_15%]
      "
              />
            </div>
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-10 text-center">
            عن الشاعر
          </h1>

          {/* Content */}
          <div className="space-y-10 leading-loose text-lg text-neutral-900 dark:text-neutral-100 font-poetry">
            {/* Intro */}
            <section>
              <p>
                <strong>زعل بن سرحان الغفلي</strong> هو شاعر نبطي إماراتي من
                قبيلة الغفلة، ويُعد من الأصوات الشعرية المعروفة في الشعر الشعبي،
                خصوصًا في الوصف والحكمة والوجدان.
              </p>
            </section>

            {/* Bio */}
            <section>
              <h2 className="text-2xl font-bold mb-4">نبذة عنه</h2>

              <ul className="list-disc pr-6 space-y-2">
                <li>
                  ينتمي إلى قبيلة الغفلة، وهي قبيلة لها حضور تاريخي واجتماعي في
                  دولة الإمارات.
                </li>
                <li>
                  عُرف بقوة لغته وبساطة أسلوبه في الوقت نفسه، مما جعل شعره
                  قريبًا من الناس.
                </li>
                <li>تناول في قصائده موضوعات متعددة، من أبرزها:</li>
              </ul>

              <ul className="list-disc pr-10 mt-4 space-y-1">
                <li>الحكمة والتجربة</li>
                <li>الفخر والانتماء</li>
                <li>القيم القبلية</li>
                <li>التأمل في الحياة والزمان</li>
              </ul>

              <p className="mt-4">
                يُتداول شعره شفهيًا في المجالس، وبعض قصائده موثّقة ضمن التراث
                الشعري المحلي.
              </p>
            </section>

            {/* Status */}
            <section>
              <h2 className="text-2xl font-bold mb-4">مكانته الشعرية</h2>
              <p>
                يُعتبر زعل بن سرحان الغفلي من الشعراء الذين عبّروا عن بيئتهم
                وزمنهم بصدق، ويُستشهد بشعره لما يحتويه من معانٍ عميقة وصور نابعة
                من الحياة البدوية والاجتماعية في دولة الإمارات.
              </p>
            </section>

            {/* Contact CTA */}
            <section className="pt-6 border-t border-border">
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                هل لديك ملاحظة، توثيق، أو إضافة حول شعر الشاعر؟
              </p>
              <Link href="/contact">
                <button className="px-6 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300">
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
