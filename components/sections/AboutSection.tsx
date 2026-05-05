import Link from "next/link";

import { Marquee } from "@/components/marquee";
import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function AboutSection() {
  const {
    about,
    hero,
    education,
    skills,
    researchPapers,
    honors,
    volunteerAndLeadership,
  } = site;

  return (
    <section
      id="about"
      className="relative scroll-mt-24 border-b border-border/70 pb-24 pt-16 sm:pb-32 sm:pt-20 md:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_55%_at_50%_-18%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent)]"
        aria-hidden
      />

      <Container size="wide">
        <header className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
            {hero.eyebrow}
          </p>
          <p className="text-sm font-medium text-foreground/80">{site.role}</p>
          <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tighter text-foreground sm:text-6xl sm:leading-[1.02] md:text-7xl">
            {hero.headline}
          </h1>
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            {about.summary}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
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
        </header>
      </Container>

      <Marquee className="mt-12 sm:mt-16" items={hero.marquee} />

      <Container size="wide" className="mt-12 sm:mt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_280px] lg:items-start lg:gap-16">
          <div className="space-y-10">
            <div id="education" className="scroll-mt-28 space-y-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Education
              </h2>
              <ul className="space-y-8">
                {education.map((entry) => (
                  <li key={entry.institution}>
                    <p className="font-semibold text-foreground">
                      {entry.institution}
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        · {entry.location}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {entry.degree}{" "}
                      <span className="text-muted-foreground/90">
                        ({entry.start} – {entry.end})
                      </span>
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      GPA: {entry.gpa}
                    </p>
                    {entry.notes ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        {entry.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div id="skills" className="scroll-mt-28 space-y-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Skills
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <SkillBlock label="Languages" items={skills.languages} />
                <SkillBlock
                  label="Frameworks & libraries"
                  items={skills.frameworksLibraries}
                />
                <SkillBlock
                  label="Tools & platforms"
                  items={skills.toolsPlatforms}
                />
                <SkillBlock label="Databases" items={skills.databases} />
              </div>
            </div>

            <div id="research" className="scroll-mt-28 space-y-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Research papers
              </h2>
              <ul className="space-y-8">
                {researchPapers.map((paper) => (
                  <li key={paper.title}>
                    <p className="font-semibold text-foreground">
                      {paper.title}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {paper.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Honors
              </h2>
              <ul className="list-disc space-y-1 pl-5 text-base text-foreground">
                {honors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Volunteer & leadership
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                {volunteerAndLeadership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
              Areas of expertise
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm font-semibold text-foreground">
              {about.areasOfExpertise.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border/80 bg-card px-5 py-4 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function SkillBlock({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
