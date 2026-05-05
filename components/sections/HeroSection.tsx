import Link from "next/link";

import { Marquee } from "@/components/marquee";
import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function HeroSection() {
  const { hero } = site;

  return (
    <section className="relative border-b border-border/70 pb-0 pt-16 sm:pt-20 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_55%_at_50%_-18%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent)]"
        aria-hidden
      />
      <Container size="wide">
        <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
          {hero.eyebrow}
        </p>
        <p className="mt-4 text-sm font-medium text-foreground/80">
          {site.role}
        </p>
        <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-tighter text-foreground sm:text-6xl sm:leading-[1.02] md:text-7xl">
          {hero.headline}
        </h1>
        <p className="mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl md:leading-relaxed">
          {hero.subhead}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold text-brand-foreground shadow-sm transition-[transform,opacity] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99] motion-reduce:active:scale-100"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-full border border-border/90 bg-card px-8 text-sm font-semibold text-card-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </Container>
      <Marquee className="mt-16 sm:mt-20" items={hero.marquee} />
    </section>
  );
}
