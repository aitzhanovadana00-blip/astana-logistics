import { useTranslations, useLocale } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  const services = [
    { key: "pickup", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M9 7h6M12 3v4M5 11l7 7 7-7" },
    { key: "delivery", icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
    { key: "outsourcing", icon: "M12 20V10M6 20V4M18 20v-6" },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extralight tracking-tight mb-16"
          style={{ color: "var(--text-primary)" }}
        >
          {t("heading")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className="rounded-xl p-8 border transition-colors"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-6"
                style={{ color: "var(--accent-text)" }}
              >
                <path d={service.icon} />
              </svg>

              <h3
                className="text-lg font-medium mb-3"
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
                  className="inline-block mt-4 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: "var(--accent-text)" }}
                >
                  {t("outsourcing.link")} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
