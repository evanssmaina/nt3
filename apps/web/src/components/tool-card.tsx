import Image from "next/image";
import Link from "next/link";
import { Tool } from "@/lib/types";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      className="group flex flex-col p-5 rounded-2xl border bg-card hover:bg-accent/50 transition-all "
      href={`/t/${tool.slug}`}
    >
      <div className="flex items-center mb-3 gap-3">
        <Image
          alt={tool.name}
          className="rounded-lg border object-cover"
          height={40}
          src={tool.image ? `/logos${tool.image}` : "/logos/ai-sdk.png"}
          width={40}
        />
        <h3 className="font-medium text-lg group-hover:text-foreground transition-colors">
          {tool.name}
        </h3>
      </div>
      <p className="text-muted-foreground lg:text-base text-sm mb-4 line-clamp-3 flex-1">
        {tool.shortDescription || tool.description}
      </p>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">
            {tool.category.join(", ")}
          </span>
          {tool.tags.slice(0, 2).map((tag) => (
            <span
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        {tool.pricing && (
          <div className="text-xs text-muted-foreground">
            {tool.pricing.model === "open-source" && "Open Source"}
            {tool.pricing.model === "free" && "Free"}
            {tool.pricing.model === "freemium" && "Freemium"}
            {tool.pricing.model === "paid" &&
              tool.pricing.price &&
              tool.pricing.price}
          </div>
        )}
      </div>
    </Link>
  );
}
