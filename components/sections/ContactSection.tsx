import Link from "next/link";

import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function ContactSection() {
  const { contact } = site;

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {contact.title}
        </h2>
        <h3 className="mt-4 max-w-lg text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {contact.headline}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {contact.body}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{contact.location}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex h-10 w-fit items-center justify-center rounded-xl bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Email {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="inline-flex h-10 w-fit items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium text-card-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Call {contact.phone}
          </a>
          <div className="flex gap-4 text-sm">
            {contact.social.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
