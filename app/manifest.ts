import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export default function manifest(): MetadataRoute.Manifest {
  const base = getSiteUrl();

  return {
    name: site.meta.title,
    short_name: site.name.split(" ")[0] ?? site.name,
    description: site.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: `${base}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
