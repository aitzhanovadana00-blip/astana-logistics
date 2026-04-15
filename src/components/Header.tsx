import { useTranslations, useLocale } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

export default function Header() {
  const t = useTranslations("nav");
  const contacts = useTranslations("contacts");
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

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-opacity duration-300 hover:opacity-70"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitcher />
          <ThemeToggle />
          <a
            href="tel:+77753373130"
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
            style={{
              color: "var(--heading)",
              border: "1px solid var(--outline-variant)",
              backgroundColor: "color-mix(in srgb, var(--bg-card) 60%, transparent)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {contacts("phone")}
          </a>
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
