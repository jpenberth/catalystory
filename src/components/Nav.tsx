"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
      >
        <Link href="/" aria-label="Catalystory home" onClick={() => setOpen(false)}>
          <Logo priority className="h-9 md:h-11" />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="eyebrow text-white-dim transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="eyebrow rounded-full bg-ember px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-ember-bright"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="eyebrow rounded-full border border-white/25 px-4 py-2 text-white md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-6 pb-8 pt-4 md:hidden">
          {[...nav, { href: "/contact", label: "Contact" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display block py-3 text-3xl text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
