import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="bg-ink px-6 py-28 md:px-10 md:py-40">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-balance-pretty text-3xl leading-snug text-white md:text-5xl">
          Storytelling is human connection. We&apos;re drawn to characters pushed to the edge, in worlds far beyond our
          own, who discover who they really are. Because what breaks us doesn&apos;t destroy us.{" "}
          <span className="text-ember-bright">It remakes us into something greater than we thought we were.</span>
        </p>
      </Reveal>
    </section>
  );
}
