import { ImageResponse } from "next/og";

import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 72,
        background:
          "linear-gradient(135deg, #09090b 0%, #18181b 45%, #09090b 100%)",
        color: "#fafafa",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <div
        style={{
          fontSize: 14,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#a1a1aa",
          fontWeight: 600,
        }}
      >
        Portfolio
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 64,
          fontWeight: 650,
          letterSpacing: "-0.045em",
          lineHeight: 1.05,
          maxWidth: 980,
        }}
      >
        {site.name}
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 28,
          color: "#d4d4d8",
          fontWeight: 500,
        }}
      >
        {site.role}
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 22,
          lineHeight: 1.45,
          maxWidth: 980,
          color: "#a1a1aa",
        }}
      >
        {site.hero.headline}
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 18,
          color: "#71717a",
        }}
      >
        <span style={{ color: "#fafafa", fontWeight: 600 }}>
          {new URL(getSiteUrl()).host}
        </span>
        <span>·</span>
        <span>{site.hero.eyebrow}</span>
      </div>
    </div>,
    { ...size },
  );
}
