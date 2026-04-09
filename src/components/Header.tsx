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
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-nav)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href={`/${locale}`}
          className="flex items-center gap-2.5"
          style={{ color: "var(--text-primary)" }}
        >
          <Logo size={40} />
          <span className="text-sm font-bold tracking-tight" style={{ color: "var(--accent-start)" }}>
            ASTANA{" "}
            <span className="font-light" style={{ color: "var(--accent-end)" }}>
              LOGISTICS
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider uppercase font-medium transition-colors hover:opacity-70"
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
