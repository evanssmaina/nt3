import type { Metadata } from "next";
import { Suspense } from "react";
import { FadeInWrapper } from "@/components/motion-wrappers";
import { ToolsList } from "@/components/tools-list";
import { allSections } from "@/data/sections";
import { getAllCategories } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";

interface ToolPageProps {
  params: Promise<{ category: ToolCategory }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { category } = await params;
  const section = allSections.find((s) => s.slug === category.toLowerCase());

  return {
    title: `${section?.tag}`,
    description: section?.description,
  };
}

export default async function ToolPage(props: PageProps<"/[category]">) {
  const { category } = await props.params;

  const section = allSections.find((s) => s.slug === category.toLowerCase());

  return (
    <FadeInWrapper>
      <div className="mb-8 mt-10">
        <div className="mb-10">
          <h1 className="lg:text-2xl text-xl font-medium mb-2 bg-linear-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            {section?.tag}
          </h1>
          <p className="text-muted-foreground">{section?.description}</p>
        </div>

        <Suspense>
          <ToolsList category={category as ToolCategory} />
        </Suspense>
      </div>
    </FadeInWrapper>
  );
}
