/** Canonical site origin (no trailing slash). Used for sitemap, OG, and JSON-LD. */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.replace(/\/$/, "");
}
