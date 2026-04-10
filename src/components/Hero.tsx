import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="z-10">
          <span
            className="inline-block py-1.5 px-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6"
            style={{
              backgroundColor: "var(--surface-container-low, #F3F4F5)",
              color: "var(--primary)",
              border: "1px solid var(--outline-variant)",
            }}
          >
            {t("subtitle")}
          </span>

          <h1
            className="font-headline editorial-spacing leading-[1.1] mb-8"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--primary)",
              fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            }}
          >
            {t("heroLine1")}
            <br />
            <span style={{ color: "var(--text-muted, var(--text-secondary))", fontWeight: 400 }}>
              {t("heroLine2")}
            </span>
          </h1>

          <p
            className="text-lg max-w-xl mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#form"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:shadow-2xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                boxShadow: "0 4px 16px var(--accent-glow)",
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
            <a
              href="#services"
              className="px-8 py-4 rounded-xl font-bold transition-all active:scale-95"
              style={{
                border: "1px solid var(--outline-variant)",
                color: "var(--primary)",
              }}
            >
              {t("servicesBtn") || "Наши услуги"}
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-[3rem] transform rotate-3"
            style={{ background: "linear-gradient(135deg, var(--accent-glow), transparent)" }}
          />
          <img
            alt="Astana Logistics"
            className="w-full h-full object-cover rounded-[3rem] shadow-2xl z-0"
            src="/hero-bg-hd.jpg"
          />
          {/* Floating Glass Card */}
          <div
            className="absolute bottom-12 -left-6 lg:-left-12 glass-panel p-5 rounded-2xl max-w-[200px] z-10"
            style={{ boxShadow: "0 12px 32px -4px rgba(25,28,29,0.1)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-tight" style={{ color: "var(--primary)" }}>
                  {t("stat1label")}
                </p>
                <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{t("stat1num")}</p>
              </div>
            </div>
            <div
              className="h-1 w-full rounded-full overflow-hidden"
              style={{ backgroundColor: "var(--surface-container, #EDEEEF)" }}
            >
              <div className="h-full w-2/3 rounded-full" style={{ background: "linear-gradient(90deg, var(--accent-start), var(--accent-end))" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
