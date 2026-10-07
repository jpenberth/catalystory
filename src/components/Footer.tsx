import Link from "next/link";
import { links, nav, site } from "@/lib/content";
import { services } from "@/lib/services";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-10">
        <div>
          <Logo className="h-12" />
          <p className="font-serif mt-5 max-w-sm text-lg italic text-white-dim">{site.tagline}</p>
          <p className="mt-5 text-sm text-steel">Pittsburgh, Pennsylvania · Los Angeles, California</p>
        </div>
        <div>
          <p className="eyebrow text-steel">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-white-dim">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-steel">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-white-dim">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.group}/${s.slug}`} className="hover:text-white">{s.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-steel">Connect</p>
          <ul className="mt-5 space-y-3 text-sm text-white-dim">
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li><a href={links.writersTable} target="_blank" rel="noreferrer" className="hover:text-white">The Writer&apos;s Table</a></li>
            <li><a href={links.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
            <li><a href={links.youtube} target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a></li>
                      </ul>
        </div>
      </div>
      <div className="border-t border-line px-6 py-6 text-center text-xs text-steel md:px-10">
        © {new Date().getFullYear()} Catalystory. All rights reserved.
      </div>
    </footer>
  );
}
