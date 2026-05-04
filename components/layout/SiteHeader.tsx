import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {site.name}
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav
            className="flex items-center gap-4 text-sm sm:gap-5"
            aria-label="Primary"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "underline-offset-4 hover:underline",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
