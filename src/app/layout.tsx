import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Newsreader, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { links, site } from "@/lib/content";

const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const title = "Catalystory: Pittsburgh Film Production & Story Consulting";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Catalystory" },
  description: site.description,
  applicationName: "Catalystory",
  keywords: [
    "Catalystory",
    "Pittsburgh film production company",
    "Los Angeles film production company",
    "story consulting",
    "script consultant",
    "script notes",
    "screenwriting coach",
    "music video director",
    "J. Penberth Rabold",
  ],
  authors: [{ name: "J. Penberth Rabold" }],
  alternates: { canonical: "/" },
  category: "film",
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Catalystory",
    title,
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Catalystory logo: silver lettering with a flame forming the S." }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og-image.jpg"] },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = { themeColor: "#000000" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: "Catalystory",
      url: site.url,
      email: site.email,
      contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: site.email, availableLanguage: "English" },
      description: site.description,
      slogan: site.tagline,
      logo: `${site.url}/icon-512.png`,
      image: `${site.url}/og-image.jpg`,
      areaServed: [
        { "@type": "City", name: "Pittsburgh" },
        { "@type": "City", name: "Los Angeles" },
        { "@type": "Country", name: "United States" },
      ],
      address: { "@type": "PostalAddress", addressLocality: "Pittsburgh", addressRegion: "PA", addressCountry: "US" },
      founder: { "@id": `${site.url}/#founder` },
      sameAs: [links.instagram, links.youtube, links.imdb, links.writersTable, links.director],
      knowsAbout: ["Film production", "Music videos", "Screenwriting", "Story consulting", "Script notes"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "Catalystory",
      description: site.description,
      inLanguage: "en-US",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#founder`,
      name: "J. Penberth Rabold",
      jobTitle: "Writer, Director and Story Consultant",
      url: links.director,
      sameAs: [links.imdb, links.writersTable],
      worksFor: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#producer`,
      name: "Shannon Geary",
      jobTitle: "Producer",
      worksFor: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${newsreader.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="grain-overlay" aria-hidden="true" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
