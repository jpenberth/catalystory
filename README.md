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
`POST /api/contact` emails inquiries to info@catalystory.com and sends the sender a confirmation via
[Resend](https://resend.com). Set `RESEND_API_KEY` (see `.env.example`) and verify the catalystory.com domain
in Resend. Spam protection: hidden honeypot field, minimum-time check and a per-IP rate limit.

## Placeholders to replace
- Logo is `public/logo.webp` (rendered with screen blending on black); a transparent SVG/PNG version would be cleaner.
