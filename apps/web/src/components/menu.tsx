"use client";

import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const allSections = [
  {
    slug: "caching",
    tag: "Caching",
  },
  {
    slug: "database",
    tag: "Database",
  },
  {
    slug: "ide",
    tag: "IDE",
  },
  {
    slug: "workflows",
    tag: "Workflows",
  },
  {
    slug: "ui",
    tag: "UI Components",
  },
  {
    slug: "deployment",
    tag: "Deployment",
  },
  {
    slug: "monitoring",
    tag: "Monitoring",
  },
  {
    slug: "llm",
    tag: "LLM Providers",
  },
  {
    slug: "agents",
    tag: "Agents",
  },
  {
    slug: "mcp",
    tag: "MCP",
  },
  {
    slug: "web",
    tag: "Web Search",
  },
  {
    slug: "coding",
    tag: "Coding",
  },
  {
    slug: "framework",
    tag: "Framework",
  },
  {
    slug: "api",
    tag: "API",
  },
  {
    slug: "storage",
    tag: "Storage",
  },
  {
    slug: "ratelimit",
    tag: "Rate Limiting",
  },
  {
    slug: "vector",
    tag: "Vector",
  },

  {
    slug: "memory",
    tag: "Memory Management",
  },
];

export function Menu() {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-4 flex flex-col border-r">
      <ScrollArea className="grow">
        <div className="gap-y-6">
          <Link href="/tools">
            <Button
              className="w-full justify-start font-semibold"
              variant={pathname === "/tools" ? "secondary" : "ghost"}
            >
              All
            </Button>
          </Link>
          <Separator className="my-2" />
          {allSections
            .slice()
            .sort((a, b) => a.tag.localeCompare(b.tag))
            .map((section) => {
              const isActive = pathname.startsWith(`/tools/${section.slug}`);

              return (
                <Link href={`/tools/${section.slug}`} key={section.tag}>
                  <Button
                    className="w-full justify-start cursor-pointer text-base"
                    size={"lg"}
                    variant={isActive ? "secondary" : "ghost"}
                  >
                    {section.tag}
                  </Button>
                </Link>
              );
            })}
        </div>
      </ScrollArea>
      <Separator className="my-4" />
      <a href="https://github.com/nt3ai/nt3" rel="noreferrer" target="_blank">
        <Button
          className="w-full bg-[#F5F5F3]/30 text-black border border-black rounded-full items-center justify-center gap-2 font-medium hidden md:flex dark:text-white dark:border-white"
          variant="outline"
        >
          <span>Submit</span> <PlusIcon className="w-4 h-4" />
        </Button>
      </a>
    </aside>
  );
}
