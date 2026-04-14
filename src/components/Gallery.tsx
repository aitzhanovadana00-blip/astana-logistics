import { useTranslations } from "next-intl";

const photos = [
  { src: "/team-trucks.jpg", alt: "team-trucks" },
  { src: "/fleet.jpg", alt: "fleet" },
  { src: "/worker-loading.jpg", alt: "worker-loading" },
  { src: "/warehouse.jpg", alt: "warehouse" },
  { src: "/team-small.jpg", alt: "team-small" },
  { src: "/drivers.jpg", alt: "drivers" },
];

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section className="py-32" style={{ background: "var(--bg-alt, var(--bg))" }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="font-headline text-3xl md:text-4xl font-bold mb-16 text-center editorial-spacing animate-on-scroll"
          style={{
            color: "var(--heading)",
            fontFamily: "var(--font-headline), 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
          }}
        >
          {t("heading")}
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large card - first photo */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group animate-on-scroll" style={{ minHeight: "360px" }}>
            <img
              src={photos[0].src}
              alt={t(photos[0].alt)}
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 z-10">
              <p className="text-white font-bold text-xl">{t(photos[0].alt)}</p>
            </div>
          </div>

          {/* Right column - two stacked */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden group flex-1 animate-on-scroll" style={{ minHeight: "170px" }}>
              <img
                src={photos[1].src}
                alt={t(photos[1].alt)}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">{t(photos[1].alt)}</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden group flex-1 animate-on-scroll" style={{ minHeight: "170px" }}>
              <img
                src={photos[2].src}
                alt={t(photos[2].alt)}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">{t(photos[2].alt)}</p>
            </div>
          </div>

          {/* Bottom row - three equal */}
          {photos.slice(3).map((photo) => (
            <div
              key={photo.src}
              className="md:col-span-4 relative rounded-3xl overflow-hidden group animate-on-scroll"
              style={{ minHeight: "240px" }}
            >
              <img
                src={photo.src}
                alt={t(photo.alt)}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">{t(photo.alt)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
