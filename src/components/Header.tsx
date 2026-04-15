import { useTranslations, useLocale } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { label: t("services"), href: `/${locale}#services` },
    { label: t("logistics"), href: `/${locale}/logistics` },
    { label: t("faq"), href: `/${locale}#faq` },
    { label: t("contacts"), href: `/${locale}#contacts` },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg-card) 80%, transparent)",
        borderBottom: "1px solid var(--border-nav)",
        boxShadow: "0 12px 32px -4px rgba(25,28,29,0.06)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href={`/${locale}`}
          className="flex items-center gap-2.5"
        >
          <Logo size={36} />
          <span
            className="text-base font-bold tracking-tight"
            style={{ color: "var(--heading)" }}
          >
            ASTANA{" "}
            <span className="font-light" style={{ color: "var(--accent-end)" }}>
              LOGISTICS
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-300 hover:text-blue-900 dark:hover:text-blue-300"
              style={{ color: "var(--text-muted, var(--text-secondary))" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LangSwitcher />
          <ThemeToggle />
          <a
            href={`/${locale}#form`}
            className="text-sm font-semibold px-6 py-2.5 rounded-lg text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
              boxShadow: "0 4px 12px var(--accent-glow)",
            }}
          >
            {t("cta") || "Заявка"}
          </a>
        </div>

        <BurgerMenu />
      </nav>
    </header>
  );
}
