import { useTranslations, useLocale } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  const services = [
    {
      key: "pickup",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M9 7h6M12 3v4M5 11l7 7 7-7" />
        </svg>
      ),
    },
    {
      key: "delivery",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
      ),
    },
    {
      key: "outsourcing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10M6 20V4M18 20v-6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight animate-on-scroll"
            style={{ color: "var(--accent-start)" }}
          >
            {t("heading")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.key}
              className={`group card-hover rounded-xl p-7 border text-center transition-all duration-300 hover:-translate-y-1 animate-on-scroll-delay-${i}`}
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="text-base font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {t(`${service.key}.title`)}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {t(`${service.key}.description`)}
              </p>

              {service.key === "outsourcing" && (
                <a
                  href={`/${locale}/logistics`}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium transition-all hover:gap-2"
                  style={{ color: "var(--accent-text)" }}
                >
                  {t("outsourcing.link")} <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
