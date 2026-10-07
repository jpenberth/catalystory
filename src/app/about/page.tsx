import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import ProofStrip from "@/components/ProofStrip";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About J. Penberth Rabold & Shannon Geary",
  description:
    "Catalystory is led by writer-director J. Penberth Rabold and producer Shannon Geary, a Pittsburgh and Los Angeles production company and story consultancy.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About J. Penberth Rabold & Shannon Geary | Catalystory", url: "/about", type: "website" },
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" crumbs={[{ name: "About", href: "/about" }]} title={<>Write truth. <span className="text-ember-bright">Inspire love.</span></>}>
        <p>
          A story can change the person who tells it and the person who finds it. Catalystory exists to make films
          that do that, and to help writers tell theirs.
        </p>
      </PageHero>
      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mx-auto max-w-3xl space-y-6 font-serif text-xl leading-relaxed text-white-dim md:text-2xl">
          <p>
            <span className="text-white">Storytelling is human connection.</span> Letting my imagination run wild has
            become one of the most fulfilling parts of my life. I&apos;m drawn to the human experience, in worlds far beyond
            our own, where characters are pushed into situations that make them discover their own strength.
          </p>
          <p>
            And I&apos;m drawn to the truth that we&apos;re all broken, and that being broken is what makes us{" "}
            <span className="text-ember-bright">beautiful</span>.
          </p>
          <p className="text-base text-steel">J. Penberth Rabold, Writer &amp; Director</p>
        </Reveal>
      </section>
      <ProofStrip />
      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <h2 className="font-display text-3xl text-white">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-white-dim">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <Team />
      <CTA heading="Let's make something." body="Tell us what you're working on." />
    </>
  );
}
