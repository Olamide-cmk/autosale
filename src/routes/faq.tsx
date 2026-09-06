import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
      { name: "description", content: "Questions fréquentes sur la vente, l'achat et le contact vendeur." },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "Comment est fixé le prix d'une annonce ?",
    a: "C'est le vendeur qui fixe librement le prix de vente demandé. Ce prix est affiché tel quel sur l'annonce — il n'y a ni enchère ni surenchère.",
  },
  {
    q: "Comment contacter un vendeur ?",
    a: "Sur chaque annonce, un formulaire de contact vous permet d'envoyer un message directement au vendeur, et son numéro de téléphone est accessible en un clic.",
  },
  {
    q: "Combien coûte la publication d'une annonce ?",
    a: "La publication est entièrement gratuite, sans commission sur la vente.",
  },
  {
    q: "Comment se passe le paiement et la remise du véhicule ?",
    a: "Le paiement et la remise des clés se négocient directement entre l'acheteur et le vendeur, une fois qu'ils se sont mis d'accord sur le prix.",
  },
  {
    q: "Puis-je modifier ou retirer mon annonce ?",
    a: "Contactez notre support avec le titre ou le lien de votre annonce, nous nous chargeons de la modification ou du retrait.",
  },
  {
    q: "Comment sont vérifiées les annonces ?",
    a: "Notre équipe éditoriale relit chaque soumission, vérifie la cohérence des informations fournies et demande des précisions au vendeur si nécessaire avant publication.",
  },
];

function Faq() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-3xl py-14">
        <span className="eyebrow text-primary">Assistance</span>
        <h1 className="mt-2 text-4xl font-bold">Comment ça marche</h1>
        <p className="mt-2 text-muted-foreground">
          Les réponses aux questions les plus fréquentes sur la vente, l'achat et le contact vendeur.
        </p>

        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <SiteFooter />
    </div>
  );
}
