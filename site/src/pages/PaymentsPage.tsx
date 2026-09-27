import { useRef, useState } from "react";
import { ArrowDownToLine, Copy, Search, X } from "lucide-react";
import { toast } from "sonner";
import type { Pkg } from "../types";
import { PageHeader, SectionHeader } from "../components/PageHeader";
import { paymentCount, paymentGroups, paymentReadme, paymentUrl } from "../lib/payments";
import "../styles/asset-library.css";
import "../styles/payments.css";

/* The payment methods a checkout accepts, as tiles of one shape, so a row
   of them lines up at any size. */
export function PaymentsPage({ pkg }: { pkg: Pkg }) {
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const q = query.trim().toLowerCase();
  const groups = paymentGroups
    .map(g => ({ ...g, logos: g.logos.filter(l => `${l.name} ${l.file}`.toLowerCase().includes(q)) }))
    .filter(g => g.logos.length);
  async function copy(file: string) {
    try { await navigator.clipboard.writeText(new URL(paymentUrl(file), location.href).href); toast.success("Asset URL copied"); }
    catch { toast.error("Couldn't copy the URL. Open the file to copy its address."); }
  }
  return <article className="asset-library">
    <PageHeader title="Payments" md={paymentReadme}>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-900">The payment methods a {pkg.name} checkout accepts, as tiles of one shape: 120 × 80, so cards, wallets and local methods line up in a row. Show them at a fixed height, unaltered, and only to name the method.</p>
      <div className="al-summary">Payment methods<span>{paymentCount} assets</span><span>SVG</span></div>
    </PageHeader>
    <div className="al-tools">
      <div className="al-search" role="search">
        <Search size={16} aria-hidden="true" />
        <input ref={searchInput} type="search" aria-label="Search payment methods" placeholder="Search payment methods…" autoComplete="off" spellCheck={false} value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => { if (e.key === "Escape") setQuery(""); }} />
        <button type="button" className="al-search-clear" aria-label="Clear search" disabled={!query} onClick={() => { setQuery(""); searchInput.current?.focus(); }}><X size={16} aria-hidden="true" /></button>
      </div>
    </div>
    {groups.length ? groups.map(g => <section key={g.id}>
      <SectionHeader title={g.title} count={g.logos.length} />
      <div className="pm-grid">{g.logos.map(logo => <div className="pm-card" key={logo.file}>
        <div className="pm-tile">
          <a href={paymentUrl(logo.file)} target="_blank" rel="noreferrer" aria-label={`Open ${logo.name}`}><img src={paymentUrl(logo.file)} alt={logo.name} loading="lazy" /></a>
          <span className="pm-tools">
            <button onClick={() => copy(logo.file)} aria-label={`Copy URL of ${logo.name}`} title="Copy URL"><Copy size={14} /></button>
            <a href={paymentUrl(logo.file)} download={logo.file.split("/").pop()} aria-label={`Download ${logo.name}`} title="Download"><ArrowDownToLine size={14} /></a>
          </span>
        </div>
        <p className="pm-name">{logo.name}</p>
      </div>)}</div>
    </section>) : <div className="al-empty">No payment method matches “{query}”.<button onClick={() => setQuery("")}>Clear search</button></div>}
    <p className="al-note">Tiles from datatrans/payment-logos by Datatrans AG, CC BY-SA 4.0, copied unchanged. The logos are trademarks of their owners.</p>
  </article>;
}
