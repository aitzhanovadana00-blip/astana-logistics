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
              color: "var(--heading)",
              fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            }}
          >
            {t("heading")}
          </h2>
        </div>

        <ol className="max-w-2xl mx-auto flex flex-col">
          {items.map((item, i) => (
            <li
              key={i}
              className="group flex items-center gap-6 py-6 border-b last:border-b-0 animate-on-scroll"
              style={{ borderColor: "var(--outline-variant)" }}
            >
              <div
                className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--primary)",
                  boxShadow: "0 8px 24px var(--accent-glow)",
                }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: "var(--heading)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p
                className="text-base md:text-lg font-semibold leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
