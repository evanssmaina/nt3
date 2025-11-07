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
  toolsPricing,
  useToolsFilterParams,
} from "@/hooks/use-tools-filter-params";

type Pricing = (typeof toolsPricing)[number]["value"];

export function ToolPricingFilter() {
  const { filters, setFilters } = useToolsFilterParams();
  const selectedPricing = filters.pricing;
  const allPricing: Pricing[] = toolsPricing.map((p) => p.value);
  const isAllSelected = selectedPricing.length === allPricing.length;

  const handleAllChange = useCallback(
    (checked: boolean) => {
      if (checked) {
        setFilters({ ...filters, pricing: allPricing });
      } else {
        setFilters({ ...filters, pricing: [] });
      }
    },
    [filters, setFilters, allPricing]
  );

  const handlePricingChange = useCallback(
    (value: string, checked: boolean) => {
      let newPricing: string[];

      if (checked) {
        // Add pricing
        newPricing = [...selectedPricing, value];
      } else {
        // Remove pricing
        newPricing = selectedPricing.filter((p) => p !== value);
      }

      // If all pricing options are now selected, set to all
      if (newPricing.length === allPricing.length) {
        setFilters({ ...filters, pricing: allPricing });
      } else {
        setFilters({ ...filters, pricing: newPricing as Pricing[] });
      }
    },
    [selectedPricing, filters, setFilters, allPricing]
  );

  return (
    <Popover>
      <PopoverTrigger render={<Button variant={"outline"} />}>
        <div className="flex items-center gap-2">
          <span className="truncate">Pricing</span>
          <span className="ml-1 rounded-full bg-muted px-1.5 py-0.5 text-xs">
            {selectedPricing.length}/{toolsPricing.length}
          </span>
        </div>
        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[220px] p-0">
        <div className="p space-y-4">
          <div className="font-medium text-sm">Filter by Pricing</div>

          {/* All Pricing Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isAllSelected}
              id="pricing-all"
              onCheckedChange={handleAllChange}
            />
            <label
              className="text-sm font-medium leading-none cursor-pointer select-none"
              htmlFor="pricing-all"
            >
              All Pricing
            </label>
          </div>

          {/* Separator */}
          <div className="border-t " />

          {/* Individual Pricing Checkboxes */}
          <div className="space-y-3">
            {toolsPricing.map((option) => {
              const isChecked = selectedPricing.includes(option.value);
              return (
                <div className="flex items-center space-x-2" key={option.value}>
                  <Checkbox
                    checked={isChecked}
                    id={`pricing-${option.value}`}
                    onCheckedChange={(checked) =>
                      handlePricingChange(option.value, checked as boolean)
                    }
                  />
                  <label
                    className="flex items-center gap-2 text-sm cursor-pointer select-none flex-1"
                    htmlFor={`pricing-${option.value}`}
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
