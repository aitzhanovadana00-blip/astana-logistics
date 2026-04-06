"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQ() {
  const t = useTranslations("faq");
  const items: { question: string; answer: string }[] = t.raw("items");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extralight tracking-tight mb-16"
          style={{ color: "var(--text-primary)" }}
        >
          {t("heading")}
        </h2>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: "var(--border-card)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span
                  className="text-sm font-medium pr-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ color: "var(--text-secondary)" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}
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
