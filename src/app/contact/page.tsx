import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a production, request script notes or ask about story consulting. Contact Catalystory.",
  alternates: { canonical: "/contact" },
};

export default async function Contact({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  const defaultInterest = ["production", "consulting", "other"].includes(interest ?? "") ? interest : "production";

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Tell us what you&apos;re <span className="text-red-bright">working on.</span></>}>
        <p>
          Whether you want to make a film or make your script better, we&apos;ll reply within a few business days.
        </p>
      </PageHero>
      <section className="bg-ink px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.4fr_1fr]">
          <ContactForm defaultInterest={defaultInterest} />
          <aside className="space-y-8 text-white-dim">
            <div>
              <p className="eyebrow text-steel">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-lg text-white hover:text-red-bright">{site.email}</a>
            </div>
            <div>
              <p className="eyebrow text-steel">Based in</p>
              <p className="mt-2 text-lg text-white">Pittsburgh, PA &amp; Los Angeles, CA</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
