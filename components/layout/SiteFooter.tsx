import { site } from "@/content/site";

import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. {site.footer.note}
        </p>
      </Container>
    </footer>
  );
}
