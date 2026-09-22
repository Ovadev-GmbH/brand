import { useRef, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Copy, Search, X } from "lucide-react";
import { toast } from "sonner";
import type { Pkg } from "../types";
import { PageHeader } from "../components/PageHeader";
import { illustrations, illustrationUrl } from "../lib/illustrations";
import "../styles/asset-library.css";

type Asset = (typeof illustrations)[number];
const categories = ["All", "Product", "Municipalities", "Brand"];
const size = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB`;
const format = (asset: Asset) => asset.file.split(".").pop()!.toUpperCase();

export function AssetLibraryPage({ pkg }: { pkg: Pkg }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [background, setBackground] = useState("light");
  const [selected, setSelected] = useState<Asset | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const assets = illustrations.filter(a => (category === "All" || a.category === category) &&
    `${a.title} ${a.file} ${a.description} ${a.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  function open(asset: Asset) { setSelected(asset); dialog.current?.showModal(); }
  async function copy(asset: Asset) {
    try { await navigator.clipboard.writeText(new URL(illustrationUrl(asset.file), location.href).href); toast.success("Asset URL copied"); }
    catch { toast.error("Couldn't copy the URL. Open the original to copy its address."); }
  }
  return <article className="asset-library">
    <PageHeader title="Asset Library">
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-900">The visual side of {pkg.name}. A home for our illustrations — find a motif, take a closer look and download the original.</p>
      <div className="al-summary"><span className="al-dot" />Illustrations<span>{illustrations.length} assets</span><span>SVG</span></div>
    </PageHeader>
    <div className="al-tools">
      <div className="al-search" role="search">
        <Search size={16} aria-hidden="true" />
        <input ref={searchInput} type="search" aria-label="Search illustrations" placeholder="Search illustrations…" autoComplete="off" spellCheck={false} value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => { if (e.key === "Escape") setQuery(""); }} />
        <button type="button" className="al-search-clear" aria-label="Clear search" disabled={!query} onClick={() => { setQuery(""); searchInput.current?.focus(); }}><X size={16} aria-hidden="true" /></button>
      </div>
    </div>
    <div className="al-filters"><div className="al-tabs" aria-label="Categories">{categories.map(c => <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}<span>{c === "All" ? illustrations.length : illustrations.filter(a => a.category === c).length}</span></button>)}</div>
      <div className="al-backgrounds" aria-label="Preview background">{["light", "dark", "grid"].map(bg => <button key={bg} className={`al-swatch al-${bg}`} aria-label={`${bg} background`} aria-pressed={background === bg} onClick={() => setBackground(bg)} />)}</div>
    </div>
    <div className="al-result-count" aria-live="polite">{assets.length} illustration{assets.length !== 1 ? "s" : ""}</div>
    <div className="al-grid">{assets.map(asset => <section className="al-card" key={asset.file}>
      <button className={`al-preview al-${background}`} onClick={() => open(asset)} aria-label={`Preview ${asset.title}`}><span className="al-format">{format(asset)}</span><img src={illustrationUrl(asset.file)} alt={asset.title} loading="lazy" /><span className="al-expand"><ArrowUpRight size={16} /></span></button>
      <div className="al-card-info"><div><button className="al-title" onClick={() => open(asset)}>{asset.title}</button><p>{asset.category} <span>·</span> {size(asset.bytes)}</p></div><a className="al-download" href={illustrationUrl(asset.file)} download={asset.file} aria-label={`Download ${asset.title}`}><ArrowDownToLine size={16} /></a></div>
    </section>)}</div>
    {!assets.length && <div className="al-empty"><Search size={24} /><h2>No illustrations found</h2><p>Try another search or reset your filters.</p><button onClick={() => {setQuery(""); setCategory("All");}}>Reset filters</button></div>}
    <p className="al-note">Scalable SVG illustrations with black contours and shapes on a fully transparent background.</p>
    <dialog ref={dialog} aria-label={selected ? `${selected.title} illustration` : "Illustration preview"} className="al-dialog" onClick={e => {if (e.target === e.currentTarget) dialog.current?.close();}}>
      {selected && <><div className="al-dialog-head"><span>ILLUSTRATION / {selected.category.toUpperCase()}</span><button autoFocus aria-label="Close preview" onClick={() => dialog.current?.close()}><X size={20} /></button></div>
        <div className={`al-detail-preview al-${background}`}><img src={illustrationUrl(selected.file)} alt={selected.title} /></div>
        <div className="al-detail-info"><h2>{selected.title}</h2><p>{selected.description}</p><div className="al-file-meta"><span>{selected.file}</span><span>{format(selected)} · {size(selected.bytes)}</span></div><p className="al-source">Source: <code>{selected.source}</code></p><div className="al-actions"><a className="al-primary" href={illustrationUrl(selected.file)} download={selected.file}><ArrowDownToLine size={16} />Download original</a><button onClick={() => copy(selected)}><Copy size={16} />Copy URL</button><a href={illustrationUrl(selected.file)} target="_blank" rel="noreferrer">Open original<ArrowUpRight size={16} /></a></div></div></>}
    </dialog>
  </article>;
}
