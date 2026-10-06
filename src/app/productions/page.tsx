import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { principles, productionServices, stills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Film Production Company in Pittsburgh & Los Angeles",
  description:
    "Catalystory produces and directs character-driven films, shorts and music videos, and takes on commissioned work for hire from Pittsburgh and Los Angeles.",
  alternates: { canonical: "/productions" },
};

export default function Productions() {
  return (
    <>
      <PageHero eyebrow="Productions" title={<>Character-driven film, <span className="text-red-bright">made to be made.</span></>}>
        <p>
          Catalystory is a Pittsburgh and Los Angeles film production company. We write, direct and produce
          shorts, features and music videos, and take on commissioned work as your director and producers.
        </p>
      </PageHero>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-red-bright">What we make</p>
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
            <p className="eyebrow text-red-bright">How we work</p>
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

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow text-red-bright">Featured</p>
            <h2 className="font-display mt-4 text-5xl text-white md:text-7xl">Dallas &amp; Allegra</h2>
            <p className="font-serif mt-4 max-w-xl text-xl text-white-dim">
              A Rust Belt Romeo and Juliet, and the first film we&apos;re making by asking the people who believe in it
              to help get it made.
            </p>
            <Link href="/work/dallas-and-allegra" className="eyebrow mt-6 inline-block text-white hover:text-red-bright">
              See the film →
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {stills.slice(0, 6).map((s) => (
              <div key={s.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover grayscale-[30%]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA heading="Have something to make?" body="Tell us about the project: the story, the format, the timeline." />
    </>
  );
}
