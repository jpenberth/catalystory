import Link from "next/link";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import FAQ, { faqJsonLd } from "./FAQ";
import CTA from "./CTA";
import ServiceGrid from "./ServiceGrid";
import { site } from "@/lib/content";
import { servicesByGroup, type ServiceDef } from "@/lib/services";

const groupMeta = {
  "story-consulting": { name: "Story Consulting", href: "/story-consulting", interest: "consulting" },
  productions: { name: "Productions", href: "/productions", interest: "production" },
} as const;

export default function ServicePage({ service }: { service: ServiceDef }) {
  const group = groupMeta[service.group];
  const path = `${group.href}/${service.slug}`;
  const related = servicesByGroup(service.group).filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: service.group === "story-consulting" ? "Worldwide (remote)" : ["Pittsburgh", "Los Angeles"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd(service.faqs)]) }}
      />
      <PageHero
        eyebrow={service.eyebrow}
        crumbs={[{ name: group.name, href: group.href }, { name: service.navLabel, href: path }]}
        title={
          <>
            {service.h1[0]} <span className="text-ember-bright">{service.h1[1]}</span>
          </>
        }
      >
        <p>{service.intro}</p>
      </PageHero>

      {service.sections.map((sec, i) => (
        <section key={sec.heading} className={`px-6 py-20 md:px-10 md:py-28 ${i % 2 ? "bg-ink-soft" : "bg-ink"}`}>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-display text-4xl text-white md:text-6xl">{sec.heading}</h2>
              {sec.body?.map((p) => (
                <p key={p.slice(0, 30)} className="mt-6 text-lg leading-relaxed text-white-dim">{p}</p>
              ))}
              {sec.list && (
                <dl className="mt-8 grid gap-6 md:grid-cols-2">
                  {sec.list.map((item) => (
                    <div key={item.label} className="rounded-xl border border-line bg-panel p-6">
                      <dt className="font-display text-2xl text-white">{item.label}</dt>
                      <dd className="mt-2 leading-relaxed text-white-dim">{item.text}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      <FAQ items={service.faqs} />

      {related.length > 0 && (
        <section className="bg-ink-soft px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow text-ember-bright">More in {group.name}</p>
            </Reveal>
            <div className="mt-8">
              <ServiceGrid
                items={related.map((r) => ({
                  title: r.navLabel,
                  body: r.metaDescription,
                  href: `${group.href}/${r.slug}`,
                }))}
              />
            </div>
            <p className="mt-8 text-sm text-steel">
              <Link href={group.href} className="hover:text-white">← All {group.name.toLowerCase()}</Link>
            </p>
          </div>
        </section>
      )}

      <CTA
        heading={service.ctaHeading}
        body={service.ctaBody}
        href={`/contact?interest=${group.interest}`}
        label={service.ctaLabel}
      />
    </>
  );
}
