export type ToolCategory =
  | "Framework"
  | "SDK"
  | "database"
  | "Vector Database"
  | "LLM"
  | "API"
  | "Infrastructure"
  | "Monitoring"
  | "Deployment"
  | "IDE";

export interface Tool {
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  category: ToolCategory | ToolCategory[];
  tags: string[];
  logo?: string;
  website?: string;
  image?: string;
  languages?: string[];
  docs?: string;
  github?: string;
  pricing?: {
    model: "free" | "paid" | "freemium" | "open-source";
    price?: string;
  };
  aiSummary?: string;
}
