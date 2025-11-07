"use client";

import { ChevronDown } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  toolsLanguages,
  useToolsFilterParams,
} from "@/hooks/use-tools-filter-params";

type Language = (typeof toolsLanguages)[number]["value"];

export function ToolLanguagesFilter() {
  const { filters, setFilters } = useToolsFilterParams();
  const selectedLanguages = filters.language;
  const allLanguages: Language[] = toolsLanguages.map((lang) => lang.value);
  const isAllSelected = selectedLanguages.length === allLanguages.length;

  const handleAllChange = useCallback(
    (checked: boolean) => {
      if (checked) {
        setFilters({ ...filters, language: allLanguages });
      } else {
        setFilters({ ...filters, language: [] });
      }
    },
    [filters, setFilters, allLanguages]
  );

  const handleLanguageChange = useCallback(
    (value: string, checked: boolean) => {
      let newLanguages: string[];

      if (checked) {
        // Add language
        newLanguages = [...selectedLanguages, value];
      } else {
        // Remove language
        newLanguages = selectedLanguages.filter((lang) => lang !== value);
      }

      // If all languages are now selected, set to all
      if (newLanguages.length === allLanguages.length) {
        setFilters({ ...filters, language: allLanguages });
      } else {
        setFilters({ ...filters, language: newLanguages as Language[] });
      }
    },
    [selectedLanguages, filters, setFilters, allLanguages]
  );

  return (
    <Popover>
      <PopoverTrigger render={<Button variant={"outline"} />}>
        <div className="flex items-center gap-2">
          <span className="truncate">Languages</span>
          <span className="ml-1 rounded-full bg-muted px-1.5 py-0.5 text-xs">
            {selectedLanguages.length}/{toolsLanguages.length}
          </span>
        </div>
        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[220px] p-0">
        <div className=" space-y-4">
          <div className="font-medium text-sm">Filter by Language</div>

          {/* All Languages Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isAllSelected}
              id="language-all"
              onCheckedChange={handleAllChange}
            />
            <label
              className="text-sm font-medium leading-none cursor-pointer select-none"
              htmlFor="language-all"
            >
              All Languages
            </label>
          </div>

          {/* Separator */}
          <div className="border-t" />

          {/* Individual Language Checkboxes */}
          <div className="space-y-3">
            {toolsLanguages.map((option) => {
              const isChecked = selectedLanguages.includes(option.value);
              return (
                <div className="flex items-center space-x-2" key={option.value}>
                  <Checkbox
                    checked={isChecked}
                    id={`language-${option.value}`}
                    onCheckedChange={(checked) =>
                      handleLanguageChange(option.value, checked as boolean)
                    }
                  />
                  <label
                    className="flex items-center gap-2 text-sm cursor-pointer select-none flex-1"
                    htmlFor={`language-${option.value}`}
                  >
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
