import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Mail } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { useLocale } from "@/i18n/locale-context";
import { submitContactFn } from "@/server-fns";
import { siteContact } from "@/config/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AutoSale" },
      { name: "description", content: "Contactez l'équipe AutoSale pour toute question." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().min(1, "Merci d'indiquer votre nom."),
  email: z.string().email("Adresse email invalide."),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères."),
});

function Contact() {
  const { t } = useLocale();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setError("");
    setSending(true);
    try {
      await submitContactFn({
        data: {
          listingId: "general-inquiry",
          name: form.name,
          email: form.email,
          phone: "",
          message: form.message,
        },
      });
      setSent(true);
    } catch {
      setError(t("contactPage.error"));
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page max-w-xl py-14">
        <h1 className="text-4xl font-bold">{t("contactPage.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("contactPage.subtitle")}</p>

        {sent ? (
          <div className="mt-8 flex flex-col items-center rounded-xl border bg-card p-8 text-center">
            <CheckCircle2 className="size-8 text-primary" />
            <p className="mt-3 font-semibold">{t("contactPage.sentTitle")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("contactPage.sentBody")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-xl border bg-card p-6">
            <div>
              <label className="eyebrow block">{t("contactPage.name")}</label>
              <Input className="mt-1" value={form.name} onChange={(e) => update("name", e.target.value)} />
              {errors["name"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["name"]}</p>}
            </div>
            <div>
              <label className="eyebrow block">{t("contactPage.email")}</label>
              <Input className="mt-1" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              {errors["email"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["email"]}</p>}
            </div>
            <div>
              <label className="eyebrow block">{t("contactPage.message")}</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="mt-1 min-h-32 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              {errors["message"] && <p className="mt-1 text-xs font-medium text-destructive">{errors["message"]}</p>}
            </div>
            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            <button
              type="submit"
              disabled={sending}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:opacity-90 disabled:opacity-60"
            >
              <Mail className="size-4" /> {sending ? t("contactPage.sending") : t("contactPage.send")}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              {siteContact.email} · {siteContact.phone}
            </p>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
