import Link from "next/link";
import Reveal from "./Reveal";

export default function ServiceGrid({ items }: { items: { title: string; body: string; href?: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
      {items.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.06} className="bg-panel p-8 md:p-10">
          <h3 className="font-display text-3xl text-white md:text-4xl">{s.title}</h3>
          <p className="mt-4 leading-relaxed text-white-dim">{s.body}</p>
          {s.href && (
            <Link href={s.href} className="eyebrow mt-6 inline-block text-ember-bright hover:text-white">
              Learn more →
            </Link>
          )}
        </Reveal>
      ))}
    </div>
  );
}
