"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("form");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        phone: form.get("phone"),
        description: form.get("description"),
        locale,
      }),
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <section id="form" className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extralight tracking-tight mb-12"
          style={{ color: "var(--text-primary)" }}
        >
          {t("heading")}
        </h2>

        {status === "success" ? (
          <p className="text-sm" style={{ color: "var(--accent-text)" }}>
            {t("success")}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              required
              placeholder={t("namePlaceholder")}
              className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:ring-1"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-primary)",
              }}
            />

            <input
              name="phone"
              type="tel"
              required
              placeholder={t("phonePlaceholder")}
              className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:ring-1"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-primary)",
              }}
            />

            <textarea
              name="description"
              rows={4}
              placeholder={t("descriptionPlaceholder")}
              className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:ring-1 resize-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-primary)",
              }}
            />

            {status === "error" && (
              <p className="text-sm text-red-500">{t("error")}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full text-white text-sm font-semibold py-3.5 rounded-lg tracking-wide transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{
                backgroundImage: "linear-gradient(135deg, #0A2463, #3E92CC)",
              }}
            >
              {status === "loading" ? "..." : t("submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
