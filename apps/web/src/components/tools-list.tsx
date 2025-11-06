"use client";

import { useQueryState } from "nuqs";
import { useCallback, useMemo, useState } from "react";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";
import { SearchInputFilter } from "./search-input-filter";

export function ToolsList({
  category = "all",
}: {
  category: ToolCategory | "all";
}) {
  const [searchQuery, setSearchQuery] = useQueryState("q");

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

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [category, searchQuery]);

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value);
    },
    [searchQuery, setSearchQuery]
  );

  const handleClear = useCallback(() => {
    setSearchQuery(null);
  }, [searchQuery, setSearchQuery]);

  return (
    <>
      {/* Filters and Search */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 w-full">
            <SearchInputFilter
              onChange={handleSearchChange}
              onClear={handleClear}
              placeholder="Search by name, description, or tag..."
              value={searchQuery}
            />
          </div>
        </div>
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
