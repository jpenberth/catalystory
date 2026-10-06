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
- Wordmark in `src/components/Logo.tsx` (swap for the final logo)
- `public/og-image.jpg` and icons are currently Dallas & Allegra assets
- Imagery is from the Dallas & Allegra film until Catalystory footage exists
