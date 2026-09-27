/* The Wallet passes every ticket can be saved as, one layout for every
   tenant. The two tenants here are the catalog's examples: Türlersee has a
   dark brand colour, Mettmenstetten a light one, so both text colours of the
   season ticket are shown. The rules are in public/ticketova/tickets/README.md. */

export type PassKind = "day" | "season";

export const passTenants = [
  { slug: "tuerlersee", name: "Strandbad Türlersee", place: "Türlersee", dayLogo: false, brand: "#20365F", onBrand: "#FFFFFF", label: "#A3A3A3" },
  { slug: "mettmi", name: "Badi Mettmenstetten", place: "Mettmenstetten", dayLogo: true, brand: "#CBDDED", onBrand: "#000000", label: "#404040" },
] as const;

export type PassTenant = (typeof passTenants)[number];

export const dayColours = { background: "#000000", text: "#FFFFFF", label: "#A3A3A3" } as const;

export const passColours = (tenant: PassTenant, kind: PassKind) =>
  kind === "day" ? dayColours : { background: tenant.brand, text: tenant.onBrand, label: tenant.label };

export const passFields = {
  day: {
    title: "Tageskarte",
    header: { label: "GÜLTIGKEIT", value: "14.07.2027" },
    secondary: [{ label: "KATEGORIE", value: "Erwachsene" }],
  },
  season: {
    title: "Saisonkarte",
    header: { label: "SAISON", value: "2027" },
    secondary: [{ label: "NAME", value: "MAX MUSTER" }, { label: "GEBURTSDATUM", value: "01.01.1990" }],
  },
} as const;

export const ticketNumber = "T-DEMO-0001";

export const walletButtons = [
  { file: "apple-wallet-de.svg", name: "Apple Wallet, Deutsch" },
  { file: "apple-wallet-en.svg", name: "Apple Wallet, English" },
  { file: "google-wallet-de.svg", name: "Google Wallet, Deutsch" },
  { file: "google-wallet-en.svg", name: "Google Wallet, English" },
] as const;

const base = import.meta.env.BASE_URL;
/* The Apple logo sits on the pass colour. A tenant whose wordmark is dark
   adds a white logo-day for the black day ticket. */
export const appleLogo = (tenant: PassTenant, kind: PassKind) =>
  passAsset(tenant, kind === "day" && tenant.dayLogo ? "apple/logo-day@2x.png" : "apple/logo@2x.png");
export const passAsset = (tenant: PassTenant, path: string) => `${base}ticketova/tickets/${tenant.slug}/${path}`;
export const walletButtonUrl = (file: string) => `${base}brand/wallet/${file}`;
export const passesReadme = `${base}ticketova/tickets/README.md`;
export const qrUrl = `${base}ticketova/tickets/qr-demo.svg`;
