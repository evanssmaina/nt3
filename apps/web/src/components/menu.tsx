"use client";

import { Menu as MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { allSections } from "@/data/sections";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Desktop sidebar
  if (isDesktop) {
    return (
      <aside className="sticky top-0 left-0 w-64 h-screen flex flex-col bg-background border-r pt-12">
        <div className="p-4 flex flex-col h-full">
          <Link href="/">
            <Button
              className={cn(
                "w-full justify-start text-base cursor-pointer",
                pathname === "/" && "bg-blue-100 text-blue-700 hover:bg-blue-50"
              )}
              variant={pathname === "/" ? "secondary" : "ghost"}
            >
              All tools
            </Button>
          </Link>

          <Separator className="my-2" />

          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="space-y-1">
              {allSections
                .slice()
                .sort((a, b) => a.tag.localeCompare(b.tag))
                .map((section) => {
                  const isActive = pathname === `/${section.slug}`;
                  return (
                    <Link href={`/${section.slug}`} key={section.tag}>
                      <Button
                        className={cn(
                          "w-full justify-start cursor-pointer text-base gap-2",
                          isActive &&
                            "bg-blue-100 text-blue-700 hover:bg-blue-50"
                        )}
                        size={"lg"}
                        variant={isActive ? "secondary" : "ghost"}
                      >
                        <section.icon className="h-4 w-4" />
                        {section.tag}
                      </Button>
                    </Link>
                  );
                })}
            </div>
          </ScrollArea>

          <div className="mt-auto">
            <Separator className="my-2" />
            <Link
              href="https://github.com/nt3ai/nt3"
              passHref
              rel="noreferrer"
              target="_blank"
            >
              <Button
                className="w-full bg-[#F5F5F3]/30 text-black border border-black rounded-full items-center justify-center gap-2 font-medium flex dark:text-white dark:border-white"
                variant="outline"
              >
                <span>Submit</span> <PlusIcon className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  // Mobile sheet
  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 shadow-lg"
          size="icon"
          variant="outline"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-64 p-0" side="left">
        <div className="p-4 flex flex-col h-full pt-12">
          <Link href="/">
            <Button
              className={cn(
                "w-full justify-start text-base cursor-pointer",
                pathname === "/" && "bg-blue-100 text-blue-700 hover:bg-blue-50"
              )}
              variant={pathname === "/" ? "secondary" : "ghost"}
            >
              All tools
            </Button>
          </Link>

          <Separator className="my-2" />

          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="space-y-1">
              {allSections
                .slice()
                .sort((a, b) => a.tag.localeCompare(b.tag))
                .map((section) => {
                  const isActive = pathname === `/${section.slug}`;
                  return (
                    <Link href={`/${section.slug}`} key={section.tag}>
                      <Button
                        className={cn(
                          "w-full justify-start cursor-pointer text-base gap-2",
                          isActive &&
                            "bg-blue-100 text-blue-700 hover:bg-blue-50"
                        )}
                        size={"lg"}
                        variant={isActive ? "secondary" : "ghost"}
                      >
                        <section.icon className="h-4 w-4" />
                        {section.tag}
                      </Button>
                    </Link>
                  );
                })}
            </div>
          </ScrollArea>

          <div className="mt-auto">
            <Separator className="my-2" />
            <Link
              href="https://github.com/nt3ai/nt3"
              passHref
              rel="noreferrer"
              target="_blank"
            >
              <Button
                className="w-full cursor-pointer bg-[#F5F5F3]/30 text-black border border-black rounded-full items-center justify-center gap-2 font-medium flex dark:text-white dark:border-white"
                variant="outline"
              >
                <span>Submit</span> <PlusIcon className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
