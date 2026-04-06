import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("hero");

  return (
    <main>
      <h1>{t("title1")}</h1>
    </main>
  );
}
