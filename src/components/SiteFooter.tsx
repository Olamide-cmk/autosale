import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLocale } from "@/i18n/locale-context";
import { subscribeNewsletterFn } from "@/server-fns";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useLocale();

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Merci d'entrer une adresse email valide.");
      return;
    }
    setLoading(true);
    try {
      const res = await subscribeNewsletterFn({ data: { email } });
      toast.success(
        res.alreadySubscribed
          ? "Vous êtes déjà inscrit — à bientôt !"
          : "Inscription confirmée — à bientôt dans votre boîte mail !",
      );
      setEmail("");
    } catch {
      toast.error("Une erreur est survenue, merci de réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="mt-20 border-t bg-navy text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            AUTO<span className="text-accent">SALE</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-white/60">{t("footer.tagline")}</p>
          <div className="mt-5 flex items-center gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Réseau social"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-white/50">{t("footer.listingsHeading")}</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-accent">{t("footer.forSale")}</Link></li>
            <li><Link to="/sold-cars" className="hover:text-accent">{t("footer.sold")}</Link></li>
            <li><Link to="/sell-car" className="hover:text-accent">{t("footer.sellCar")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-white/50">{t("footer.company")}</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-accent">{t("footer.about")}</Link></li>
            <li><Link to="/faq" className="hover:text-accent">{t("footer.faq")}</Link></li>
            <li><Link to="/terms" className="hover:text-accent">{t("footer.terms")}</Link></li>
            <li><Link to="/privacy" className="hover:text-accent">{t("footer.privacy")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-white/50">{t("footer.newsletter")}</h3>
          <p className="mt-3 text-sm text-white/70">{t("footer.newsletterText")}</p>
          <form onSubmit={handleNewsletterSubmit} className="mt-3 flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("footer.emailPlaceholder")}
              aria-label="Adresse email"
              className="h-10 w-full min-w-0 rounded-md border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-60"
            >
              OK
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
