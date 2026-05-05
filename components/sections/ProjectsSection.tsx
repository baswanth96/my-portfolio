import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-border/70 bg-background py-24 sm:py-32"
    >
      <ProjectsShowcase />
    </section>
  );
}
