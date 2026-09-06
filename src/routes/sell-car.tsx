import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check, ImagePlus, X } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { submitListingFn } from "@/server-fns";
import { siteContact } from "@/config/contact";

export const Route = createFileRoute("/sell-car")({
  head: () => ({
    meta: [
      { title: "Vendre ma voiture — AutoSale" },
      {
        name: "description",
        content:
          "Publiez votre annonce gratuitement et fixez votre prix. Décrivez votre véhicule, ajoutez des photos et trouvez l'acheteur idéal.",
      },
      { property: "og:title", content: "Vendre ma voiture — AutoSale" },
      { property: "og:description", content: "Publication gratuite, prix fixe, contact direct avec les acheteurs." },
    ],
  }),
  component: SellCar,
});

const steps = ["Véhicule", "Photos", "Prix"] as const;

const vehicleSchema = z.object({
  brand: z.string().min(1, "La marque est requise."),
  model: z.string().min(1, "Le modèle est requis."),
  year: z
    .string()
    .min(1, "L'année est requise.")
    .refine((v) => Number(v) >= 1900 && Number(v) <= 2100, "Année invalide."),
  mileage: z.string().min(1, "Le kilométrage est requis."),
  fuelType: z.string().min(1, "Le type de carburant est requis."),
  transmission: z.string().min(1, "La transmission est requise."),
  description: z.string().min(20, "Merci de décrire le véhicule en au moins 20 caractères."),
});

const photosSchema = z.object({
  photos: z.array(z.string()).min(3, "Ajoutez au moins 3 photos."),
});

const priceSchema = z.object({
  price: z
    .string()
    .min(1, "Le prix est requis.")
    .refine((v) => Number(v.replace(/[^\d]/g, "")) > 0, "Merci d'entrer un prix valide."),
});

type FormState = z.infer<typeof vehicleSchema> & z.infer<typeof photosSchema> & z.infer<typeof priceSchema>;

const initialState: FormState = {
  brand: "",
  model: "",
  year: "",
  mileage: "",
  fuelType: "",
  transmission: "",
  description: "",
  photos: [],
  price: "",
};

const stepSchemas = [vehicleSchema, photosSchema, priceSchema];

