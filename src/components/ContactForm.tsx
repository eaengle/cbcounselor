"use client";

import type { FormEvent } from "react";
import type { SiteContent } from "@/content/types";

type FormCopy = SiteContent["contactPage"]["form"];

export default function ContactForm({ copy, recipient }: { copy: FormCopy; recipient: string }) {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `${copy.firstName}: ${firstName}\n${copy.lastName}: ${lastName}\n${copy.email}: ${email}\n\n${copy.message}\n${message}`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`;
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-navy/35 focus:border-accent focus:ring-2 focus:ring-accent/15";

  return (
    <form onSubmit={prepareEmail} className="rounded-3xl bg-white p-6 shadow-[0_24px_70px_rgba(11,29,48,0.12)] sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          {copy.firstName}
          <input className={fieldClass} type="text" name="firstName" autoComplete="given-name" required />
        </label>
        <label className="text-sm font-semibold text-navy">
          {copy.lastName}
          <input className={fieldClass} type="text" name="lastName" autoComplete="family-name" required />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">
          {copy.email}
          <input className={fieldClass} type="email" name="email" autoComplete="email" inputMode="email" required />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">
          {copy.message}
          <textarea className={`${fieldClass} min-h-40 resize-y`} name="message" required />
        </label>
      </div>
      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto"
      >
        {copy.button}
        <span className="ml-2" aria-hidden="true">→</span>
      </button>
      <p className="mt-4 max-w-xl text-xs leading-5 text-navy/55">{copy.note}</p>
    </form>
  );
}
