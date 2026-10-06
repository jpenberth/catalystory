"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[700px] w-full items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/images/wildcats-bleachers.jpg"
          alt="Empty football bleachers overlook a fog-covered Rust Belt steel town at dusk, a still from the Catalystory film Dallas & Allegra."
          fill
          priority
          className="object-cover object-[35%_center] grayscale-[25%] brightness-110 contrast-110"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 via-45% to-transparent" />

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <p className="eyebrow animate-fade-up text-red-bright">Production company · Story consultancy</p>
        <h1 className="font-display animate-fade-up mt-6 max-w-5xl text-[3.6rem] leading-[0.9] text-white [animation-delay:80ms] sm:text-7xl md:text-[8rem]">
          Stories worth the cost of making them.
        </h1>
        <p className="font-serif animate-fade-up mt-8 max-w-2xl text-lg leading-relaxed text-white/80 [animation-delay:140ms] md:text-2xl">
          Catalystory is a Pittsburgh and Los Angeles production company and story consultancy. We make films
          about people finding their way to each other, and we help writers finish the ones they&apos;ve started.
        </p>
        <div className="animate-fade-up mt-10 flex flex-wrap gap-4 [animation-delay:200ms]">
          <Link
            href="/productions"
            className="rounded-full bg-red px-8 py-4 text-sm font-medium tracking-wide text-white transition-transform hover:scale-[1.03] hover:bg-red-bright"
          >
            Our productions
          </Link>
          <Link
            href="/story-consulting"
            className="rounded-full border border-white/35 px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Story consulting
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
