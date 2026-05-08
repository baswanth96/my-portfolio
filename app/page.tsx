import { InteractionEffects } from "@/components/interaction/InteractionEffects";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <InteractionEffects />
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1 outline-none"
        tabIndex={-1}
        aria-label="Portfolio content"
      >
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
