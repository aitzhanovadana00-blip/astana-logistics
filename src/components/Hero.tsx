import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* LAYER 1: Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-ford-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,15,30,0.45) 0%, rgba(10,15,30,0.15) 40%, rgba(10,15,30,0.25) 55%, rgba(10,15,30,0.8) 100%)",
          }}
        />
      </div>

      {/* LAYER 2: Outlined watermark text "LOGISTICS" */}
      <div className="absolute top-[5%] md:top-[7%] left-0 right-0 z-[1] flex justify-center pointer-events-none select-none overflow-hidden">
        <span
          style={{
            fontSize: "clamp(100px, 18vw, 280px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 0.85,
            color: "transparent",
            WebkitTextStroke: "3px rgba(255,255,255,0.2)",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          LOGISTICS
        </span>
      </div>

      {/* LAYER 2b: Main headline — positioned at top, BEHIND truck */}
      <div className="absolute top-[14%] md:top-[16%] left-0 right-0 z-[1] text-center px-6 pointer-events-none">
        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            fontWeight: 400,
            letterSpacing: "0.07em",
            lineHeight: 0.95,
            color: "#1a1a1a",
            fontFamily: "'QueenOfClubs', 'Impact', 'Arial Narrow', sans-serif",
            textTransform: "uppercase",
          }}
        >
          {t("heroLine1")}
        </h1>
        <p
          className="mt-1"
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.6rem)",
            fontWeight: 300,
            letterSpacing: "0.25em",
            color: "#333333",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {t("heroLine2")}
        </p>
      </div>

      {/* LAYER 3: Truck cutout — LARGE, overlapping text */}
      <div className="absolute inset-0 z-[2] pointer-events-none flex items-end justify-center">
        <img
          src="/hero-ford-cutout.png"
          alt="Грузовик"
          className="w-[250%] sm:w-[230%] md:w-[210%] lg:w-[200%] h-auto object-contain"
          style={{
            marginBottom: "-28%",
            filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.4))",
          }}
        />
      </div>

      {/* LAYER 4: Bottom-left CTA */}
      <div className="relative z-[3] max-w-6xl mx-auto w-full px-6 pb-14 md:pb-18">
        <div className="max-w-md pointer-events-auto">
          <p
            className="text-base sm:text-lg md:text-xl font-light leading-snug mb-5"
            style={{
              color: "rgba(255,255,255,0.9)",
              textShadow: "0 2px 12px rgba(0,0,0,0.7)",
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
        className="absolute bottom-0 left-0 right-0 h-1 z-[4]"
        style={{ background: "#E8A317" }}
      />
    </section>
  );
}
