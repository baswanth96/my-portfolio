import Link from "next/link";

import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function HeroSection() {
  const { hero } = site;

  return (
    <section className="relative border-b border-border/80 pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-muted/60 to-transparent"
        aria-hidden
      />
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {hero.eyebrow}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{site.role}</p>
        <h1 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-[1.1]">
          {hero.headline}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.subhead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium text-card-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
