/* The mails a TICKETOVA shop sends, rendered from the 2026 templates with
   sample data for the two example tenants. The rules are in
   public/ticketova/emails/README.md. */
export const emailTenants = [
  { slug: "tuerlersee", name: "Strandbad Türlersee" },
  { slug: "mettmi", name: "Badi Mettmenstetten" },
] as const;

export const emailLangs = [{ id: "de", name: "Deutsch" }, { id: "en", name: "English" }] as const;
export type EmailLang = (typeof emailLangs)[number]["id"];

export const emails = [
  { file: "order-paid.html", name: "Order confirmation", when: "The payment is confirmed.", subject: { de: "Bestellung O-2027-0001 bestätigt", en: "Order O-2027-0001 confirmed" } },
  { file: "order-refund.html", name: "Refund", when: "An order is refunded, in part or in full.", subject: { de: "Bestellung O-2027-0001 storniert und erstattet", en: "Order O-2027-0001 cancelled and refunded" } },
  { file: "partner-validation.html", name: "Partner validation", when: "A ticket needs a partner to confirm its holder.", subject: { de: "Validierung erforderlich – PRT-0001", en: "Validation needed – PRT-0001" } },
  { file: "partner-login.html", name: "Partner login", when: "A partner asks for a new login link.", subject: { de: "Ihr Login-Link für TICKETOVA", en: "Your TICKETOVA login link" } },
  { file: "validation-success.html", name: "Validation accepted", when: "The check of a ticket succeeded.", subject: { de: "Ticket-Prüfung erfolgreich #O-2027-0001", en: "Ticket Review Successful #O-2027-0001" } },
  { file: "validation-failed.html", name: "Validation rejected", when: "The check of a ticket failed.", subject: { de: "Ticket-Prüfung fehlgeschlagen #O-2027-0001", en: "Ticket Review Failed #O-2027-0001" } },
] as const;

const base = import.meta.env.BASE_URL;
export const emailUrl = (tenant: string, lang: EmailLang, file: string) => `${base}ticketova/emails/${tenant}/${lang}/${file}`;
export const emailsReadme = `${base}ticketova/emails/README.md`;
