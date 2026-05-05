"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";
import type { ProjectCategory } from "@/content/site";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type FilterKey = "all" | ProjectCategory;

export function ProjectsShowcase() {
  const { projects } = site;
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects.items;
    return projects.items.filter((p) => p.category === filter);
  }, [filter, projects.items]);

  const filters: { id: FilterKey; label: string }[] = [
    { id: "all", label: projects.filterLabels.all },
    { id: "experience", label: projects.filterLabels.experience },
    { id: "academic", label: projects.filterLabels.academic },
  ];

  return (
    <>
      <Container size="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
              {projects.title}
            </h2>
            <p className="mt-4 text-pretty text-lg font-semibold tracking-tight text-foreground md:text-xl md:leading-snug">
              {projects.intro}
            </p>
          </div>
        </div>

        <div className="scrollbar-none mt-10 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-x-visible">
          {filters.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold tracking-tight transition-colors",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border/80 bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </Container>

      <Container size="wide" className="mt-10">
        <ul className="grid gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {filtered.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof site.projects.items)[number];
}) {
  const isExternalHttp = /^https?:\/\//.test(project.href);
  const initial = project.title.replace(/[^A-Za-z0-9]/g, "").charAt(0) || "·";

  return (
    <Link
      href={project.href}
      {...(isExternalHttp
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card text-left shadow-sm",
        "transition-[transform,box-shadow] duration-300",
        "hover:-translate-y-1 hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transform-none motion-reduce:transition-none",
      )}
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-gradient-to-br from-muted/90 via-card to-brand/20">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--foreground), transparent 55%), radial-gradient(circle at 80% 60%, var(--brand), transparent 45%)",
          }}
          aria-hidden
        />
        <span className="absolute inset-0 flex items-center justify-center text-7xl font-black tracking-tighter text-foreground/[0.07]">
          {initial}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-balance text-base font-semibold tracking-tight text-card-foreground group-hover:text-foreground md:text-lg">
            {project.title}
          </h3>
          <span
            className="mt-1 shrink-0 text-lg text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden
          >
            →
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border/70 bg-background/80 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
