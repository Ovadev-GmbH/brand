import type { Pkg } from "../types";
import { PageHeader, SectionHeader } from "../components/PageHeader";
import {
  appleLogo, passAsset, passColours, passesReadme, passFields, passTenants, qrUrl, ticketNumber,
  walletButtons, walletButtonUrl, type PassKind, type PassTenant,
} from "../lib/tickets";
import "../styles/tickets.css";

const kinds: PassKind[] = ["day", "season"];

/* The passes drawn the way each wallet lays them out, from the same assets
   the passes carry. A drawing, not a screenshot: the phone sets the final
   type and spacing. */
function ApplePass({ tenant, kind }: { tenant: PassTenant; kind: PassKind }) {
  const c = passColours(tenant, kind);
  const f = passFields[kind];
  return <figure className="tk-apple" style={{ background: c.background, color: c.text }}>
    <div className="tk-apple-top">
      <img className="tk-apple-logo" src={appleLogo(tenant, kind)} alt="" />
      <div className="tk-field tk-right"><span style={{ color: c.label }}>{f.header.label}</span>{f.header.value}</div>
    </div>
    <img className="tk-apple-strip" src={passAsset(tenant, "apple/strip@2x.png")} alt="" />
    <div className="tk-row">{f.secondary.map((s, i) =>
      <div key={s.label} className={`tk-field${i ? " tk-right" : ""}`}><span style={{ color: c.label }}>{s.label}</span>{s.value}</div>)}</div>
    <div className="tk-apple-code"><img src={qrUrl} alt="" /><span>{ticketNumber}</span></div>
  </figure>;
}

function GooglePass({ tenant, kind }: { tenant: PassTenant; kind: PassKind }) {
  const c = passColours(tenant, kind);
  const f = passFields[kind];
  return <figure className="tk-google" style={{ background: c.background, color: c.text }}>
    <div className="tk-google-top"><img src={passAsset(tenant, "google/logo.png")} alt="" /><span>TICKETOVA</span></div>
    <p className="tk-google-title">{f.title} {tenant.place}</p>
    {(kind === "day" ? [[f.header, ...f.secondary]] : [[f.header], f.secondary]).map((row, i) =>
      <div key={i} className="tk-row">{row.map(s => <div key={s.label} className="tk-field"><span>{s.label}</span>{s.value}</div>)}</div>)}
    <div className="tk-google-code"><img src={qrUrl} alt="" /><span>{ticketNumber}</span></div>
    <img className="tk-google-hero" src={passAsset(tenant, "google/hero.jpg")} alt="" />
  </figure>;
}

function Passes({ wallet }: { wallet: "apple" | "google" }) {
  const Pass = wallet === "apple" ? ApplePass : GooglePass;
  return <div className="tk-grid">{passTenants.flatMap(tenant => kinds.map(kind =>
    <div key={`${tenant.slug}-${kind}`} className="tk-cell">
      <Pass tenant={tenant} kind={kind} />
      <p className="tk-caption">{passFields[kind].title} <span>·</span> {tenant.name}</p>
    </div>))}</div>;
}

export function TicketsPage({ pkg }: { pkg: Pkg }) {
  return <article className="tickets">
    <PageHeader title="Tickets" md={passesReadme}>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-900">Every {pkg.name} ticket as an Apple Wallet and a Google Wallet pass. One layout for every tenant: the day ticket is black, the season ticket wears the tenant's brand colour, and the tenant brings its own logo and photograph.</p>
    </PageHeader>
    <SectionHeader title="Apple Wallet" count={4} />
    <Passes wallet="apple" />
    <SectionHeader title="Google Wallet" count={4} />
    <Passes wallet="google" />
    <SectionHeader title="Add to Wallet" count={walletButtons.length} />
    <div className="tk-badges">{walletButtons.map(b =>
      <a key={b.file} href={walletButtonUrl(b.file)} download={b.file} title={`Download ${b.name}`}><img src={walletButtonUrl(b.file)} alt={b.name} /></a>)}</div>
    <p className="tk-note">Türlersee and Mettmenstetten are examples: one dark and one light brand colour. Fields, sizes and the rules for the buttons are in the <a href={passesReadme}>README</a>.</p>
  </article>;
}
