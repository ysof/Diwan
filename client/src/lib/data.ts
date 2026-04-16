import poemsData from "./poems.json";

export interface Poem {
  id: string;
  title: string;
  poet: string;
  content: string[][]; // مصفوفة من مصفوفات الأبيات (صدر وعجز)
  category: string; // التصنيف كاسم (مثل "قصائد وجدانية")
  excerpt: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { id: "itaab", name: "قصائد عتب", description: "قصائد العتب والشكوى" },
  { id: "ghazal", name: "قصائد غزليه", description: "قصائد الغزل والوصف" },
  { id: "wijdan", name: "قصائد وجدانية", description: "قصائد عن الحب والحنين" },
  { id: "watani", name: "قصائد وطنية", description: "قصائد في حب الوطن" },
  {
    id: "mishakah",
    name: "قصائد مشاكاه",
    description: "قصائد المشاكاة والمجاراة",
  },
  { id: "madah", name: "قصائد مدح", description: "قصائد المدح والثناء" },
  { id: "hikam", name: "قصائد حكم", description: "قصائد الحكمة والمواعظ" },
  {
    id: "incomplete",
    name: "قصائد غير مكتملة",
    description: "مجموعة من القصائد التي لم تكتمل بعد",
  },
];

// استخراج البيانات من الكائن { "poems": [...] }
const rawPoems = (poemsData as any).poems || [];

export const poems: Poem[] = rawPoems.map((p: any) => ({
  id: p.id.toString(), // تحويل الـ ID لنص لضمان عمل الروابط
  title: p.title || "",
  poet: p.poet || "زعل بن سرحان الغفلي",
  content: Array.isArray(p.content) ? p.content : [],
  category: p.category || "",
  excerpt:
    p.content && p.content[0] && Array.isArray(p.content[0])
      ? `${p.content[0][0]} ...`
      : p.content && p.content[0]
        ? `${p.content[0]} ...`
        : "",
  date: p.date || "2024",
}));

export function getPoemsByCategory(categoryId: string): Poem[] {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return [];
  return poems.filter(
    (p) => p.category.includes(category.name) || p.category === category.name,
  );
}

export function getPoemById(id: string): Poem | undefined {
  return poems.find((p) => p.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
