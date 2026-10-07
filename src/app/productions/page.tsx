import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { links, principles, productionServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Film Production Company, Pittsburgh & LA",
  description:
    "Catalystory produces and directs character-driven films, shorts and music videos, and takes on commissioned work for hire from Pittsburgh and Los Angeles.",
  alternates: { canonical: "/productions" },
  openGraph: { title: "Film Production Company, Pittsburgh & LA | Catalystory", url: "/productions", type: "website" },
};

export default function Productions() {
  return (
    <>
      <PageHero eyebrow="Productions" crumbs={[{ name: "Productions", href: "/productions" }]} title={<>Films about <span className="text-ember-bright">the human experience.</span></>}>
        <p>
          Catalystory produces and directs shorts, features and music videos from Pittsburgh and Los Angeles, and takes
          on commissioned work as your director and producers.
        </p>
      </PageHero>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-ember-bright">What we make</p>
            <h2 className="font-display mt-4 text-5xl text-white md:text-7xl">Services</h2>
          </Reveal>
          <div className="mt-12">
            <ServiceGrid items={productionServices} />
          </div>
        </div>
      </section>

      <section className="bg-ink-soft px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-ember-bright">How we work</p>
            <h2 className="font-display mt-4 text-5xl text-white md:text-7xl">What we believe</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <h3 className="font-display text-3xl text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white-dim">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 md:px-10">
        <Reveal className="mx-auto max-w-4xl border-y border-line py-10 text-center">
          <p className="eyebrow text-ember-bright">Currently in production</p>
          <p className="font-serif mt-4 text-2xl text-white md:text-3xl">
            <em>Dallas &amp; Allegra</em>, a Rust Belt Romeo and Juliet, written and directed by J. Penberth Rabold and
            produced by Shannon Geary.
          </p>
          <a href={links.filmSite} target="_blank" rel="noreferrer" className="eyebrow mt-6 inline-block text-white-dim hover:text-ember-bright">
            Visit the film&apos;s site ↗
          </a>
        </Reveal>
      </section>

      <CTA heading="Have something you want to make?" body="Tell us about the story, the format and the timeline." />
    </>
  );
}
