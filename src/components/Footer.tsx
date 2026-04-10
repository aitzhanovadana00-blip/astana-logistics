import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer style={{ backgroundColor: "var(--primary, #0A2463)" }}>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-bold text-white mb-6">
              ASTANA{" "}
              <span style={{ color: "#B1C5FF" }}>LOGISTICS</span>
            </p>
            <p className="text-sm leading-relaxed text-white/50 mb-8">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-bold text-white mb-6 text-xs uppercase tracking-[0.15em]">
              {nav("services")}
            </h5>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/50 text-sm hover:text-white transition-colors">
                  {nav("services")}
                </a>
              </li>
              <li>
                <a href={`/${locale}/logistics`} className="text-white/50 text-sm hover:text-white transition-colors">
                  {nav("logistics")}
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h5 className="font-bold text-white mb-6 text-xs uppercase tracking-[0.15em]">
              {nav("faq")}
            </h5>
            <ul className="space-y-4">
              <li>
                <a href="#faq" className="text-white/50 text-sm hover:text-white transition-colors">
                  {nav("faq")}
                </a>
              </li>
              <li>
                <a href={`/${locale}/privacy`} className="text-white/50 text-sm hover:text-white transition-colors">
                  {t("privacy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-white mb-6 text-xs uppercase tracking-[0.15em]">
              {nav("contacts")}
            </h5>
            <div className="space-y-4">
              <a href="tel:+77753373130" className="block text-white/50 text-sm hover:text-white transition-colors font-semibold">
                +7 775 337 3130
              </a>
              <a href="https://wa.me/77753373130" className="block text-white/50 text-sm hover:text-white transition-colors">
                WhatsApp
              </a>
              <a href="https://t.me/+77753373130" className="block text-white/50 text-sm hover:text-white transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">{t("legal")}</p>
        </div>
      </div>
    </footer>
  );
}
