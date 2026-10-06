import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INBOX = "info@catalystory.com";
const FROM = "Catalystory <info@catalystory.com>";
const LABELS: Record<string, string> = {
  production: "A production / work for hire",
  consulting: "Story consulting",
  other: "Something else",
};

// Best-effort per-instance rate limit: 5 submissions / 10 min / IP.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function send(payload: Record<string, unknown>, key: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam: honeypot filled, or submitted faster than a human could.
  if (body.website || (typeof body.elapsed === "number" && body.elapsed < 2500)) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const interest = LABELS[String(body.interest)] ?? LABELS.other;

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn(`[contact] RESEND_API_KEY not set. Dropped message from ${email}.`);
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Messaging is temporarily unavailable. Please email info@catalystory.com." },
        { status: 503 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  try {
    await send(
      {
        from: FROM,
        to: [INBOX],
        reply_to: email,
        subject: `[Catalystory] ${interest}: ${name}`,
        html: `<p><strong>${esc(name)}</strong> (${esc(email)})</p><p><em>${esc(interest)}</em></p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      },
      key,
    );
    // Confirmation is best-effort; the inquiry itself has already been delivered.
    await send(
      {
        from: FROM,
        to: [email],
        reply_to: INBOX,
        subject: "We got your message | Catalystory",
        html: `<p>Hi ${esc(name)},</p><p>Thanks for reaching out to Catalystory. We've received your message and will reply within a few business days.</p><p>Write truth. Inspire love.<br>Catalystory</p>`,
      },
      key,
    ).catch((err) => console.error("[contact] confirmation failed", err));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] failed", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email info@catalystory.com." },
      { status: 500 },
    );
  }
}
