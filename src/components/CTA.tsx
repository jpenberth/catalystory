import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA({
  heading,
  body,
  href = "/contact",
  label = "Start the conversation",
}: {
  heading: string;
  body: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink px-6 py-28 md:px-10 md:py-40">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-[60vmin] w-[110vmin] -translate-x-1/2 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(232,116,26,0.35),transparent_65%)]"
      />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-5xl leading-none text-white md:text-7xl">{heading}</h2>
        <p className="font-serif mx-auto mt-6 max-w-xl text-xl text-white-dim">{body}</p>
        <Link
          href={href}
          className="mt-10 inline-block rounded-full bg-ember px-9 py-4 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember-bright"
        >
          {label}
        </Link>
      </Reveal>
    </section>
  );
}
