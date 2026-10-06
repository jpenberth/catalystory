import { faqs } from "@/lib/content";
import Reveal from "./Reveal";

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function FAQ() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow text-red-bright">Questions</p>
          <h2 className="font-display mt-4 text-5xl text-white md:text-6xl">Good questions</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-6 text-2xl text-white md:text-3xl">
                {f.q}
                <span aria-hidden className="text-red-bright transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-white-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
