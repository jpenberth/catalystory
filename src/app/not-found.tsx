import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title={<>This page <span className="text-ember-bright">isn&apos;t here.</span></>}>
        <p>The story may have moved. Try one of these instead.</p>
      </PageHero>
      <section className="bg-ink px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4">
          {[
            ["/", "Home"],
            ["/productions", "Productions"],
            ["/story-consulting", "Story Consulting"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="rounded-full border border-white/30 px-7 py-3.5 text-sm text-white hover:border-ember-bright">
              {label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
