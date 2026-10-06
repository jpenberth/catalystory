import Image from "next/image";
import Link from "next/link";
import { film, links } from "@/lib/content";
import Reveal from "./Reveal";

export default function FeaturedFilm() {
  return (
    <section className="relative overflow-hidden bg-ink-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-red-bright">Now in production</p>
          <h2 className="font-display mt-4 text-6xl leading-none text-white md:text-8xl">
            Dallas <span className="text-red-bright">&amp;</span> Allegra
          </h2>
          <p className="font-serif mt-3 text-2xl italic text-white-dim">{film.tagline}</p>
          <p className="mt-8 max-w-lg leading-relaxed text-white-dim">{film.logline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/work/dallas-and-allegra" className="rounded-full bg-red px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] hover:bg-red-bright">
              About the film
            </Link>
            <a href={links.campaign} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10">
              Support the film ↗
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/poster-vertical.webp"
            alt="Dallas & Allegra key art: the couple stands silhouetted before a full moon over the Pittsburgh skyline."
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </Reveal>
      </div>
    </section>
  );
}
