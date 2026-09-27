import { ArrowDownToLine, Copy } from "lucide-react";
import { toast } from "sonner";
import type { Pkg } from "../types";
import { PageHeader } from "../components/PageHeader";
import { devices, deviceUrl } from "../lib/devices";
import "../styles/asset-library.css";

/* The devices tenants rent or buy from us, as drawings: so a dashboard can
   show the till, the handheld and the entry column people actually have,
   not only their names. */
export function HardwarePage({ pkg }: { pkg: Pkg }) {
  async function copy(file: string) {
    try { await navigator.clipboard.writeText(new URL(deviceUrl(file), location.href).href); toast.success("Asset URL copied"); }
    catch { toast.error("Couldn't copy the URL. Open the file to copy its address."); }
  }
  return <article className="asset-library">
    <PageHeader title="Hardware">
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-900">The devices {pkg.name} customers run on, drawn in the house style. Use them wherever a screen lists hardware, so people recognise the device in front of them.</p>
      <div className="al-summary">Devices<span>{devices.length} assets</span><span>SVG</span></div>
    </PageHeader>
    <div className="al-grid mt-10">{devices.map(device => <section className="al-card" key={device.file}>
      <a className="al-preview al-light" href={deviceUrl(device.file)} target="_blank" rel="noreferrer" aria-label={`Open ${device.name}`}>
        <span className="al-format">SVG</span>
        <img src={deviceUrl(device.file)} alt={device.name} loading="lazy" />
      </a>
      <div className="al-card-info">
        <div>
          <p className="al-title">{device.name}</p>
          <p>{device.kind} <span>·</span> {(device.bytes / 1024).toFixed(1)} KB</p>
        </div>
        <span style={{ display: "flex", gap: 4 }}>
          <button className="al-download" onClick={() => copy(device.file)} aria-label={`Copy URL of ${device.name}`}><Copy size={16} /></button>
          <a className="al-download" href={deviceUrl(device.file)} download={device.file} aria-label={`Download ${device.name}`}><ArrowDownToLine size={16} /></a>
        </span>
      </div>
    </section>)}</div>
    <p className="al-note">{devices.map(d => `${d.name}: ${d.description}`).join(" ")}</p>
  </article>;
}
