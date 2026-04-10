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
    <section id="form" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32" style={{ background: "rgba(255,255,255,0.05)" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full -ml-48 -mb-48" style={{ background: "rgba(255,255,255,0.05)" }} />

          <div className="relative z-10 max-w-lg mx-auto">
            <h2
              className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-8 text-center editorial-spacing"
              style={{ fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}
            >
              {t("heading")}
            </h2>

            {status === "success" ? (
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p className="text-white text-sm">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="floating-field">
                  <input
                    name="name"
                    placeholder=" "
                    className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-1"
                    style={{
                      ...fieldStyle("name"),
                      backgroundColor: "rgba(255,255,255,0.95)",
                      borderColor: errors.name ? "#EF4444" : "rgba(255,255,255,0.3)",
                      color: "#191C1D",
                    }}
                    onChange={() => errors.name && setErrors((e) => ({ ...e, name: false }))}
                  />
                  <label style={{ color: "#737784" }}>{t("namePlaceholder")}</label>
                  {errors.name && <p className="text-xs mt-1" style={{ color: "#FCA5A5" }}>{t("nameRequired")}</p>}
                </div>

                <div className="floating-field">
                  <input
                    name="phone"
                    type="tel"
                    placeholder=" "
                    className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-1"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      borderColor: errors.phone ? "#EF4444" : "rgba(255,255,255,0.3)",
                      color: "#191C1D",
                      boxShadow: errors.phone ? "0 0 0 1px #EF4444" : "none",
                    }}
                    onChange={() => errors.phone && setErrors((e) => ({ ...e, phone: false }))}
                  />
                  <label style={{ color: "#737784" }}>{t("phonePlaceholder")}</label>
                  {errors.phone && <p className="text-xs mt-1" style={{ color: "#FCA5A5" }}>{t("phoneRequired")}</p>}
                </div>

                <div className="floating-field">
                  <textarea
                    name="description"
                    rows={3}
                    placeholder=" "
                    className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-1 resize-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      borderColor: "rgba(255,255,255,0.3)",
                      color: "#191C1D",
                    }}
                  />
                  <label style={{ color: "#737784" }}>{t("descriptionPlaceholder")}</label>
                </div>

                {status === "error" && (
                  <p className="text-sm" style={{ color: "#FCA5A5" }}>{t("error")}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full text-sm font-bold py-4 rounded-2xl tracking-wide transition-all duration-300 hover:shadow-2xl active:scale-95 disabled:opacity-50"
                  style={{
                    backgroundColor: "white",
                    color: "var(--accent-start)",
                  }}
                >
                  {status === "loading" ? "..." : t("submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
