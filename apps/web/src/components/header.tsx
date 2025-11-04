"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  const links = [
    {
      href: "/tools",
      label: "Tools",
    },
    {
      href: "/about",
      label: "About",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b">
      <div className=" mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-medium tracking-tight">nt3</span>
          </Link>
          <nav className="flex items-center gap-6">
            {links.map((link) => {
              const linkSegment =
                link.href === "/" ? null : link.href.slice(1).split("/")[0];
              const isActive =
                link.href === "/" ? pathname === "/" : segment === linkSegment;

              return (
                <Link
                  className={`transition-colors font-medium ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
