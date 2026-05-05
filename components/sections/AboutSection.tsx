import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function AboutSection() {
  const {
    about,
    education,
    skills,
    researchPapers,
    honors,
    volunteerAndLeadership,
  } = site;

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
          <div className="space-y-10">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              <p>{about.summary}</p>
            </div>

            <div id="education" className="scroll-mt-28 space-y-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Education
              </h3>
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
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Skills
              </h3>
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
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Research papers
              </h3>
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
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Honors
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-base text-foreground">
                {honors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
                Volunteer & leadership
              </h3>
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
