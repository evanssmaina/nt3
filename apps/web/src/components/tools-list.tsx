"use client";

import { useMemo } from "react";
import { ToolCard } from "@/components/tool-card";
import { useToolsFilterParams } from "@/hooks/use-tools-filter-params";
import { tools } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";
import { ToolFilters } from "./tool-filters";

export function ToolsList({
  category = "all",
}: {
  category: ToolCategory | "all";
}) {
  const { filters } = useToolsFilterParams();

  const filteredTools = useMemo(() => {
    let filtered = tools;

    if (category !== "all") {
      filtered = filtered.filter((tool) =>
        Array.isArray(tool.category)
          ? tool.category.some(
              (cat) =>
                typeof cat === "string" &&
                cat.toLowerCase() === category.toLowerCase()
            )
          : typeof tool.category === "string" &&
            tool.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (filters.q) {
      const query = filters.q.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (filters.language.length > 0) {
      const selectedLanguages = filters.language.map((lang) =>
        lang.toLowerCase()
      );
      filtered = filtered.filter((tool) =>
        tool.languages?.some((lang) =>
          selectedLanguages.includes(lang.toLowerCase())
        )
      );
    }

    if (filters.pricing.length > 0) {
      const selectedPricing = filters.pricing.map((p) => p.toLowerCase());
      filtered = filtered.filter((tool) =>
        selectedPricing.includes(tool.pricing?.model.toLowerCase() || "")
      );
    }

    // Sort alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [category, filters]);

  return (
    <>
      {/* Filters and Search */}
      <div className="mb-6 space-y-4">
        <ToolFilters />
      </div>

      {/* Tools Grid/List */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No tools found matching your criteria.
          </p>
        </div>
      )}
    </>
  );
}
