"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQ() {
  const t = useTranslations("faq");
  const items: { question: string; answer: string }[] = t.raw("items");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight animate-on-scroll"
            style={{ color: "var(--accent-start)" }}
          >
            {t("heading")}
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border overflow-hidden animate-on-scroll"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: openIndex === i ? "var(--accent-end)" : "var(--border-card)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200"
              >
                <span
                  className="text-sm font-semibold pr-4"
                  style={{ color: openIndex === i ? "var(--accent-text)" : "var(--text-primary)" }}
                >
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ color: openIndex === i ? "var(--accent-text)" : "var(--text-secondary)" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-4 px-5" : "max-h-0"}`}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
