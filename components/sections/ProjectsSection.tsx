import Link from "next/link";

import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function ProjectsSection() {
  const { projects } = site;

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-border/80 py-20 sm:py-24"
    >
      <Container>
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {projects.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          {projects.intro}
        </p>
        <ul className="mt-10 flex flex-col gap-4">
          {projects.items.map((project) => {
            const isExternalHttp = /^https?:\/\//.test(project.href);

            return (
              <li key={project.title}>
                <Link
                  href={project.href}
                  {...(isExternalHttp
                    ? { target: "_blank" as const, rel: "noopener noreferrer" }
                    : {})}
                  className="group block rounded-2xl border border-border bg-card p-5 shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted/40 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-card-foreground group-hover:text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-muted-foreground group-hover:text-foreground">
                      View
                    </span>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border/80 bg-background px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
