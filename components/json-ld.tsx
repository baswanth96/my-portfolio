import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const url = getSiteUrl();
  const sameAs = site.contact.social.map((s) => s.href);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        name: site.name,
        jobTitle: site.role,
        email: site.contact.email,
        telephone: site.contact.phone,
        url,
        sameAs,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jersey City",
          addressRegion: "NJ",
          postalCode: "07306",
          addressCountry: "US",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Montclair State University",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Osmania University",
          },
        ],
        knowsAbout: [
          ...site.skills.languages,
          ...site.skills.frameworksLibraries,
          ...site.skills.databases,
          ...site.skills.toolsPlatforms,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.meta.title,
        description: site.meta.description,
        publisher: { "@id": `${url}/#person` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
