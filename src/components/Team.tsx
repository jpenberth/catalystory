import { team } from "@/lib/content";
import Reveal from "./Reveal";

export default function Team({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow text-ember-bright">The Team</p>
          <h2 className="font-display mt-4 text-5xl text-white md:text-7xl">The people behind it</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08} className="bg-panel p-8 md:p-10">
              <p className="eyebrow text-steel">{m.role}</p>
              <h3 className="font-display mt-3 text-4xl text-white md:text-5xl">{m.name}</h3>
              <div className="mt-5 space-y-4 leading-relaxed text-white-dim">
                {(compact ? m.bio.slice(0, 1) : m.bio).map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              {!compact && m.links && (
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {m.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noreferrer" className="text-ember-bright hover:text-white">
                        {l.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
