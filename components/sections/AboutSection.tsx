import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function AboutSection() {
  const { about } = site;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border/70 py-24 sm:py-32"
    >
      <Container size="wide">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
          {about.title}
        </h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_280px] lg:items-start lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="flex flex-col gap-3 text-sm font-semibold text-foreground">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border/80 bg-card px-5 py-4 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
