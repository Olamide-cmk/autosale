import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocale } from "@/i18n/locale-context";
import type { TranslationKey } from "@/i18n/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Comment ça marche — AutoSale" },
      { name: "description", content: "Questions fréquentes sur l'achat et le contact vendeur." },
    ],
  }),
  component: Faq,
});

const faqKeys: { q: TranslationKey; a: TranslationKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
];

function Faq() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-3xl py-14">
        <span className="eyebrow text-primary">{t("faq.eyebrow")}</span>
        <h1 className="mt-2 text-4xl font-bold">{t("faq.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("faq.subtitle")}</p>

        <Accordion type="single" collapsible className="mt-8">
          {faqKeys.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {t(item.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t(item.a)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <SiteFooter />
    </div>
  );
}