function SellCar() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  };

  function validateStep(index: number): boolean {
    const schema = stepSchemas[index]!;
    const result = schema.safeParse(form);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    setErrors(fieldErrors);
    return false;
  }

  function handlePhotoSelect(files: FileList | null) {
    if (!files) return;
    const urls = Array.from(files)
      .slice(0, 8 - form.photos.length)
      .map((file) => URL.createObjectURL(file));
    update("photos", [...form.photos, ...urls]);
  }

  function removePhoto(index: number) {
    update(
      "photos",
      form.photos.filter((_, i) => i !== index),
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(2)) return;

    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await submitListingFn({
        data: {
          title: `${form.year} ${form.brand} ${form.model}`,
          brand: form.brand,
          model: form.model,
          year: Number(form.year),
          price: Number(form.price.replace(/[^\d]/g, "")),
          mileage: form.mileage,
          fuelType: form.fuelType,
          transmission: form.transmission,
          location: siteContact.location,
          description: form.description,
          images: [], // demo: uploaded photos stay local (blob URLs), never sent to the server
          sellerName: siteContact.name,
          sellerPhone: siteContact.phone,
          sellerEmail: siteContact.email,
        },
      });
      setSubmitted(true);
      setTimeout(() => navigate({ to: "/listings/$listingId", params: { listingId: res.id } }), 1800);
    } catch {
      setSubmitError("Une erreur est survenue lors de la publication. Merci de réessayer.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main id="main-content" className="container-page flex flex-col items-center justify-center py-24 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="size-8 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold">Annonce publiée</h1>
          <p className="mt-2 max-w-md text-muted-foreground">
            Votre {form.year} {form.brand} {form.model} est maintenant en ligne. Redirection vers votre
            annonce…
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page py-12">
        <h1 className="text-4xl font-bold">Vendre ma voiture</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Publication gratuite, prix fixe. Comptez environ 5 minutes.
        </p>

        {/* Stepper */}
        <ol className="mt-8 flex flex-wrap items-center gap-2 text-sm">
          {steps.map((label, i) => (
            <li key={label} className="flex items-center gap-2">
              <span
                className={`flex size-7 items-center justify-center rounded-full text-xs font-bold ${
                  i < step
                    ? "bg-primary text-primary-foreground"
                    : i === step
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {i < step ? <Check className="size-4" /> : i + 1}
              </span>
              <span className={i === step ? "font-semibold text-foreground" : "text-muted-foreground"}>
                {label}
              </span>
              {i < steps.length - 1 && <span className="mx-1 h-px w-6 bg-border sm:w-10" />}
            </li>
          ))}
        </ol>

        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl rounded-xl border bg-card p-6">
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Informations sur le véhicule</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="eyebrow block">Marque</label>
                  <Input className="mt-1" value={form.brand} onChange={(e) => update("brand", e.target.value)} placeholder="Porsche" />
                  {errors["brand"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["brand"]}</p>}
                </div>
                <div>
                  <label className="eyebrow block">Modèle</label>
                  <Input className="mt-1" value={form.model} onChange={(e) => update("model", e.target.value)} placeholder="911 Carrera GTS" />
                  {errors["model"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["model"]}</p>}
                </div>
                <div>
                  <label className="eyebrow block">Année</label>
                  <Input className="mt-1" type="number" value={form.year} onChange={(e) => update("year", e.target.value)} placeholder="2023" />
                  {errors["year"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["year"]}</p>}
                </div>
                <div>
                  <label className="eyebrow block">Kilométrage</label>
                  <Input className="mt-1" value={form.mileage} onChange={(e) => update("mileage", e.target.value)} placeholder="12 000 km" />
                  {errors["mileage"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["mileage"]}</p>}
                </div>
                <div>
                  <label className="eyebrow block">Carburant</label>
                  <Input className="mt-1" value={form.fuelType} onChange={(e) => update("fuelType", e.target.value)} placeholder="Essence" />
                  {errors["fuelType"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["fuelType"]}</p>}
                </div>
                <div>
                  <label className="eyebrow block">Transmission</label>
                  <Input className="mt-1" value={form.transmission} onChange={(e) => update("transmission", e.target.value)} placeholder="Automatique 8 rapports" />
                  {errors["transmission"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["transmission"]}</p>}
                </div>
              </div>
              <div>
                <label className="eyebrow block">Description (options, historique, modifications)</label>
                <textarea
                  className="mt-1 min-h-28 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="Boîte manuelle, pack Sport Chrono, carnet d'entretien complet…"
                />
                {errors["description"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["description"]}</p>}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Photos du véhicule</h2>
              <p className="text-sm text-muted-foreground">
                Ajoutez au moins 3 photos (extérieur, intérieur, moteur). Ces photos restent sur votre
                appareil dans cette démonstration — elles ne sont pas envoyées au serveur.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {form.photos.map((src, i) => (
                  <div key={src} className="group relative aspect-square overflow-hidden rounded-lg border">
                    <img src={src} alt="" className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      className="absolute right-1 top-1 flex size-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="Retirer la photo"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}
                {form.photos.length < 8 && (
                  <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed text-muted-foreground hover:border-accent hover:text-accent">
                    <ImagePlus className="size-6" />
                    <span className="text-xs font-semibold">Ajouter</span>
                    <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => handlePhotoSelect(e.target.files)} />
                  </label>
                )}
              </div>
              {errors["photos"] && <p className="text-xs font-medium text-destructive">{errors["photos"]}</p>}
              <p className="text-xs text-muted-foreground">{form.photos.length} / 8 photos ajoutées</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Prix demandé</h2>
              <div>
                <label className="eyebrow block">Prix fixe (USD)</label>
                <Input className="mt-1" type="number" value={form.price} onChange={(e) => update("price", e.target.value)} placeholder="75000" />
                {errors["price"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["price"]}</p>}
                <p className="mt-2 text-sm text-muted-foreground">
                  C'est le prix affiché sur votre annonce. Les acheteurs pourront ensuite vous contacter
                  directement pour négocier ou organiser une visite.
                </p>
              </div>

              <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Récapitulatif</p>
                <p className="mt-1">
                  {form.year || "—"} {form.brand || "—"} {form.model || "—"} · {form.mileage || "—"} ·{" "}
                  {form.photos.length} photo{form.photos.length > 1 ? "s" : ""} ·{" "}
                  {form.price ? `${Number(form.price).toLocaleString("en-US")} $` : "—"}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Contact affiché sur l'annonce : {siteContact.name} · {siteContact.phone} ·{" "}
                  {siteContact.location}
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t pt-6">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="rounded-md border px-5 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
            >
              Précédent
            </button>
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={() => validateStep(step) && setStep((s) => Math.min(steps.length - 1, s + 1))}
                className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:opacity-90"
              >
                Continuer
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Publication…" : "Publier l'annonce"}
              </button>
            )}
          </div>
          {submitError && <p className="mt-3 text-sm font-medium text-destructive">{submitError}</p>}
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
