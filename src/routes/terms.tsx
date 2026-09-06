import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — AutoSale" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    title: "1. Objet",
    body: "Les présentes conditions régissent l'utilisation de la plateforme AutoSale, un service de mise en relation directe entre vendeurs et acheteurs de véhicules à prix fixe.",
  },
  {
    title: "2. Annonces à prix fixe",
    body: "Chaque annonce affiche un prix fixe déterminé librement par le vendeur. AutoSale ne fixe, ne négocie et ne perçoit aucune part du prix de vente : la négociation finale se fait directement entre l'acheteur et le vendeur.",
  },
  {
    title: "3. Annonces",
    body: "Le vendeur est seul responsable de l'exactitude des informations fournies (état, kilométrage, historique). AutoSale se réserve le droit de retirer toute annonce jugée incomplète ou trompeuse.",
  },
  {
    title: "4. Gratuité",
    body: "La publication d'une annonce est entièrement gratuite, sans commission prélevée sur la vente, quelle que soit son issue.",
  },
  {
    title: "5. Responsabilité",
    body: "AutoSale agit en qualité d'intermédiaire technique et n'est pas partie au contrat de vente conclu entre l'acheteur et le vendeur.",
  },
  {
    title: "6. Modification des conditions",
    body: "Ces conditions peuvent être modifiées à tout moment ; la version en vigueur est celle publiée sur cette page.",
  },
];

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-3xl py-14">
        <h1 className="text-4xl font-bold">Conditions d'utilisation</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Dernière mise à jour : 30 août 2026 — document de démonstration, sans valeur juridique.
        </p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
