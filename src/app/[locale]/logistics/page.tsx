import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const headlineFont =
  "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif";

export default function LogisticsPage() {
  const t = useTranslations("logistics");

  const forWhom = t.raw("forWhom") as string[];
  const whatWeDo = t.raw("whatWeDo") as string[];
  const whyUs = t.raw("whyUs") as string[];

  // Icons for "Why us" cards — briefcase, target, rocket
  const whyUsIcons = [
    <svg key="briefcase" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>,
    <svg key="target" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>,
    <svg key="spark" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5z" />
    </svg>,
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ─────────── HERO ─────────── */}
        <section className="relative min-h-[72vh] overflow-hidden flex items-center justify-center pt-20 pb-20">
          {/* Static gradient background */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "var(--logistics-hero-bg)" }}
          />
          {/* Top-left radial glow */}
          <div
            aria-hidden
            className="absolute top-0 left-1/4 w-[640px] h-[420px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, var(--logistics-hero-glow-a), transparent 70%)",
            }}
          />
          {/* Bottom-right radial glow */}
          <div
            aria-hidden
            className="absolute bottom-0 right-1/4 w-[520px] h-[360px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, var(--logistics-hero-glow-b), transparent 70%)",
            }}
          />

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
                  background:
                    "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </span>
              {t("heroEyebrow")}
            </div>

            {/* Headline */}
            <h1
              className="font-headline editorial-spacing leading-[1.02] mb-6"
              style={{
                fontSize: "clamp(2rem, 4.8vw, 3.75rem)",
                fontWeight: 800,
                color: "var(--hero-title)",
                fontFamily: headlineFont,
              }}
            >
              {t("heroTitle")}
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "var(--hero-description)" }}
            >
              {t("heroDescription")}
            </p>

            {/* CTA */}
            <a
              href="#form"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                boxShadow: "0 6px 28px rgba(0,71,171,0.28)",
              }}
            >
              {t("cta")}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* ─────────── FOR WHOM — centered single column ─────────── */}
        <section className="py-32" style={{ background: "var(--bg-alt, var(--bg))" }}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="font-headline text-2xl md:text-4xl font-bold editorial-spacing leading-[1.1]"
                style={{
                  color: "var(--heading)",
                  fontFamily: headlineFont,
                }}
              >
                {t("forWhomHeading")}
              </h2>
            </div>

            <ol
              className="flex flex-col border-t"
              style={{ borderColor: "var(--outline-variant)" }}
            >
              {forWhom.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-6 py-8 border-b transition-all"
                  style={{ borderColor: "var(--outline-variant)" }}
                >
                  <span
                    className="text-2xl font-bold shrink-0 w-12 transition-transform group-hover:translate-x-1"
                    style={{
                      color: "var(--primary)",
                      fontFamily: headlineFont,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <p
                    className="text-lg md:text-xl leading-snug font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────── WHAT WE DO — 4-step process flow ─────────── */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="font-headline text-2xl md:text-5xl font-bold editorial-spacing"
                style={{
                  color: "var(--heading)",
                  fontFamily: headlineFont,
                }}
              >
                {t("whatWeDoHeading")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatWeDo.map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-card)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-5xl font-extrabold leading-none"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontFamily: headlineFont,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <div
                      className="w-8 h-px"
                      style={{
                        background:
                          "linear-gradient(to right, var(--primary), transparent)",
                      }}
                    />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── WHY US — three icon cards ─────────── */}
        <section className="py-32" style={{ background: "var(--bg-alt, var(--bg))" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2
                className="font-headline text-2xl md:text-5xl font-bold editorial-spacing"
                style={{
                  color: "var(--heading)",
                  fontFamily: headlineFont,
                }}
              >
                {t("whyUsHeading")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col gap-6 p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-card)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "var(--surface-container-low, #F3F4F5)",
                      color: "var(--accent-start)",
                    }}
                  >
                    {whyUsIcons[i]}
                  </div>
                  <p
                    className="text-base leading-relaxed font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item}
                  </p>
                  {/* Decorative corner accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-[0.06] rounded-bl-[3rem] transition-opacity duration-300 group-hover:opacity-[0.12]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── BIG CTA BAND ─────────── */}
        <section className="relative py-28 overflow-hidden">
          {/* Light theme-aware base (reuses logistics hero gradient tokens) */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "var(--logistics-hero-bg)" }}
          />
          {/* Top-left radial glow */}
          <div
            aria-hidden
            className="absolute top-0 left-1/4 w-[640px] h-[420px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, var(--logistics-hero-glow-a), transparent 70%)",
            }}
          />
          {/* Bottom-right radial glow */}
          <div
            aria-hidden
            className="absolute bottom-0 right-1/4 w-[520px] h-[360px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, var(--logistics-hero-glow-b), transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2
              className="font-headline text-3xl md:text-5xl font-extrabold mb-5 editorial-spacing leading-tight"
              style={{
                color: "var(--heading)",
                fontFamily: headlineFont,
              }}
            >
              {t("bigCtaTitle")}
            </h2>
            <p
              className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("bigCtaSubtitle")}
            </p>
            <a
              href="#form"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                boxShadow: "0 6px 28px rgba(0,71,171,0.28)",
              }}
            >
              {t("cta")}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
