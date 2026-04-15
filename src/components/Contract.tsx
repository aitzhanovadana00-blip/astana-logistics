import { useTranslations } from "next-intl";

export default function Contract() {
  const t = useTranslations("contract");
  const items = t.raw("items") as { title: string; description: string }[];

  const icons = [
    // Document
    <svg key="doc" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>,
    // Handshake / building
    <svg key="building" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" />
    </svg>,
    // Shield
    <svg key="shield" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>,
  ];

  return (
    <section className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2
            className="font-headline text-3xl md:text-4xl font-bold mb-4 editorial-spacing"
            style={{
              color: "var(--heading)",
              fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            }}
          >
            {t("heading")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {t("subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`card-hover p-8 rounded-2xl border transition-all duration-300 animate-on-scroll-delay-${i}`}
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-6"
                style={{
                  backgroundColor: "var(--surface-container-low, #F3F4F5)",
                  color: "var(--accent-start)",
                }}
              >
                {icons[i]}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {t("legal") && (
          <p
            className="mt-14 text-center text-xs tracking-wide animate-on-scroll"
            style={{ color: "var(--text-muted)" }}
          >
            {t("legal")}
          </p>
        )}
      </div>
    </section>
  );
}
