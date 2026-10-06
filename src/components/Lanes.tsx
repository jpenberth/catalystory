import Link from "next/link";
import Reveal from "./Reveal";

const lanes = [
  {
    href: "/productions",
    num: "01",
    eyebrow: "Productions",
    title: "Films, shorts & music videos",
    body: "Character-driven film from the first page to the final frame. Built by people who've run the set and written the script.",
    cta: "See productions",
  },
  {
    href: "/story-consulting",
    num: "02",
    eyebrow: "Story Consulting",
    title: "Script & story notes",
    body: "Notes from someone who's been to the desks you're aiming for. Plot, structure, series bibles and Zoom coaching for writers who want to finish.",
    cta: "Explore consulting",
  },
];

export default function Lanes() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-ember-bright">What we do</p>
          <h2 className="font-display mt-4 max-w-3xl text-5xl leading-none text-white md:text-7xl">
            Two ways we put story to work
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {lanes.map((l, i) => (
            <Reveal key={l.href} delay={i * 0.1}>
              <Link
                href={l.href}
                className="group relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-panel p-8 transition-colors hover:border-ember/60 md:min-h-[30rem] md:p-10"
              >
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(232,116,26,0.35),transparent_65%)] transition-transform duration-700 group-hover:scale-125"
                />
                <p className="font-display relative text-8xl leading-none text-white/10">{l.num}</p>
                <div className="relative">
                  <p className="eyebrow text-ember-bright">{l.eyebrow}</p>
                  <h3 className="font-display mt-3 text-4xl leading-none text-white md:text-5xl">{l.title}</h3>
                  <p className="mt-4 max-w-md text-white-dim">{l.body}</p>
                  <p className="eyebrow mt-6 text-white transition-colors group-hover:text-ember-bright">{l.cta} →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
