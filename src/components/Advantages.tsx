import { useTranslations } from "next-intl";

export default function Advantages() {
  const t = useTranslations("advantages");
  const items: string[] = t.raw("items");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extralight tracking-tight mb-16 animate-on-scroll"
          style={{ color: "var(--text-primary)" }}
        >
          {t("heading")}
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {items.map((item, i) => (
            <div key={i} className="group flex items-start gap-4 animate-on-scroll">
              <div
                className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-medium text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                  boxShadow: "0 2px 8px var(--accent-glow)",
                }}
              >
                {i + 1}
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
  );
}
