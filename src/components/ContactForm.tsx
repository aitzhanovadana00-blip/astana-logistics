"use client";

import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const t = useTranslations("form");
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";
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
        cargoType: form.get("cargoType"),
        volume: form.get("volume"),
        addressFrom: form.get("addressFrom"),
        addressTo: form.get("addressTo"),
        datetime: form.get("datetime"),
        description: form.get("description"),
        outsourcing: form.get("outsourcing") === "on",
        locale,
      }),
    });
    setStatus(res.ok ? "success" : "error");
  }

  const panel = isDark
    ? {
        background: "linear-gradient(135deg, #07101F 0%, #0F1E36 60%, #0B1A33 100%)",
        borderColor: "rgba(79,163,255,0.18)",
        boxShadow: "0 24px 80px -20px rgba(0,20,60,0.55)",
      }
    : {
        background: "linear-gradient(135deg, #F7F9FC 0%, #EBF2FB 55%, #F3F6FB 100%)",
        borderColor: "rgba(0,71,171,0.14)",
        boxShadow: "0 24px 80px -20px rgba(0,71,171,0.15)",
      };

  const headingColor = isDark ? "#f1f1f1" : "#1f1f1f";
  const labelColor = isDark ? "rgba(241,241,241,0.55)" : "rgba(31,31,31,0.5)";
  const inputBase = isDark
    ? {
        backgroundColor: "rgba(255,255,255,0.04)",
        color: "#f1f1f1",
      }
    : {
        backgroundColor: "rgba(255,255,255,0.85)",
        color: "#1f1f1f",
      };
  const inputBorder = isDark ? "rgba(79,163,255,0.25)" : "rgba(0,71,171,0.2)";
  const glowAlpha = isDark ? 0.18 : 0.12;
  const glowInner = isDark ? "rgba(79,163,255," : "rgba(0,71,171,";

  return (
    <section id="form" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="rounded-[3rem] p-12 md:p-24 relative overflow-hidden border"
          style={panel}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32"
            style={{
              background: `radial-gradient(circle, ${glowInner}${glowAlpha}), transparent 70%)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full -ml-48 -mb-48"
            style={{
              background: `radial-gradient(circle, ${glowInner}${glowAlpha * 0.7}), transparent 70%)`,
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className="font-headline text-3xl md:text-5xl font-extrabold mb-8 text-center editorial-spacing"
              style={{
                color: headingColor,
                fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              {t("heading")}
            </h2>

            {status === "success" ? (
              <div
                className="rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: isDark ? "rgba(79,163,255,0.08)" : "rgba(0,71,171,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={headingColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p className="text-sm" style={{ color: headingColor }}>{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                {/* Группа: Контакт */}
                <fieldset className="flex flex-col gap-4">
                  <legend
                    className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2"
                    style={{ color: labelColor }}
                  >
                    {t("groupContact")}
                  </legend>

                  <div className="floating-field">
                    <input
                      name="name"
                      placeholder=" "
                      className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                      style={{
                        ...inputBase,
                        borderColor: errors.name ? "#EF4444" : inputBorder,
                        boxShadow: errors.name ? "0 0 0 1px #EF4444" : "none",
                      }}
                      onChange={() => errors.name && setErrors((e) => ({ ...e, name: false }))}
                    />
                    <label style={{ color: labelColor }}>{t("namePlaceholder")}</label>
                    {errors.name && <p className="text-xs mt-1" style={{ color: "#FCA5A5" }}>{t("nameRequired")}</p>}
                  </div>

                  <div className="floating-field">
                    <input
                      name="phone"
                      type="tel"
                      placeholder=" "
                      className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                      style={{
                        ...inputBase,
                        borderColor: errors.phone ? "#EF4444" : inputBorder,
                        boxShadow: errors.phone ? "0 0 0 1px #EF4444" : "none",
                      }}
                      onChange={() => errors.phone && setErrors((e) => ({ ...e, phone: false }))}
                    />
                    <label style={{ color: labelColor }}>{t("phonePlaceholder")}</label>
                    {errors.phone && <p className="text-xs mt-1" style={{ color: "#FCA5A5" }}>{t("phoneRequired")}</p>}
                  </div>
                </fieldset>

                {/* Группа: Груз */}
                <fieldset className="flex flex-col gap-4">
                  <legend
                    className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2"
                    style={{ color: labelColor }}
                  >
                    {t("groupCargo")}
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium px-1" style={{ color: labelColor }}>
                        {t("cargoType")}
                      </label>
                      <select
                        name="cargoType"
                        defaultValue=""
                        className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 appearance-none"
                        style={{
                          ...inputBase,
                          borderColor: inputBorder,
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(
                            isDark ? "#f1f1f1" : "#1f1f1f"
                          )}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          paddingRight: "2.5rem",
                        }}
                      >
                        <option value="" disabled>
                          {t("cargoTypePlaceholder")}
                        </option>
                        <option value="furniture">{t("cargoTypeFurniture")}</option>
                        <option value="appliances">{t("cargoTypeAppliances")}</option>
                        <option value="pallets">{t("cargoTypePallets")}</option>
                        <option value="warehouse">{t("cargoTypeWarehouse")}</option>
                        <option value="other">{t("cargoTypeOther")}</option>
                      </select>
                    </div>

                    <div className="floating-field">
                      <input
                        name="volume"
                        placeholder=" "
                        className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                        style={{ ...inputBase, borderColor: inputBorder }}
                      />
                      <label style={{ color: labelColor }}>{t("volumePlaceholder")}</label>
                    </div>
                  </div>
                </fieldset>

                {/* Группа: Маршрут и время */}
                <fieldset className="flex flex-col gap-4">
                  <legend
                    className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2"
                    style={{ color: labelColor }}
                  >
                    {t("groupRoute")}
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="floating-field">
                      <input
                        name="addressFrom"
                        placeholder=" "
                        className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                        style={{ ...inputBase, borderColor: inputBorder }}
                      />
                      <label style={{ color: labelColor }}>{t("addressFromPlaceholder")}</label>
                    </div>

                    <div className="floating-field">
                      <input
                        name="addressTo"
                        placeholder=" "
                        className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                        style={{ ...inputBase, borderColor: inputBorder }}
                      />
                      <label style={{ color: labelColor }}>{t("addressToPlaceholder")}</label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium px-1" style={{ color: labelColor }}>
                      {t("datetime")}
                    </label>
                    <input
                      name="datetime"
                      type="datetime-local"
                      className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                      style={{
                        ...inputBase,
                        borderColor: inputBorder,
                        colorScheme: isDark ? "dark" : "light",
                      }}
                    />
                  </div>

                  <div className="floating-field">
                    <textarea
                      name="description"
                      rows={3}
                      placeholder=" "
                      className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 resize-none"
                      style={{ ...inputBase, borderColor: inputBorder }}
                    />
                    <label style={{ color: labelColor }}>{t("descriptionPlaceholder")}</label>
                  </div>
                </fieldset>

                {/* Аутсорсинг checkbox */}
                <label
                  className="flex items-start gap-3 cursor-pointer select-none px-4 py-4 rounded-xl border transition-all duration-200 hover:border-[rgba(0,71,171,0.4)]"
                  style={{
                    borderColor: inputBorder,
                    backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.5)",
                  }}
                >
                  <input
                    type="checkbox"
                    name="outsourcing"
                    className="mt-0.5 w-4 h-4 rounded accent-[#0047AB] shrink-0 cursor-pointer"
                  />
                  <span className="text-sm leading-snug" style={{ color: headingColor }}>
                    {t("outsourcing")}
                  </span>
                </label>

                {status === "error" && (
                  <p className="text-sm" style={{ color: "#FCA5A5" }}>{t("error")}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full text-sm font-bold py-4 rounded-2xl tracking-wide text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #0047AB, #4FA3FF)",
                    boxShadow: "0 8px 32px rgba(0,71,171,0.45)",
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
