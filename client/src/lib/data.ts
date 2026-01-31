/**
 * ديـــوان - Arabic Poetry Data Structure
 * Contains all poems and categories for the website
 */
import tazrifContent from "../content/poems/tazrif-dumou.md?raw";
import yaArifeenContent from "../content/poems/ya-arifeen-alshiir.md?raw";
import helwatContent from "../content/poems/helwat-alawsaf.md?raw";
import sharjahContent from "../content/poems/alsharjah.md?raw";

export interface Poem {
  id: string;
  title: string;
  poet: string;
  content: string;
  categories: string[];
  excerpt: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

// Categories
export const categories: Category[] = [
  {
    id: "ghazal",
    name: "الغزل والوصف",
    description: "قصائد الغزل والوصف والمشاعر الرقيقة",
  },
  {
    id: "watani",
    name: "وطنيات",
    description: "قصائد في حب الوطن والمدح والولاء",
  },
  {
    id: "wijdan",
    name: "وجدانيات",
    description: "قصائد عن الحب والفراق والحنين",
  },
];

// Sample Poems
export const poems: Poem[] = [
  {
    id: "tazrif-dumou",
    title: "تذرف دموع",
    poet: "زعل بن سرحان الغفلي",
    content: tazrifContent,
    categories: ["wijdan"],
    excerpt: "قصيدة عن الحب والفراق",
    date: "2026-02-01",
  },
  {
    id: "ya-arifeen-alshiir",
    title: "يا عارفين الشعر",
    poet: "زعل بن سرحان الغفلي",
    content: yaArifeenContent,
    categories: ["watani"],
    excerpt: "قصيدة عن مدح وولاء الوطن",
    date: "2026-02-01",
  },
  {
    id: "helwat-alawsaf",
    title: "حلوة الأوصاف",
    poet: "زعل بن سرحان الغفلي",
    content: helwatContent,
    categories: ["ghazal"],
    excerpt: "قصيدة غزل ووصف",
    date: "2026-02-01",
  },
  {
    id: "alsharjah",
    title: "الشارقة",
    poet: "زعل بن سرحان الغفلي",
    content: sharjahContent,
    categories: ["watani"],
    excerpt: "قصيدة وطنية في مدح الشارقة وحاكمها",
    date: "2026-02-01",
  },
];

// Helper functions
export function getPoemsByCategory(categoryId: string): Poem[] {
  return poems.filter(poem => poem.categories.includes(categoryId));
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(cat => cat.id === categoryId);
}

export function getPoemById(poemId: string): Poem | undefined {
  return poems.find(poem => poem.id === poemId);
}
