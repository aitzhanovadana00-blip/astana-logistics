import { useTranslations } from "next-intl";

export default function Advantages() {
  const t = useTranslations("advantages");
  const items: string[] = t.raw("items");

  return (
    <section className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2
            className="font-headline text-3xl md:text-4xl font-bold mb-4 editorial-spacing animate-on-scroll"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            }}
          >
            {t("heading")}
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Connector Line */}
          <div
            className="hidden md:block absolute top-8 left-0 w-full h-px -z-10"
            style={{ backgroundColor: "var(--outline-variant)" }}
          />

          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center animate-on-scroll">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-8 border-2"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--primary)",
                  boxShadow: "0 8px 24px var(--accent-glow)",
                }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p
                className="text-base font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Remaining items as cards below */}
        {items.length > 3 && (
          <div className="grid md:grid-cols-2 gap-4 mt-16 max-w-3xl mx-auto">
            {items.slice(3).map((item, i) => (
              <div
                key={i + 3}
                className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 animate-on-scroll"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-card)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                  }}
                >
                  {i + 4}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
