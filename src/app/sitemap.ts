import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const base = "https://catalystory.com";
const updated = new Date("2026-10-07");

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/story-consulting", priority: 0.9 },
  { path: "/productions", priority: 0.9 },
  ...services.map((s) => ({ path: `/${s.group}/${s.slug}`, priority: 0.8 })),
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority,
  }));
}
