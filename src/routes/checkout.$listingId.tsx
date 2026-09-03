import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { CheckCircle2, ShieldAlert, Lock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { formatUsd, listings as seedListings, fromSubmittedListing } from "@/data/listings";
import { getSubmittedListingByIdFn, getPurchasedListingIdsFn, purchaseListingFn } from "@/server-fns";
import { useLocale } from "@/i18n/locale-context";

export const Route = createFileRoute("/checkout/$listingId")({
  loader: async ({ params }) => {
    const seedMatch = seedListings.find((l) => l.id === params.listingId);
    if (seedMatch) return { listing: seedMatch };

    const submitted = await getSubmittedListingByIdFn({ data: { id: params.listingId } });
    if (submitted) return { listing: fromSubmittedListing(submitted) };

    throw notFound();
  },
  head: () => ({
    meta: [
      { title: "Paiement — AutoSale" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const payFormSchema = z.object({
  buyerName: z.string().min(1, "Merci d'indiquer votre nom."),
  buyerEmail: z.string().email("Adresse email invalide."),
  cardNumber: z
    .string()
    .transform((v) => v.replace(/\s+/g, ""))
    .refine((v) => /^\d{13,19}$/.test(v), "Numéro de carte invalide."),
  cardExpiry: z.string().regex(/^\d{2}\/\d{2}$/, "Format attendu : MM/AA."),
  cardCvc: z.string().regex(/^\d{3,4}$/, "CVC invalide."),
});

const BUYER_FEE_RATE = 0; // AutoSale doesn't charge a buyer fee — price shown is the price paid.

function Checkout() {
  const { listing } = Route.useLoaderData();
  const { t } = useLocale();
  const [step, setStep] = useState<"review" | "pay" | "done">("review");
  const [alreadySold, setAlreadySold] = useState(false);
  const [form, setForm] = useState({
    buyerName: "",
    buyerEmail: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState("");
  const [cardLast4, setCardLast4] = useState("");

  useEffect(() => {
    let cancelled = false;
    getPurchasedListingIdsFn()
      .then((ids) => {
        if (!cancelled) setAlreadySold(listing.status === "sold" || ids.includes(listing.id));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [listing.id, listing.status]);

  const fee = Math.round(listing.price * BUYER_FEE_RATE);
  const total = listing.price + fee;

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  }

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    const result = payFormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setPayError("");
    setPaying(true);
    try {
      const res = await purchaseListingFn({
        data: {
          listingId: listing.id,
          amount: total,
          buyerName: form.buyerName,
          buyerEmail: form.buyerEmail,
          cardNumber: form.cardNumber,
          cardExpiry: form.cardExpiry,
          cardCvc: form.cardCvc,
        },
      });
      setCardLast4(res.cardLast4);
      setStep("done");
    } catch (err) {
      if (err instanceof Error && err.message.includes("ALREADY_SOLD")) {
        setPayError(t("checkout.alreadySoldError"));
        setAlreadySold(true);
      } else {
        setPayError(t("checkout.genericError"));
      }
    } finally {
      setPaying(false);
    }
  }

  if (alreadySold && step !== "done") {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main id="main-content" className="container-page flex flex-col items-center justify-center py-24 text-center">
          <h1 className="text-3xl font-bold">{t("checkout.unavailableTitle")}</h1>
          <p className="mt-2 max-w-md text-muted-foreground">{t("checkout.unavailableBody")}</p>
          <Link
            to="/"
            className="mt-6 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:opacity-90"
          >
            {t("checkout.seeOtherListings")}
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-2xl py-12">
        <div className="mb-6 flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground">
          <ShieldAlert className="size-5 shrink-0 text-accent" />
          <p>
            <strong>{t("checkout.demoTitle")}</strong> {t("checkout.demoBody")}
          </p>
        </div>

        <h1 className="text-3xl font-bold">{t("checkout.title")}</h1>
        <p className="mt-1 text-muted-foreground">{listing.title}</p>

        {step !== "done" ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1.2fr]">
            <div className="h-fit rounded-xl border bg-card p-5">
              <img
                src={listing.images[0]}
                alt={listing.title}
                width={600}
                height={400}
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t("checkout.askingPrice")}</dt>
                  <dd className="font-semibold">{formatUsd(listing.price)}</dd>
                </div>
                <div className="flex justify-between border-t pt-2 text-base">
                  <dt className="font-semibold">{t("checkout.totalToPay")}</dt>
                  <dd className="font-bold text-primary">{formatUsd(total)}</dd>
                </div>
              </dl>
            </div>

            {step === "review" ? (
              <div className="rounded-xl border bg-card p-5">
                <h2 className="text-lg font-semibold">{t("checkout.summary")}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("checkout.sellerLabel")} {listing.sellerName} · {listing.location}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t("checkout.deliveryHint")}</p>
                <button
                  type="button"
                  onClick={() => setStep("pay")}
                  className="mt-5 w-full rounded-md bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:opacity-90"
                >
                  {t("checkout.continueToPayment")}
                </button>
              </div>
            ) : (
              <form onSubmit={handlePay} className="rounded-xl border bg-card p-5">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Lock className="size-4" /> {t("checkout.payByCard")}
                </h2>
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="eyebrow block">{t("checkout.yourName")}</label>
                      <Input
                        className="mt-1"
                        value={form.buyerName}
                        onChange={(e) => update("buyerName", e.target.value)}
                        placeholder="Alex Martin"
                      />
                      {errors["buyerName"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["buyerName"]}</p>}
                    </div>
                    <div>
                      <label className="eyebrow block">{t("checkout.yourEmail")}</label>
                      <Input
                        className="mt-1"
                        type="email"
                        value={form.buyerEmail}
                        onChange={(e) => update("buyerEmail", e.target.value)}
                        placeholder="vous@exemple.com"
                      />
                      {errors["buyerEmail"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["buyerEmail"]}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow block">{t("checkout.cardNumber")}</label>
                    <Input
                      className="mt-1"
                      inputMode="numeric"
                      value={form.cardNumber}
                      onChange={(e) => update("cardNumber", e.target.value)}
                      placeholder="4242 4242 4242 4242"
                      maxLength={19}
                    />
                    {errors["cardNumber"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["cardNumber"]}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="eyebrow block">{t("checkout.expiry")}</label>
                      <Input
                        className="mt-1"
                        value={form.cardExpiry}
                        onChange={(e) => update("cardExpiry", e.target.value)}
                        placeholder="MM/AA"
                        maxLength={5}
                      />
                      {errors["cardExpiry"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["cardExpiry"]}</p>}
                    </div>
                    <div>
                      <label className="eyebrow block">{t("checkout.cvc")}</label>
                      <Input
                        className="mt-1"
                        inputMode="numeric"
                        value={form.cardCvc}
                        onChange={(e) => update("cardCvc", e.target.value)}
                        placeholder="123"
                        maxLength={4}
                      />
                      {errors["cardCvc"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["cardCvc"]}</p>}
                    </div>
                  </div>
                </div>
                {payError && <p className="mt-3 text-sm font-medium text-destructive">{payError}</p>}
                <button
                  type="submit"
                  disabled={paying}
                  className="mt-5 w-full rounded-md bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground hover:opacity-90 disabled:opacity-60"
                >
                  {paying ? t("checkout.paying") : `${t("checkout.payButton")} ${formatUsd(total)} ${t("checkout.payButtonDemo")}`}
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center rounded-xl border bg-card p-12 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="size-8 text-primary" />
            </div>
            <h2 className="mt-6 text-2xl font-bold">{t("checkout.successTitle")}</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              {t("checkout.successCardEnding")} {cardLast4} {t("checkout.successDebited")} {formatUsd(total)}.{" "}
              {t("checkout.successBodySuffix")} {listing.year} {listing.brand} {listing.model}.
            </p>
            <Link
              to="/"
              className="mt-6 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:opacity-90"
            >
              {t("checkout.backHome")}
            </Link>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
