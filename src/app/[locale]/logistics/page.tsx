import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function LogisticsPage() {
  const t = useTranslations("logistics");

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--bg)" }}>
            <div
              className="absolute top-1/3 right-1/4 w-[600px] h-[400px]"
              style={{ background: "radial-gradient(ellipse, rgba(10,36,99,0.1) 0%, transparent 70%)" }}
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1
              className="text-4xl md:text-6xl font-extralight tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {t("heroTitle")}
            </h1>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              {t("heroDescription")}
            </p>
          </div>
        </section>

        {/* For whom */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
              {t("forWhomHeading")}
            </h2>
            <div className="flex flex-col gap-4">
              {(t.raw("forWhom") as string[]).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundImage: "linear-gradient(135deg, #0A2463, #3E92CC)" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
              {t("whatWeDoHeading")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {(t.raw("whatWeDo") as string[]).map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="text-sm font-medium mb-2" style={{ color: "var(--accent-text)" }}>0{i + 1}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
              {t("whyUsHeading")}
            </h2>
            <div className="flex flex-col gap-6">
              {(t.raw("whyUs") as string[]).map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-medium text-white"
                    style={{ backgroundImage: "linear-gradient(135deg, #0A2463, #3E92CC)" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <a
            href="#form"
            className="inline-block text-white text-sm font-semibold px-10 py-4 rounded-lg tracking-wide transition-opacity hover:opacity-90"
            style={{ backgroundImage: "linear-gradient(135deg, #0A2463, #3E92CC)" }}
          >
            {t("cta")}
          </a>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
