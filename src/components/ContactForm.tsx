"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mbgddqrq";

const interests = [
  { value: "production", label: "A production / work for hire" },
  { value: "consulting", label: "Story consulting" },
  { value: "other", label: "Something else" },
];

export default function ContactForm({ defaultInterest = "production" }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    const interest = interests.find((i) => i.value === form.get("interest"))?.label ?? "Something else";
    form.set("_subject", `[Catalystory] ${interest}: ${form.get("name")}`);
    form.set("interest", interest);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message ?? "Something went wrong. Please email info@catalystory.com.");
      }
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please email info@catalystory.com.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-panel p-10 text-center">
        <h3 className="font-display text-4xl text-white">Message received</h3>
        <p className="font-serif mt-4 text-lg text-white-dim">
          Thank you. We&apos;ll be in touch within a few business days.
        </p>
      </div>
    );
  }

  const field =
    "mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3.5 text-white placeholder:text-steel focus:border-ember-bright focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-steel">I&apos;m here for</span>
        <select name="interest" defaultValue={defaultInterest} className={field}>
          {interests.map((i) => (
            <option key={i.value} value={i.value}>{i.label}</option>
          ))}
        </select>
      </label>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-steel">Name</span>
          <input name="name" required maxLength={120} autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="eyebrow text-steel">Email</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-steel">Tell us about your project</span>
        <textarea name="message" required rows={6} maxLength={5000} className={field} />
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-ember-bright">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-ember px-9 py-4 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember-bright disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
