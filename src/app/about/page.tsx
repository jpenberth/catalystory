import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import ProofStrip from "@/components/ProofStrip";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Catalystory",
  description:
    "Catalystory is led by writer-director J. Penberth Rabold and producer Shannon Geary, a Pittsburgh and Los Angeles production company and story consultancy.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title={<>Write truth. <span className="text-ember-bright">Inspire love.</span></>}>
        <p>
          Catalystory exists because a good story changes the person who tells it and the person who finds it. We
          produce films and help writers finish them.
        </p>
      </PageHero>
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
