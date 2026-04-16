import { useTranslations, useLocale } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  const services = [
    {
      key: "pickup",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M9 7h6M12 3v4M5 11l7 7 7-7" />
        </svg>
      ),
    },
    {
      key: "delivery",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      key: "outsourcing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10M6 20V4M18 20v-6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-32" style={{ background: "var(--bg-alt, var(--bg))" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2
              className="font-headline text-2xl md:text-5xl font-bold mb-6 editorial-spacing animate-on-scroll"
              style={{
                color: "var(--heading)",
                fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              {t("heading")}
            </h2>
            <p className="text-lg animate-on-scroll" style={{ color: "var(--text-secondary)" }}>
              {t("subheading") || ""}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.key}
              className={`group card-hover p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-[var(--outline-variant)] animate-on-scroll-delay-${i}`}
              style={{
                backgroundColor: "var(--bg-card)",
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 transition-colors"
                style={{
                  backgroundColor: "var(--surface-container, #EDEEEF)",
                  color: "var(--accent-start)",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {t(`${service.key}.title`)}
              </h3>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {t(`${service.key}.description`)}
              </p>

              {service.key === "outsourcing" && (
                <a
                  href={`/${locale}/logistics`}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all group/link"
                  style={{ color: "var(--heading)" }}
                >
                  {t("outsourcing.link")}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
