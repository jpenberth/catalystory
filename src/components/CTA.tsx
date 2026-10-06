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
    <section className="bg-red px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-5xl leading-none text-white md:text-7xl">{heading}</h2>
        <p className="font-serif mx-auto mt-6 max-w-xl text-xl text-white/85">{body}</p>
        <Link
          href={href}
          className="mt-10 inline-block rounded-full bg-ink px-9 py-4 text-sm font-medium tracking-wide text-white transition-transform hover:scale-[1.03]"
        >
          {label}
        </Link>
      </Reveal>
    </section>
  );
}
