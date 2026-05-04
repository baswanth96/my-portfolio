import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function AboutSection() {
  const { about } = site;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border/80 py-20 sm:py-24"
    >
      <Container>
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {about.title}
        </h2>
        <div className="mt-6 grid gap-10 sm:grid-cols-[1fr_220px] sm:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="flex flex-col gap-2 text-sm text-foreground">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-3 font-medium"
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
