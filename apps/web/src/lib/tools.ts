import toolsData from "@/data/tools.json";
import { Tool, ToolCategory } from "./types";

export const tools: Tool[] = toolsData as Tool[];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory | "all"): Tool[] {
  if (category === "all") {
    return tools;
  }
  
  const lowerCategory = typeof category === 'string' ? category.toLowerCase() : String(category).toLowerCase();
  
  return tools.filter((tool) => {
    if (Array.isArray(tool.category)) {
      return tool.category.some(
        (cat) => String(cat).toLowerCase() === lowerCategory
      );
    }
    return String(tool.category).toLowerCase() === lowerCategory;
  });
}

export function getAllCategories(): ToolCategory[] {
  const categories = new Set<ToolCategory>();
  tools.forEach((tool) => {
    if (Array.isArray(tool.category)) {
      tool.category.forEach((cat) => categories.add(cat));
    } else {
      categories.add(tool.category);
    }
  });
  return Array.from(categories).sort();
}

export function getAllSlugs() {
  const slugs = new Set<string>();
  tools.forEach((tool) => {
    if (Array.isArray(tool.slug)) {
      tool.slug.forEach((cat) => slugs.add(cat));
    } else {
      slugs.add(tool.slug);
    }
  });

  return Array.from(slugs).sort();
}
export function getCategoryName(category: ToolCategory): string {
  return category;
}
