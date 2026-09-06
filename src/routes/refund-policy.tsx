import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocale } from "@/i18n/locale-context";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Politique de remboursement — AutoSale" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RefundPolicy,
});

const sectionKeys: { title: TranslationKey; body: TranslationKey }[] = [
  { title: "refund.s1title", body: "refund.s1body" },
  { title: "refund.s2title", body: "refund.s2body" },
  { title: "refund.s3title", body: "refund.s3body" },
];

function RefundPolicy() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-3xl py-14">
        <h1 className="text-4xl font-bold">{t("refund.title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("refund.lastUpdated")}</p>
        <div className="mt-8 space-y-8">
          {sectionKeys.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold">{t(s.title)}</h2>
              <p className="mt-2 text-muted-foreground">{t(s.body)}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
