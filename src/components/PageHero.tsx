import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative border-b border-line bg-ink px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
      <div className="mx-auto max-w-5xl">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <p className="eyebrow animate-fade-up text-ember-bright">{eyebrow}</p>
        <h1 className="font-display animate-fade-up mt-6 text-6xl leading-[0.92] text-white [animation-delay:80ms] md:text-8xl">
          {title}
        </h1>
        {children && (
          <div className="font-serif animate-fade-up mt-8 max-w-2xl text-xl leading-relaxed text-white-dim [animation-delay:140ms] md:text-2xl">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
