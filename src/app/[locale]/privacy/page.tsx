import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const t = useTranslations("privacy");
  const content: string[] = t.raw("content");

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h1
              className="text-3xl md:text-4xl font-extralight tracking-tight mb-12"
              style={{ color: "var(--text-primary)" }}
            >
              {t("title")}
            </h1>
            <div className="flex flex-col gap-4">
              {content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
