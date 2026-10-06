import { proof } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProofStrip() {
  return (
    <section aria-label="Credentials" className="border-y border-line bg-ink-soft">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4 md:px-10">
        {proof.map((p) => (
          <div key={p.label} className="text-center">
            <p className="font-display text-6xl text-white md:text-7xl">{p.value}</p>
            <p className="eyebrow mt-3 text-steel">{p.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
