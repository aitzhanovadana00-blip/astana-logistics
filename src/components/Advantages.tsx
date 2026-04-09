import { useTranslations } from "next-intl";

export default function Advantages() {
  const t = useTranslations("advantages");
  const items: string[] = t.raw("items");

  return (
    <section className="py-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight animate-on-scroll"
            style={{ color: "var(--accent-start)" }}
          >
            {t("heading")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-5 rounded-lg border transition-all duration-300 hover:-translate-y-0.5 animate-on-scroll"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
              }}
            >
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                }}
              >
                {i + 1}
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-primary)" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
