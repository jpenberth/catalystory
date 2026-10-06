import type { MetadataRoute } from "next";

const base = "https://catalystory.com";
const pages: [string, number][] = [
  ["", 1],
  ["/productions", 0.9],
  ["/story-consulting", 0.9],
  ["/about", 0.6],
  ["/contact", 0.6],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, priority]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
