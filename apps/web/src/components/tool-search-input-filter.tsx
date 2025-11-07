"use client";

import { useCallback } from "react";
import { useToolsFilterParams } from "@/hooks/use-tools-filter-params";
import { SearchInputFilter } from "./search-input-filter";

export function ToolSearchInputFilter() {
  const { filters, setFilters } = useToolsFilterParams();

  const handleSearchChange = useCallback((value: string) => {
    setFilters({ q: value });
  }, []);

  const handleClear = useCallback(() => {
    setFilters({ ...filters, q: null });
  }, [filters]);

  return (
    <SearchInputFilter
      onChange={handleSearchChange}
      onClear={handleClear}
      placeholder="Search by name, description, or tag..."
      value={filters.q}
    />
  );
}
