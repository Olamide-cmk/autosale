import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Confidentialité — AutoSale" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "Données collectées",
    body: "Coordonnées du vendeur (nom, email, téléphone) et détails du véhicule lorsque vous publiez une annonce ; nom et email lorsque vous contactez un vendeur ou effectuez un paiement de démonstration.",
  },
  {
    title: "Utilisation des données",
    body: "Vos données servent uniquement à publier votre annonce et à vous mettre en relation avec les acheteurs ou vendeurs intéressés. AutoSale ne crée aucun compte utilisateur.",
  },
  {
    title: "Stockage des données",
    body: "Dans cette démonstration, les annonces publiées et les messages de contact envoyés aux vendeurs sont stockés côté serveur. Vos favoris et préférences d'affichage (thème, langue) restent uniquement dans votre navigateur (localStorage). Aucune donnée n'est transmise à un tiers.",
  },
  {
    title: "Cookies",
    body: "Le site n'utilise pas de cookies de suivi publicitaire. Seules des préférences techniques (thème clair/sombre, favoris) sont conservées localement.",
  },
  {
    title: "Paiement par carte",
    body: "Le flux de paiement de cette démonstration ne traite aucun paiement réel : aucun processeur de paiement n'est contacté et le numéro de carte n'est jamais stocké. Seuls les 4 derniers chiffres sont conservés côté serveur, uniquement pour l'écran de confirmation.",
  },
  {
    title: "Vos droits",
    body: "Vous pouvez à tout moment supprimer vos données en effaçant les données de navigation de votre navigateur pour ce site.",
  },
];

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-3xl py-14">
        <h1 className="text-4xl font-bold">Politique de confidentialité</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Dernière mise à jour : 30 août 2026 — document de démonstration.
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
