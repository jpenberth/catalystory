import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const lanes = [
  {
    href: "/productions",
    eyebrow: "Productions",
    title: "Films, shorts & music videos",
    body: "Character-driven film from the first page to the final frame. Built by people who've run the set and written the script.",
    cta: "See productions",
    img: "/images/mill-handoff.jpg",
    alt: "Two silhouetted figures exchange a bag inside the ruins of an old steel mill at sunset.",
  },
  {
    href: "/story-consulting",
    eyebrow: "Story Consulting",
    title: "Script & story notes",
    body: "Notes from someone who's been to the desks you're aiming for. Plot, structure, series bibles and Zoom coaching for writers who want to finish.",
    cta: "Explore consulting",
    img: "/images/lit-window.jpg",
    alt: "A single lit window glows in an otherwise dark row of brick houses at night.",
  },
];

export default function Lanes() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-red-bright">What we do</p>
          <h2 className="font-display mt-4 max-w-3xl text-5xl leading-none text-white md:text-7xl">
            Two ways we put story to work
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {lanes.map((l, i) => (
            <Reveal key={l.href} delay={i * 0.1}>
              <Link href={l.href} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-panel md:aspect-[3/4]">
                <Image
                  src={l.img}
                  alt={l.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale-[40%] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 via-40% to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="eyebrow text-red-bright">{l.eyebrow}</p>
                  <h3 className="font-display mt-3 text-4xl leading-none text-white md:text-5xl">{l.title}</h3>
                  <p className="mt-4 max-w-md text-white-dim">{l.body}</p>
                  <p className="eyebrow mt-6 text-white transition-colors group-hover:text-red-bright">{l.cta} →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
