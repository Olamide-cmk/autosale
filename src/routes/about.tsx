import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocale } from "@/i18n/locale-context";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — AutoSale" },
      { name: "description", content: "L'histoire et la mission d'AutoSale." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-3xl py-14">
        <span className="eyebrow text-primary">{t("about.eyebrow")}</span>
        <h1 className="mt-2 text-4xl font-bold">{t("about.title")}</h1>
        <div className="prose mt-6 space-y-5 text-muted-foreground">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <h2 className="text-2xl font-bold text-foreground">{t("about.commitmentTitle")}</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>{t("about.li1")}</li>
            <li>{t("about.li2")}</li>
            <li>{t("about.li3")}</li>
            <li>{t("about.li4")}</li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
