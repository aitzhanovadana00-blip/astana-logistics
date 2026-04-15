"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import LangSwitcher from "./LangSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { label: t("services"), href: `/${locale}#services` },
    { label: t("logistics"), href: `/${locale}/logistics` },
    { label: t("faq"), href: `/${locale}#faq` },
    { label: t("contacts"), href: `/${locale}#contacts` },
  ];

  // Lock body scroll while menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        aria-label="Menu"
        aria-expanded={open}
      >
        <span
          className={`block w-5 h-px transition-all duration-300 ${
            open ? "rotate-45 translate-y-[3.5px]" : ""
          }`}
          style={{ backgroundColor: "var(--text-primary)" }}
        />
        <span
          className={`block w-5 h-px transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[3.5px]" : ""
          }`}
          style={{ backgroundColor: "var(--text-primary)" }}
        />
      </button>

      {/* Backdrop — closes menu on tap outside */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        aria-hidden
      />

      {/* Slide-down panel */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 origin-top ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg) 95%, transparent)",
          borderColor: "var(--border-nav)",
          boxShadow: "0 12px 32px -4px rgba(0,0,0,0.25)",
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 max-w-7xl mx-auto">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium tracking-wide transition-colors hover:opacity-70"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </a>
          ))}

          <a
            href={`/${locale}#form`}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
              boxShadow: "0 4px 16px var(--accent-glow)",
            }}
          >
            {t("cta") || "Заявка"}
          </a>

          <div
            className="flex items-center gap-4 pt-5 border-t"
            style={{ borderColor: "var(--border-nav)" }}
          >
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </>
  );
}
