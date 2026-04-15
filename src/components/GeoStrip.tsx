import { useTranslations } from "next-intl";

export default function GeoStrip() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative overflow-hidden border-y"
      style={{
        background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 flex items-center justify-center gap-4 md:gap-6">
        {/* Left decorative line */}
        <div className="hidden sm:block flex-1 h-px max-w-[120px]" style={{ background: "rgba(255,255,255,0.35)" }} />

        {/* Pin icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 opacity-90"
        >
          <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>

        <p
          className="text-center font-headline font-bold text-white text-base md:text-xl tracking-tight"
          style={{
            fontFamily:
              "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
          }}
        >
          {t("geoTagline")}
        </p>

        {/* Right decorative line */}
        <div className="hidden sm:block flex-1 h-px max-w-[120px]" style={{ background: "rgba(255,255,255,0.35)" }} />
      </div>
    </section>
  );
}
