import {
  parseAsArrayOf,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
} from "nuqs";

export const toolsLanguages = [
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "Python",
    value: "python",
  },
] as const;

export const toolsPricing = [
  {
    label: "Paid",
    value: "paid",
  },
  {
    label: "Freemium",
    value: "freemium",
  },
  {
    label: "Open Source",
    value: "open-source",
  },
] as const;

const languages = toolsLanguages.map((lang) => lang.value);
const pricing = toolsPricing.map((pricing) => pricing.value);

const toolParsers = {
  q: parseAsString,
  language: parseAsArrayOf(parseAsStringLiteral(languages)).withDefault(
    languages
  ),
  pricing: parseAsArrayOf(parseAsStringLiteral(pricing)).withDefault(pricing),
};

export function useToolsFilterParams() {
  const [filters, setFilters] = useQueryStates(toolParsers);

  return {
    filters,
    setFilters,
  };
}
