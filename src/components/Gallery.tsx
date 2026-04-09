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
    <section className="py-20" style={{ background: "var(--bg-card)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight animate-on-scroll"
            style={{ color: "var(--accent-start)" }}
          >
            {t("heading")}
          </h2>
          <p className="text-sm mt-2 animate-on-scroll" style={{ color: "var(--text-secondary)" }}>
            {t("subheading")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative overflow-hidden rounded-lg animate-on-scroll"
            >
              <div className="aspect-[4/3]">
                <img
                  src={photo.src}
                  alt={t(photo.alt)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
