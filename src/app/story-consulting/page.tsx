import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import Reveal from "@/components/Reveal";
import FAQ, { faqJsonLd } from "@/components/FAQ";
import CTA from "@/components/CTA";
import { consultingProcess, consultingServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Story Consulting & Script Notes for Screenwriters",
  description:
    "Script notes, story and outline sessions, series bible review and Zoom coaching from a working writer-director whose scripts have reached Netflix, Apple, Starz and HBO.",
  alternates: { canonical: "/story-consulting" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Consulting & Script Notes",
  serviceType: "Screenwriting consulting",
  provider: { "@type": "Organization", name: "Catalystory", url: "https://catalystory.com" },
  areaServed: "Worldwide (remote)",
  description:
    "Developmental script notes, story and outline sessions, series bible review and ongoing Zoom coaching for screenwriters.",
};

export default function StoryConsulting() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd()]) }} />
      <PageHero eyebrow="Story Consulting" title={<>Finish the story <span className="text-ember-bright">you started.</span></>}>
        <p>
          Script notes and story consulting from a writer-director who has been to the desks you&apos;re aiming for,
          and who knows exactly what &ldquo;almost&rdquo; feels like.
        </p>
      </PageHero>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="font-serif text-balance-pretty text-3xl leading-snug text-white md:text-4xl">
              Since 2015, J. Penberth Rabold&apos;s series bibles, pilots and features have landed on desks at Netflix, Apple,
              Starz and HBO. He&apos;s come close, a lot, and learned what separates a script that almost works from one that
              does. <span className="text-ember-bright">That&apos;s what he brings to your pages.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-soft px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-ember-bright">How we can help</p>
            <h2 className="font-display mt-4 text-5xl text-white md:text-7xl">Ways to work together</h2>
          </Reveal>
          <div className="mt-12">
            <ServiceGrid items={consultingServices} />
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-ember-bright">The process</p>
            <h2 className="font-display mt-4 text-5xl text-white md:text-7xl">Simple to start</h2>
          </Reveal>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {consultingProcess.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <li className="list-none">
                  <p className="font-display text-6xl text-ember-bright">{s.step}</p>
                  <h3 className="font-display mt-2 text-3xl text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white-dim">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FAQ />
      <CTA
        heading="Tell us about your story."
        body="A logline, a draft, or just an idea is enough to start."
        href="/contact?interest=consulting"
        label="Request script notes"
      />
    </>
  );
}
