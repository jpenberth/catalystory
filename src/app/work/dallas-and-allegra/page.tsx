import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { film, links, stills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dallas & Allegra: A Rust Belt Romeo and Juliet",
  description:
    "Dallas & Allegra is a short film set in a Pittsburgh steel town, written and directed by J. Penberth Rabold and produced by Shannon Geary through Catalystory.",
  alternates: { canonical: "/work/dallas-and-allegra" },
};

export default function DallasAndAllegra() {
  return (
    <>
      <PageHero eyebrow="Now in production · Short film" title={<>Dallas <span className="text-red-bright">&amp;</span> Allegra</>}>
        <p>{film.logline}</p>
      </PageHero>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-white-dim">
            <p className="eyebrow text-red-bright">The story</p>
            <p>
              In Bellvue Falls, everyone is addicted to something. Dallas Dixon, a fallen quarterback turned dealer, is two
              payments away from walking out of the only life this town ever offered him. Allegra Cunningham, heir to the
              Cunningham steel fortune, is less than a year from a plane to Oxford.
            </p>
            <p>
              Then she tracks him down at a local diner to return her addict mother&apos;s Oxy. One late night conversation
              later, two people who were never supposed to meet believe they can outrun everything.
            </p>
            <p className="font-serif text-2xl italic text-white">
              A Rust Belt Romeo and Juliet about the ones this town lets disappear, and a love that burns hotter than
              whatever is trying to put it out.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 rounded-2xl border border-line bg-panel p-8">
            <dl className="space-y-5 text-sm">
              {[
                ["Director / Writer", "J. Penberth Rabold"],
                ["Producer", "Shannon Geary"],
                ["Director of Photography", "Daniel J. Lennox"],
                ["Music Supervisor", "Jacob Luttrell"],
                ["Format", "Short film · Romance / Crime"],
                ["Location", "Pittsburgh, Pennsylvania"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow text-steel">{k}</dt>
                  <dd className="mt-1 text-base text-white">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={links.campaign}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-red px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-red-bright"
            >
              Support the film on Seed&amp;Spark ↗
            </a>
            <a href={links.filmSite} target="_blank" rel="noreferrer" className="eyebrow block text-center text-white-dim hover:text-white">
              Visit the film site ↗
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-soft px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3">
          {stills.map((s) => (
            <div key={s.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <CTA heading="Help bring it to life." body="Back the film, or tell us about the story you want to make next." href="/contact" label="Get in touch" />
    </>
  );
}
