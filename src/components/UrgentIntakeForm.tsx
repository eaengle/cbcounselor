"use client";

import type { FormEvent } from "react";
import type { EcommercePageContent } from "@/content/ecommerce";

export default function UrgentIntakeForm({
  copy,
  recipient,
}: {
  copy: EcommercePageContent["intake"];
  recipient: string;
}) {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `${copy.name}: ${String(data.get("name") ?? "").trim()}`,
      `${copy.email}: ${String(data.get("email") ?? "").trim()}`,
      `${copy.platform}: ${String(data.get("platform") ?? "").trim()}`,
      `${copy.deadline}: ${String(data.get("deadline") ?? "").trim()}`,
      "",
      copy.matter,
      String(data.get("matter") ?? "").trim(),
    ];

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-navy/35 focus:border-accent focus:ring-2 focus:ring-accent/15";

  return (
    <form
      onSubmit={prepareEmail}
      className="rounded-3xl bg-white p-6 text-left shadow-[0_24px_70px_rgba(11,29,48,0.16)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          {copy.name}
          <input className={fieldClass} type="text" name="name" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold text-navy">
          {copy.email}
          <input className={fieldClass} type="email" name="email" autoComplete="email" inputMode="email" required />
        </label>
        <label className="text-sm font-semibold text-navy">
          {copy.platform}
          <input className={fieldClass} type="text" name="platform" required />
        </label>
        <label className="text-sm font-semibold text-navy">
          {copy.deadline}
          <input className={fieldClass} type="text" name="deadline" required />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">
          {copy.matter}
          <textarea className={`${fieldClass} min-h-32 resize-y`} name="matter" required />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto"
      >
        {copy.button}
        <span className="ml-2" aria-hidden="true">→</span>
      </button>
      <p className="mt-4 max-w-2xl text-xs leading-5 text-navy/55">{copy.note}</p>
    </form>
  );
}
