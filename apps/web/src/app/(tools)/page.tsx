import { Suspense } from "react";
import { FadeInOutWrapper } from "@/components/motion-wrappers";
import { ToolsList } from "@/components/tools-list";

export default function ToolsPage() {
  return (
    <FadeInOutWrapper>
      <h1 className="lg:text-3xl text-2xl mb-2 mt-10 max-w-xl text-balance font-medium">
        <span className="bg-linear-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          Discover every tool
        </span>{" "}
        for building AI apps and Agents
      </h1>
      <p className="mb-10 text-muted-foreground text-balance max-w-xl">
        Curated tools for building the next generation of AI.
      </p>
      <Suspense>
        <ToolsList category="all" />
      </Suspense>
    </FadeInOutWrapper>
  );
}
