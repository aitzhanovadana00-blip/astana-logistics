import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="/hero-truck.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* Side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      {/* Giant watermark text */}
      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap select-none pointer-events-none z-[1]"
        style={{
          fontSize: "clamp(100px, 16vw, 240px)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.06)",
          lineHeight: 1,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        LOGISTICS
      </div>

      {/* Main headline - centered over photo */}
      <div className="absolute top-[18%] md:top-[20%] left-0 right-0 z-20 text-center px-6">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-[-0.02em] leading-[0.9] uppercase"
          style={{
            color: "#FFFFFF",
            textShadow: "0 4px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          {t("heroLine1")}
        </h1>
        <p
          className="mt-3 text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] uppercase"
          style={{
            color: "rgba(255,255,255,0.85)",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          {t("heroLine2")}
        </p>
      </div>

      {/* Bottom-left CTA block */}
      <div className="relative z-30 max-w-6xl mx-auto w-full px-6 pb-16 md:pb-20">
        <div className="max-w-md">
          <p
            className="text-lg sm:text-xl md:text-2xl font-light leading-snug mb-6"
            style={{
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 2px 16px rgba(0,0,0,0.7)",
            }}
          >
            {t("description")}
          </p>
          <a
            href="#form"
            className="group inline-flex items-center gap-2 text-sm font-bold px-8 py-4 tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
            style={{
              background: "#E8A317",
              color: "#1a1a1a",
              clipPath:
                "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
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
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-30"
        style={{ background: "#E8A317" }}
      />
    </section>
  );
}
