import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-3xl py-14">
        <span className="eyebrow text-primary">Notre histoire</span>
        <h1 className="mt-2 text-4xl font-bold">À propos d'AutoSale</h1>
        <div className="prose mt-6 space-y-5 text-muted-foreground">
          <p>
            AutoSale est né d'un constat simple : les passionnés d'automobile méritent une plateforme
            de vente aussi rigoureuse dans ses annonces qu'exigeante sur la qualité des voitures
            présentées. Pas de photos floues, pas d'historique caché — chaque annonce est documentée
            en détail, défauts compris.
          </p>
          <p>
            Nous mettons en relation des vendeurs particuliers et professionnels avec des acheteurs
            sérieux, sans intermédiaire ni enchère. Vous fixez votre prix, l'acheteur vous contacte
            directement pour négocier et organiser la visite.
          </p>
          <p>
            De la youngtimer de collection à la sportive moderne en passant par les classiques
            restaurées, notre catalogue reflète la diversité des passions automobiles — sans jamais
            sacrifier la transparence.
          </p>
          <h2 className="text-2xl font-bold text-foreground">Notre engagement</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Publication d'annonce gratuite, sans commission cachée.</li>
            <li>Des annonces rédigées avec des spécifications techniques complètes.</li>
            <li>Un contact direct entre acheteur et vendeur, sans intermédiaire.</li>
            <li>Un support dédié du dépôt de l'annonce jusqu'à la remise des clés.</li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
