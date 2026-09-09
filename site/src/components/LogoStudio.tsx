/* The brand's marks, and a way to take them away.
 *
 * One card per mark: the drawing as it actually is, and a download in the
 * format you need. There are no variants to choose — a mark that ships in its
 * own colours is shown in them, and one that doesn't paints itself in
 * currentColor, so it takes the page's ink. */

import * as React from "react";
import type { Mark } from "../brands";

const SIZES = [128, 256, 512, 1024, 2048];
const FORMATS = ["svg", "png", "webp"] as const;
type Format = (typeof FORMATS)[number];

/** A filename appended to this base is the asset's URL. */
const CDN_BASE = "https://cdn.intern.ova.dev/conventions/imagery/";

/* ── drawing ───────────────────────────────────────────────────────────── */

/** The page can let a currentColor mark follow the page's ink; a file cannot,
 *  so what leaves here is set in ink. */
const inkFor = (svg: string) =>
  svg.replace(/<svg([^>]*?)>/, (_m, a: string) => `<svg${a.replace(/\scolor="[^"]*"/g, "")} color="#000000">`);

function sizeOf(svg: string): { W: number; H: number } {
  const m = /viewBox="([\d.\s-]+)"/.exec(svg);
  if (!m?.[1]) return { W: 1000, H: 1000 };
  const p = m[1].trim().split(/\s+/).map(Number);
  return { W: p[2] || 1000, H: p[3] || 1000 };
}

async function rasterize(svg: string, W: number, H: number, outW: number, mime: string): Promise<Blob> {
  const outH = Math.round((outW * H) / W);
  const sized = svg.replace(/<svg([^>]*?)>/, (_m, a: string) => `<svg width="${outW}" height="${outH}"${a}>`);
  const url = URL.createObjectURL(new Blob([sized], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const img = new Image();
    await new Promise<void>((res, rej) => {
      img.onload = () => res();
      img.onerror = () => rej(new Error("svg load failed"));
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    canvas.getContext("2d")!.drawImage(img, 0, 0, outW, outH);
    return await new Promise<Blob>((res) => canvas.toBlob((b) => res(b!), mime));
  } finally {
    URL.revokeObjectURL(url);
  }
}

function save(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ── one mark ──────────────────────────────────────────────────────────── */

export function AssetCard({ mark }: { mark: Mark }) {
  const file = mark.colour ?? mark.file;
  const [raw, setRaw] = React.useState<string | null>(null);
  const [px, setPx] = React.useState(512);
  const [format, setFormat] = React.useState<Format>("svg");
  const [busy, setBusy] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    let alive = true;
    fetch(`${import.meta.env.BASE_URL}brand/${file}.svg`)
      .then((r) => r.text())
      .then((t) => alive && setRaw(t))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [file]);

  // The SVG fills the stage and scales through its own viewBox.
  const preview = raw?.replace(/<svg([^>]*?)>/, (_m, a: string) => `<svg width="100%" height="100%"${a}>`);
  const filename = `${file}${format === "svg" ? "" : `-${px}`}.${format}`;

  async function download() {
    if (!raw || busy) return;
    const ink = inkFor(raw);
    if (format === "svg") {
      save(new Blob([ink], { type: "image/svg+xml;charset=utf-8" }), filename);
      return;
    }
    setBusy(true);
    try {
      const { W, H } = sizeOf(ink);
      save(await rasterize(ink, W, H, Math.round((px * W) / H), `image/${format}`), filename);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex h-full flex-col gap-6 p-8">
      <div className="flex h-40 items-center justify-center overflow-hidden rounded-brand bg-checker p-5 text-gray-1000">
        {preview ? (
          <div className="h-full w-full [&>svg]:h-full [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: preview }} />
        ) : null}
      </div>

      <div>
        <p className="text-base font-semibold text-gray-1000">{mark.name}</p>
        {mark.note ? <p className="mt-0.5 text-sm text-gray-900">{mark.note}</p> : null}
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div
            className="grid flex-1 gap-0.5 rounded-brand bg-bg-200 p-0.5 shadow-border"
            style={{ gridTemplateColumns: `repeat(${FORMATS.length}, minmax(0, 1fr))` }}
          >
            {FORMATS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={format === f}
                className={`h-7 cursor-pointer rounded-brand border-0 font-mono text-[11px] ${
                  format === f ? "bg-bg-100 text-gray-1000 shadow-border" : "bg-transparent text-gray-900 hover:text-gray-1000"
                }`}
                onClick={() => setFormat(f)}
              >
                {f}
              </button>
            ))}
          </div>
          {format === "svg" ? (
            <p className="w-24 text-right text-[13px] text-gray-700" title="An SVG scales — it has no fixed size">
              Scalable
            </p>
          ) : (
            <select
              className="h-8 w-24 cursor-pointer rounded-brand border-0 bg-bg-200 px-2 font-mono text-[11px] text-gray-1000 shadow-border"
              value={px}
              aria-label="Pixel height"
              onChange={(e) => setPx(Number(e.target.value))}
            >
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s} px
                </option>
              ))}
            </select>
          )}
        </div>

        <button
          type="button"
          className="h-9 w-full cursor-pointer rounded-brand border-0 bg-gray-1000 text-sm font-medium text-bg-100 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={download}
          disabled={busy || !raw}
        >
          {busy ? "Rendering…" : `Download ${format.toUpperCase()}`}
        </button>

        <div className="flex items-start justify-between gap-3">
          <code className="min-w-0 font-mono text-[11px] leading-4 break-all text-gray-700">{filename}</code>
          <button
            type="button"
            className="shrink-0 cursor-pointer border-0 bg-transparent text-[11px] whitespace-nowrap text-gray-900 underline underline-offset-2 hover:text-gray-1000"
            title={`${CDN_BASE}${filename}`}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(`${CDN_BASE}${filename}`);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              } catch {
                /* clipboard blocked — nothing to do */
              }
            }}
          >
            {copied ? "Copied" : "CDN link"}
          </button>
        </div>
      </div>
    </div>
  );
}

/** The cards, as cells of the hairline grid the page puts them in. */
