import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border-nav)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p
              className="font-light text-sm tracking-[4px] mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              ASTANA LOGISTICS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t("description")}
            </p>
          </div>

          <div>
            <nav className="flex flex-col gap-2">
              <a href="#services" className="text-xs" style={{ color: "var(--text-secondary)" }}>{nav("services")}</a>
              <a href={`/${locale}/logistics`} className="text-xs" style={{ color: "var(--text-secondary)" }}>{nav("logistics")}</a>
              <a href="#faq" className="text-xs" style={{ color: "var(--text-secondary)" }}>{nav("faq")}</a>
              <a href="#contacts" className="text-xs" style={{ color: "var(--text-secondary)" }}>{nav("contacts")}</a>
            </nav>
          </div>

          <div>
            <a href="tel:+77753373130" className="block text-xs mb-1" style={{ color: "var(--text-secondary)" }}>+7 775 337 3130</a>
            <a href="https://wa.me/77753373130" className="block text-xs mb-1" style={{ color: "var(--text-secondary)" }}>WhatsApp</a>
            <a href="https://t.me/+77753373130" className="block text-xs" style={{ color: "var(--text-secondary)" }}>Telegram</a>
          </div>
        </div>

        <div
          className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between gap-4"
          style={{ borderColor: "var(--border-nav)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            {t("legal")}
          </p>
          <a
            href={`/${locale}/privacy`}
            className="text-xs transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
}
