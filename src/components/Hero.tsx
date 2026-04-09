import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #0A2463 0%, #1a3a7a 40%, #3E92CC 100%)",
        }}
      />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(62,146,204,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[15%] left-[5%] w-96 h-96 rounded-full z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(10,36,99,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Small accent dots */}
      <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-white/20 z-[1]" />
      <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-white/15 z-[1]" />
      <div className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-white/25 z-[1]" />
      <div className="absolute top-[60%] right-[12%] w-2.5 h-2.5 rounded-full bg-white/10 z-[1]" />

      {/* Diagonal accent lines */}
      <div
        className="absolute top-0 right-[30%] w-px h-[40%] z-[1] opacity-10"
        style={{ background: "linear-gradient(to bottom, transparent, white, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-[40%] w-px h-[30%] z-[1] opacity-10"
        style={{ background: "linear-gradient(to top, transparent, white, transparent)" }}
      />

      {/* Watermark */}
      <div className="absolute top-[50%] left-0 right-0 -translate-y-1/2 z-[1] flex justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="hidden sm:block"
          style={{
            fontSize: "clamp(70px, 16vw, 320px)",
            fontWeight: 900,
            letterSpacing: "0.15em",
            lineHeight: 0.85,
            color: "transparent",
            WebkitTextStroke: "0.5px rgba(255,255,255,0.06)",
            fontFamily: "'BebasNeue', 'Impact', sans-serif",
          }}
        >
          LOGISTICS
        </span>
      </div>

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-3xl mx-auto">
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {t("heroLine1")}
          <br />
          <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>
            {t("heroLine2")}
          </span>
        </h1>

        <p
          className="mt-4 text-sm sm:text-base"
          style={{ color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "16px auto 0" }}
        >
          {t("description")}
        </p>

        <a
          href="#form"
          className="group inline-flex items-center gap-2 mt-8 px-8 py-3.5 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "#ffffff",
            color: "#0A2463",
            borderRadius: "6px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          {t("cta")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>

        {/* Stats */}
        <div className="flex justify-center gap-10 sm:gap-16 mt-12">
          {[
            { num: t("stat1num"), label: t("stat1label") },
            { num: t("stat2num"), label: t("stat2label") },
            { num: t("stat3num"), label: t("stat3label") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.num}</div>
              <div className="text-[10px] sm:text-xs text-white/50 tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
