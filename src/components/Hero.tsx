import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute inset-0" style={{ background: "var(--bg)" }}>
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse, rgba(62,146,204,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse, rgba(10,36,99,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[400px] h-[300px]"
          style={{
            background: "radial-gradient(ellipse, rgba(62,146,204,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <p
          className="text-xs tracking-[3px] font-medium mb-6"
          style={{ color: "var(--accent-text)" }}
        >
          {t("subtitle")}
        </p>

        <h1
          className="text-5xl md:text-7xl font-extralight leading-tight tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {t("title1")}
          <br />
          <span
            className="font-light"
            style={{
              backgroundImage: "linear-gradient(135deg, #0A2463, #3E92CC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("titleAccent")}
          </span>
          <br />
          {t("title2")}
        </h1>

        <p
          className="mt-6 max-w-md text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {t("description")}
        </p>

        <a
          href="#form"
          className="mt-8 inline-block text-white text-sm font-semibold px-8 py-3.5 rounded-lg tracking-wide transition-opacity hover:opacity-90"
          style={{
            backgroundImage: "linear-gradient(135deg, #0A2463, #3E92CC)",
          }}
        >
          {t("cta")}
        </a>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          backgroundImage: "linear-gradient(90deg, #1E1B18, #0A2463, #3E92CC, transparent)",
        }}
      />
    </section>
  );
}
