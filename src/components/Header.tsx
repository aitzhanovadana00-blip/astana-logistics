import { useTranslations, useLocale } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { label: t("services"), href: "#services" },
    { label: t("logistics"), href: `/${locale}/logistics` },
    { label: t("faq"), href: "#faq" },
    { label: t("contacts"), href: "#contacts" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
        borderColor: "var(--border-nav)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <a href={`/${locale}`} className="flex items-center gap-2.5 font-light text-sm tracking-[2px]" style={{ color: "var(--text-primary)" }}>
          <Logo size={48} />
          ASTANA LOGISTICS
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider uppercase transition-colors hover:opacity-70"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LangSwitcher />
          <ThemeToggle />
        </div>

        <BurgerMenu />
      </div>
    </header>
  );
}
