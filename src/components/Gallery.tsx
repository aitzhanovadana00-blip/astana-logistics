import { useTranslations } from "next-intl";

const photos = [
  { src: "/team-trucks.jpg", alt: "team-trucks", span: "md:col-span-2 md:row-span-2" },
  { src: "/fleet.jpg", alt: "fleet", span: "md:col-span-2" },
  { src: "/worker-loading.jpg", alt: "worker-loading", span: "" },
  { src: "/warehouse.jpg", alt: "warehouse", span: "md:col-span-2" },
  { src: "/team-small.jpg", alt: "team-small", span: "" },
  { src: "/drivers.jpg", alt: "drivers", span: "md:col-span-2" },
];

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extralight tracking-tight mb-4 animate-on-scroll"
          style={{ color: "var(--text-primary)" }}
        >
          {t("heading")}
        </h2>
        <p
          className="text-sm mb-12 animate-on-scroll"
          style={{ color: "var(--text-secondary)" }}
        >
          {t("subheading")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl ${photo.span} animate-on-scroll`}
            >
              <div className="aspect-[4/3] w-full h-full">
                <img
                  src={photo.src}
                  alt={t(photo.alt)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
