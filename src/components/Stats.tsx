import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("hero");

  const stats = [
    { num: t("stat1num"), label: t("stat1label") },
    { num: t("stat2num"), label: t("stat2label") },
    { num: t("stat3num"), label: t("stat3label") },
  ];

  return (
    <section className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="animate-on-scroll">
            <p
              className="font-headline text-5xl md:text-6xl font-extrabold mb-2 editorial-spacing"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              {stat.num}
            </p>
            <p
              className="uppercase tracking-[0.2em] text-xs font-bold"
              style={{ color: "var(--text-secondary)" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
