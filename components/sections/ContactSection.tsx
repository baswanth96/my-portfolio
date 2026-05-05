import Link from "next/link";

import { site } from "@/content/site";

import { Container } from "@/components/layout/Container";

export function ContactSection() {
  const { contact } = site;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/70 bg-muted/35 py-24 sm:py-32"
    >
      <Container size="wide">
        <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-muted-foreground">
          {contact.title}
        </p>
        <p className="mt-4 text-sm font-semibold tracking-tight text-brand">
          {contact.flair}
        </p>
        <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl md:text-6xl md:leading-[1.05]">
          {contact.headline}
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {contact.body}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{contact.location}</p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-brand px-10 text-base font-semibold text-brand-foreground shadow-sm transition-[transform,opacity] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99] motion-reduce:active:scale-100"
          >
            Email {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="inline-flex h-14 w-fit items-center justify-center rounded-full border border-border/90 bg-card px-10 text-base font-semibold text-card-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Call {contact.phone}
          </a>
          <div className="flex gap-6 text-sm font-semibold">
            {contact.social.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
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
