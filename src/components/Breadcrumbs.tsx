import Link from "next/link";
import { site } from "@/lib/content";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="eyebrow mb-6 flex flex-wrap gap-x-2 text-steel">
        {all.map((c, i) => (
          <span key={c.href} className="flex gap-x-2">
            {i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-white">{c.name}</Link>
            ) : (
              <span aria-current="page" className="text-white-dim">{c.name}</span>
            )}
            {i < all.length - 1 && <span aria-hidden="true">/</span>}
          </span>
        ))}
      </nav>
    </>
  );
}
