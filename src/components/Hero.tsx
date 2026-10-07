"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Embers from "./Embers";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-ink px-6 pb-16 pt-28"
    >
      <Embers />

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[18%] -z-10 h-[60vmin] w-[110vmin] max-w-[140%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(232,116,26,0.28),transparent_65%)]"
        />
        <Image
          src="/logo.webp"
          alt="Catalystory"
          width={1880}
          height={580}
          priority
          sizes="(min-width: 1024px) 960px, 92vw"
          className="animate-fade-up w-full max-w-[960px] mix-blend-screen"
        />

        <h1 className="font-display animate-fade-up mt-4 text-4xl leading-[0.95] tracking-wide text-white [animation-delay:120ms] sm:text-5xl md:text-7xl">
          Every great story needs a spark.
        </h1>
        <p className="font-serif animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white-dim [animation-delay:200ms] md:text-xl">
          A Pittsburgh and Los Angeles production company and story consultancy. We make films about what breaks us
          and what remakes us, and help writers find the stories only they can tell.
        </p>
        <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4 [animation-delay:280ms]">
          <Link
            href="/productions"
            className="rounded-full bg-ember px-8 py-4 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember-bright"
          >
            Our productions
          </Link>
          <Link
            href="/story-consulting"
            className="rounded-full border border-white/35 px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:border-ember-bright hover:bg-white/5"
          >
            Story consulting
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
