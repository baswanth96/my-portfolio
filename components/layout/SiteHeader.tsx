import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <Container
        size="wide"
        className="flex h-16 items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {site.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="scrollbar-none flex max-w-[58vw] items-center gap-3 overflow-x-auto pb-0.5 text-sm font-medium sm:max-w-none sm:gap-5 sm:overflow-visible sm:text-[15px]"
            aria-label="Primary"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 text-muted-foreground transition-colors hover:text-foreground",
                  "underline-offset-[6px] hover:underline",
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
