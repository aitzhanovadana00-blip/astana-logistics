"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import WaveBackground from "@/components/ui/wave-background";

export default function Hero() {
  const t = useTranslations("hero");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center justify-center pt-24 pb-24">
      <WaveBackground darkTheme={isDark} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 py-1.5 pl-2 pr-4 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] mb-10"
          style={{
            backgroundColor: "var(--bg-card)",
            color: "var(--heading)",
            border: "1px solid var(--outline-variant)",
            boxShadow: "0 1px 18px rgba(0,71,171,0.10)",
          }}
        >
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded-full"
            style={{
              background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </span>
          {t("subtitle")}
        </div>

        {/* Display headline */}
        <h1
          className="font-headline editorial-spacing leading-[1.02] mb-4"
          style={{
            fontSize: "clamp(1.75rem, 4.8vw, 3.75rem)",
            fontWeight: 800,
            color: "var(--hero-title)",
            fontFamily:
              "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
          }}
        >
          {t("heroLine1")}
        </h1>

        {/* Subheadline */}
        <p
          className="font-headline mb-8 tracking-tight"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.375rem)",
            fontWeight: 300,
            color: "var(--hero-title-muted)",
            fontFamily:
              "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
          }}
        >
          {t("heroLine2")}
        </p>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--hero-description)" }}
        >
          {t("description")}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#form"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
              boxShadow: "0 6px 28px rgba(0,71,171,0.28)",
            }}
          >
            {t("cta")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
