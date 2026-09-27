/* The mails a TICKETOVA shop sends, rendered from the 2026 templates with
   sample data for the two example tenants. The rules are in
   public/ticketova/emails/README.md. */
export const emailTenants = [
  { slug: "tuerlersee", name: "Strandbad Türlersee" },
  { slug: "mettmi", name: "Badi Mettmenstetten" },
] as const;

export const emails = [
  { file: "order-paid.html", name: "Order confirmation", when: "The payment is confirmed.", subject: "Bestellung O-2027-0001 bestätigt" },
  { file: "order-refund.html", name: "Refund", when: "An order is refunded, in part or in full.", subject: "Bestellung O-2027-0001 storniert und erstattet" },
  { file: "partner-validation.html", name: "Partner validation", when: "A ticket needs a partner to confirm its holder.", subject: "Validierung erforderlich – PRT-0001" },
  { file: "partner-login.html", name: "Partner login", when: "A partner asks for a new login link.", subject: "Ihr Login-Link für TICKETOVA" },
  { file: "validation-success.html", name: "Validation accepted", when: "The check of a ticket succeeded.", subject: "Ticket-Prüfung erfolgreich #O-2027-0001" },
  { file: "validation-failed.html", name: "Validation rejected", when: "The check of a ticket failed.", subject: "Ticket-Prüfung fehlgeschlagen #O-2027-0001" },
] as const;

const base = import.meta.env.BASE_URL;
export const emailUrl = (tenant: string, file: string) => `${base}ticketova/emails/${tenant}/${file}`;
export const emailsReadme = `${base}ticketova/emails/README.md`;
