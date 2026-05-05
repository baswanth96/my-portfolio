import { site } from "@/content/site";

import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 py-12 text-sm text-muted-foreground">
      <Container
        size="wide"
        className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          © {year} {site.name}. {site.footer.note}
        </p>
      </Container>
    </footer>
  );
}
