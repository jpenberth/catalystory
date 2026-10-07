import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getService, servicesByGroup } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesByGroup("story-consulting").map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const s = getService("story-consulting", service);
  if (!s) return {};
  const path = `/story-consulting/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: `${s.metaTitle} | Catalystory`, description: s.metaDescription, url: path, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const s = getService("story-consulting", service);
  if (!s) notFound();
  return <ServicePage service={s} />;
}
