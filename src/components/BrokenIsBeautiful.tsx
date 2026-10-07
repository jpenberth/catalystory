import Reveal from "./Reveal";

export default function BrokenIsBeautiful() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-soft px-6 py-28 md:px-10 md:py-40">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[50vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(232,116,26,0.14),transparent_65%)]"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-6xl leading-none text-white md:text-8xl">Broken is beautiful.</h2>
        <p className="font-serif mt-8 text-xl leading-relaxed text-white-dim md:text-2xl">
          Every one of us has been broken, and that&apos;s the one thread we all share.
        </p>
        <p className="font-serif mt-3 text-2xl italic leading-relaxed text-ember-bright md:text-3xl">
          What if broken is where the story begins?
        </p>
      </Reveal>
    </section>
  );
}
