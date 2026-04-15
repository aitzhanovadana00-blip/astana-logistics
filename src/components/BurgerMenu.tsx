"use client";

import { useState } from "react";
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

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
        aria-label="Menu"
      >
        <span
          className={`block w-5 h-px transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          style={{ backgroundColor: "var(--text-primary)" }}
        />
        <span
          className={`block w-5 h-px transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          style={{ backgroundColor: "var(--text-primary)" }}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 border-b backdrop-blur-xl"
          style={{
            backgroundColor: "color-mix(in srgb, var(--bg) 90%, transparent)",
            borderColor: "var(--border-nav)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wider uppercase"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t" style={{ borderColor: "var(--border-nav)" }}>
              <LangSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
