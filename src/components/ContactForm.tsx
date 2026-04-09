"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("form");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function validate(form: FormData) {
    const errs: Record<string, boolean> = {};
    if (!form.get("name")?.toString().trim()) errs.name = true;
    const phone = form.get("phone")?.toString().trim() || "";
    if (!phone || phone.length < 6) errs.phone = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!validate(form)) return;
    setStatus("loading");
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

  const fieldStyle = (name: string) => ({
    backgroundColor: "var(--bg-card)",
    borderColor: errors[name] ? "#EF4444" : "var(--border-card)",
    color: "var(--text-primary)",
    boxShadow: errors[name] ? "0 0 0 1px #EF4444" : "none",
  });

  return (
    <section id="form" className="py-20" style={{ background: "var(--bg-card)" }}>
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight animate-on-scroll"
            style={{ color: "var(--accent-start)" }}
          >
            {t("heading")}
          </h2>
        </div>

        {status === "success" ? (
          <div
            className="rounded-xl p-8 border text-center animate-on-scroll"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--accent-end)",
              boxShadow: "0 4px 16px var(--accent-glow)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4" style={{ color: "var(--accent-text)" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <p className="text-sm" style={{ color: "var(--accent-text)" }}>
              {t("success")}
            </p>
          </div>
        ) : (
          <div
            className="rounded-xl p-6 border animate-on-scroll"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border-card)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="floating-field">
                <input
                  name="name"
                  placeholder=" "
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none transition-all duration-200 focus:ring-1"
                  style={fieldStyle("name")}
                  onChange={() => errors.name && setErrors((e) => ({ ...e, name: false }))}
                />
                <label>{t("namePlaceholder")}</label>
                {errors.name && <p className="text-xs text-red-500 mt-1">{t("nameRequired")}</p>}
              </div>

              <div className="floating-field">
                <input
                  name="phone"
                  type="tel"
                  placeholder=" "
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none transition-all duration-200 focus:ring-1"
                  style={fieldStyle("phone")}
                  onChange={() => errors.phone && setErrors((e) => ({ ...e, phone: false }))}
                />
                <label>{t("phonePlaceholder")}</label>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{t("phoneRequired")}</p>}
              </div>

              <div className="floating-field">
                <textarea
                  name="description"
                  rows={3}
                  placeholder=" "
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none transition-all duration-200 focus:ring-1 resize-none"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-card)",
                    color: "var(--text-primary)",
                  }}
                />
                <label>{t("descriptionPlaceholder")}</label>
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{t("error")}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full text-white text-sm font-bold py-3.5 rounded-md tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                style={{
                  background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                  boxShadow: "0 4px 16px var(--accent-glow)",
                }}
              >
                {status === "loading" ? "..." : t("submit")}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
