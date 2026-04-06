"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = locale === "ru" ? "kz" : "ru";

  function handleSwitch() {
    const newPath = pathname.replace(`/${locale}`, `/${switchTo}`);
    router.push(newPath);
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-xs font-medium tracking-widest uppercase transition-colors"
      style={{ color: "var(--text-secondary)" }}
    >
      {switchTo.toUpperCase()}
    </button>
  );
}
