import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInOutWrapper } from "@/components/motion-wrappers";
import { ToolCard } from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { getAllSlugs, getToolBySlug, getToolsByCategory } from "@/lib/tools";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `${tool.name}`,
    description: tool.shortDescription || tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  // Get related tools by checking all categories of the current tool
  const relatedTools = Array.isArray(tool.category)
    ? tool.category.flatMap((cat) => getToolsByCategory(cat))
    : getToolsByCategory(tool.category);

  // Remove duplicates and the current tool
  const uniqueRelatedTools = Array.from(
    new Map(
      relatedTools
        .filter((t) => t.slug !== tool.slug)
        .map((tool) => [tool.slug, tool])
    ).values()
  );

  return (
    <FadeInOutWrapper className="container max-w-5xl mx-auto">
      <div className="my-8 w-full">
        <div className="flex items-start justify-between gap-6 ">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4 ">
              <Image
                alt={tool.name}
                className="rounded-lg border"
                height={64}
                src={tool.image ? `/logos${tool.image}` : "/logos/ai-sdk.png"}
                width={64}
              />

              <div>
                <h1 className="text-2xl font-medium tracking-tight mb-1">
                  {tool.name}
                </h1>
              </div>
            </div>

            <Link
              href={tool.website as string}
              passHref
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="cursor-pointer">
                Visit
                <ArrowUpRightIcon />
              </Button>
            </Link>

            {/* <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-sm font-medium rounded-md bg-primary/10 text-primary">
                {tool.category}
              </span>
            </div> */}
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-medium mb-2">Description</h2>
          <p className="text-muted-foreground text-base font-mono leading-relaxed">
            {tool.description}
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-medium mb-2">Links</h2>
          {tool.website || tool.github ? (
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {tool.website && (
                <Link
                  className="flex gap-2 items-center text-muted-foreground hover:text-foreground transition-colors"
                  href={tool.website}
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Website
                  <ArrowUpRightIcon className="size-3.5" />
                </Link>
              )}
              {tool.github && (
                <Link
                  className="flex gap-2 items-center text-muted-foreground hover:text-foreground transition-colors"
                  href={tool.github}
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                  <ArrowUpRightIcon className="size-3.5" />
                </Link>
              )}
            </div>
          ) : null}
        </div>
      </div>

      {tool.pricing && (
        <div className="my-8">
          <h3 className="text-lg font-medium mb-2">Pricing</h3>

          <div className="space-y-1">
            <p className="text-muted-foreground capitalize">
              {tool.pricing.model}
            </p>
            {tool.pricing.price && (
              <p className="text-foreground font-medium">
                {tool.pricing.price}
              </p>
            )}
          </div>
        </div>
      )}

      {tool.tags.length > 0 && (
        <div className="my-8">
          <h3 className="text-lg font-medium mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <Link
                className="px-3 py-1 text-sm rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                href={`/?q=${encodeURIComponent(tag)}`}
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="my-8">
        <h3 className="text-lg font-medium mb-2">Related Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {uniqueRelatedTools.slice(0, 3).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </FadeInOutWrapper>
  );
}
