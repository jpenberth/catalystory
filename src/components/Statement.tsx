import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="bg-ink px-6 py-28 md:px-10 md:py-40">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-balance-pretty text-3xl leading-snug text-white md:text-5xl">
          Every story is a catalyst, for the person who writes it and for the people who find it. We&apos;ve spent
          fifteen years learning what a story costs once it has to stand up on a set.{" "}
          <span className="text-red-bright">Now we put that to work on yours, and on ours.</span>
        </p>
      </Reveal>
    </section>
  );
}
