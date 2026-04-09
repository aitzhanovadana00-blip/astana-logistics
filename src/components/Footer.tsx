import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer style={{ backgroundColor: "#0A2463" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm font-bold tracking-tight text-white mb-3">
              ASTANA{" "}
              <span className="font-light" style={{ color: "#3E92CC" }}>LOGISTICS</span>
            </p>
            <p className="text-xs leading-relaxed text-white/50">
              {t("description")}
            </p>
          </div>

          <div>
            <nav className="flex flex-col gap-2">
              <a href="#services" className="text-xs text-white/50 hover:text-white/80 transition-colors">{nav("services")}</a>
              <a href={`/${locale}/logistics`} className="text-xs text-white/50 hover:text-white/80 transition-colors">{nav("logistics")}</a>
              <a href="#faq" className="text-xs text-white/50 hover:text-white/80 transition-colors">{nav("faq")}</a>
              <a href="#contacts" className="text-xs text-white/50 hover:text-white/80 transition-colors">{nav("contacts")}</a>
            </nav>
          </div>

          <div>
            <a href="tel:+77753373130" className="block text-xs text-white/50 hover:text-white/80 transition-colors mb-1">+7 775 337 3130</a>
            <a href="https://wa.me/77753373130" className="block text-xs text-white/50 hover:text-white/80 transition-colors mb-1">WhatsApp</a>
            <a href="https://t.me/+77753373130" className="block text-xs text-white/50 hover:text-white/80 transition-colors">Telegram</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/30">
            {t("legal")}
          </p>
          <a
            href={`/${locale}/privacy`}
            className="text-xs text-white/30 hover:text-white/50 transition-colors"
          >
            {t("privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
}
