# Catalystory

Website for Catalystory, a film production company and story consultancy (Pittsburgh / Los Angeles).

Next.js 16 (App Router), Tailwind 4, Framer Motion.

## Pages
`/` · `/productions` · `/story-consulting` · `/work/dallas-and-allegra` · `/about` · `/contact`

## Develop
```bash
npm install
npm run dev
```

## Contact form
The form on `/contact` posts to [Formspree](https://formspree.io), which emails inquiries to info@catalystory.com.
The endpoint is set in `src/components/ContactForm.tsx`. Spam protection: a hidden honeypot field (`_gotcha`) plus
Formspree's own filtering.

## Placeholders to replace
- Logo is `public/logo.webp` (rendered with screen blending on black); a transparent SVG/PNG version would be cleaner.
