/* The logo studio, the same one the conventions site runs at
   conventions.intern.ova.dev/logo, here inside the brand it belongs to.
 *
 * One card per mark. The artwork on disk is black on nothing; everything else
 * — the colour, the background, the padding, the corner — is composed in the
 * browser out of that one file, which is why there is no variant to keep in
 * sync. What you download is what the card shows, and its filename is the
 * naming scheme read straight off the switches:
 *
 *   {O|T|J}_IMG_{LGO|ICO}_{C-…}_{BG-…}_{P-…}_{R-…}[_PX-…].{svg|png|webp}
 */

import * as React from "react";
import type { Mark } from "../brands";
import { Cell } from "./Grid";

/* ── the scheme ────────────────────────────────────────────────────────── */

/** Padding, as a factor of the mark's *shorter* side, so a wide logo and a
 *  square icon get visually equal breathing room. */
const PADS = [
  { name: "P-0", f: 0 },
  { name: "P-1", f: 0.13 },
  { name: "P-2", f: 0.26 },
];

/** Rounding is a toggle. How much R-1 rounds depends on the padding: only full
 *  padding (P-2) gives the circle-on-a-square badge; with less, it stays subtle
 *  so the corner never clips the mark. */
const RADII = [
  { name: "R-0", f: 0 },
  { name: "R-1", f: 0.12 },
];

const radiusOf = (rad: number, pad: number) => (rad === 0 ? 0 : at(PADS, pad).name === "P-2" ? 0.5 : 0.12);

type Tone = { name: string; value: string; light: boolean };
const FG: Tone[] = [
  { name: "C-DRK", value: "#000000", light: false },
  { name: "C-WHT", value: "#ffffff", light: true },
];
const BG: Tone[] = [
  { name: "BG-NON", value: "transparent", light: true },
  { name: "BG-DRK", value: "#000000", light: false },
  { name: "BG-WHT", value: "#ffffff", light: true },
];

const SIZES = [128, 256, 512, 1024, 2048];

/** These lists are never empty and the index always comes from a click on one
 *  of their own buttons; the fallback is only there to keep the type honest. */
const at = <T,>(xs: readonly T[], i: number): T => xs[i] ?? xs[0]!;
const FORMATS = ["svg", "png", "webp"] as const;
type Format = (typeof FORMATS)[number];

/** A filename appended to this base is the asset's URL. */
const CDN_BASE = "https://cdn.intern.ova.dev/conventions/imagery/";

/* ── drawing ───────────────────────────────────────────────────────────── */

/** Every mark in public/brand paints itself in currentColor, so setting the
 *  colour on the root is the whole of recolouring — no fill in the artwork has
 *  to be found and rewritten. */
const recolor = (svg: string, color: string) =>
  svg.replace(/<svg([^>]*?)>/, (_m, a: string) => `<svg${a.replace(/\scolor="[^"]*"/g, "")} color="${color}">`);

function viewBoxRatio(svg: string): number {
  const m = /viewBox="([\d.\s-]+)"/.exec(svg);
  if (!m?.[1]) return 1;
  const p = m[1].trim().split(/\s+/).map(Number);
  return (p[3] || 1) / (p[2] || 1);
}

/** Frame the artwork: optional rounded ground, padding, the mark nested in. */
function composite(inner: string, opts: { bg: string; padF: number; radF: number }) {
  const ratio = viewBoxRatio(inner);
  const W = 1000;
  const pad = Math.round(opts.padF * W * Math.min(1, ratio));
  const innerW = W - 2 * pad;
  const innerH = Math.round(innerW * ratio);
  const H = innerH + 2 * pad;
  const rr = opts.radF >= 0.5 ? Math.min(W, H) / 2 : Math.round(opts.radF * Math.min(W, H));
  const art = inner.replace(/<svg([^>]*?)>/, (_m, attrs: string) => {
    const cleaned = attrs.replace(/\s(width|height|x|y)="[^"]*"/g, "");
    return `<svg${cleaned} x="${pad}" y="${pad}" width="${innerW}" height="${innerH}">`;
  });
  const ground =
    opts.bg && opts.bg !== "transparent"
      ? `<rect x="0" y="0" width="${W}" height="${H}" rx="${rr}" ry="${rr}" fill="${opts.bg}"/>`
      : "";
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${ground}${art}</svg>`, W, H };
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

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ── controls ──────────────────────────────────────────────────────────── */

/** A labelled row of choices. The buttons split the width evenly, so the four
 *  controls line up as a form rather than reading as four different widths. */
function Field({
  label,
  options,
  index,
  onPick,
  off,
}: {
  label: string;
  options: { name: string }[];
  index: number;
  onPick: (i: number) => void;
  off?: (i: number) => boolean;
}) {
  return (
    <div>
      <span className="mb-1.5 block text-[11px] tracking-wide text-gray-700 uppercase">{label}</span>
      <div
        className="grid gap-0.5 rounded-brand bg-bg-200 p-0.5 shadow-border"
        style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
      >
        {options.map((o, i) => {
          const disabled = off?.(i) ?? false;
          return (
            <button
              key={o.name}
              type="button"
              disabled={disabled}
              aria-pressed={index === i}
              className={`h-7 cursor-pointer rounded-brand border-0 font-mono text-[11px] ${
                index === i
                  ? "bg-bg-100 text-gray-1000 shadow-border"
                  : disabled
                    ? "cursor-not-allowed bg-transparent text-gray-500"
                    : "bg-transparent text-gray-900 hover:text-gray-1000"
              }`}
              onClick={() => !disabled && onPick(i)}
            >
              {o.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── one mark ──────────────────────────────────────────────────────────── */

function AssetCard({ letter, mark }: { letter: string; mark: Mark }) {
  const [raw, setRaw] = React.useState<string | null>(null);
  const [fg, setFg] = React.useState(0);
  const [bg, setBg] = React.useState(0);
  const [pad, setPad] = React.useState(0);
  const [rad, setRad] = React.useState(0);
  const [px, setPx] = React.useState(512);
  const [format, setFormat] = React.useState<Format>("svg");
  const [busy, setBusy] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    let alive = true;
    fetch(`${import.meta.env.BASE_URL}brand/${mark.file}.svg`)
      .then((r) => r.text())
      .then((t) => alive && setRaw(t))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [mark.file]);

  const ground = at(BG, bg).value;
  const hasBg = ground !== "transparent";

  /* The background is the main switch: padding and corners only mean anything
     once there is a shape to pad and round. An icon wants the app-icon look,
     a logo stays square. */
  React.useEffect(() => {
    if (!hasBg) {
      setPad(0);
      setRad(0);
      return;
    }
    if (mark.kind === "icon") {
      setPad((p) => (p === 0 ? 2 : p));
      setRad((r) => (r === 0 ? 1 : r));
    } else {
      setPad((p) => (p === 0 ? 1 : p));
    }
    setFg((f) => (at(FG, f).value === ground ? (f === 0 ? 1 : 0) : f));
  }, [hasBg, ground, mark.kind]);

  const comp = React.useMemo(
    () =>
      raw
        ? composite(recolor(raw, at(FG, fg).value), { bg: ground, padF: at(PADS, pad).f, radF: radiusOf(rad, pad) })
        : null,
    [raw, fg, ground, pad, rad],
  );

  // The SVG fills the stage and scales itself through its viewBox, so the card
  // never resizes when padding is added or taken away.
  const preview = comp?.svg.replace(/<svg([^>]*?)>/, (_m, a: string) => `<svg width="100%" height="100%"${a}>`);

  const name = [
    letter,
    "IMG",
    mark.kind === "logo" ? "LGO" : "ICO",
    at(FG, fg).name,
    at(BG, bg).name,
    at(PADS, pad).name,
    at(RADII, rad).name,
  ].join("_");
  const filename = `${name}${format === "svg" ? "" : `_PX-${px}`}.${format}`;

  // A logo stops at normal padding; only an icon gets the full badge.
  const pads = mark.kind === "logo" ? PADS.slice(0, 2) : PADS;
  // The checkerboard darkens whenever what sits on it is light, so a white
  // mark on nothing stays visible.
  const checkerDark = ground === "#ffffff" || (!hasBg && at(FG, fg).light);

  async function save() {
    if (!comp || busy) return;
    if (format === "svg") {
      download(new Blob([comp.svg], { type: "image/svg+xml;charset=utf-8" }), filename);
      return;
    }
    setBusy(true);
    try {
      const outW = Math.round((px * comp.W) / comp.H);
      download(await rasterize(comp.svg, comp.W, comp.H, outW, `image/${format}`), filename);
    } finally {
      setBusy(false);
    }
  }

  async function copyCdn() {
    try {
      await navigator.clipboard.writeText(`${CDN_BASE}${filename}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — nothing to do */
    }
  }

  return (
    <div className="flex h-full flex-col gap-6 p-8">
      <div
        className={`flex h-40 items-center justify-center overflow-hidden rounded-brand p-5 ${
          checkerDark ? "bg-checker-dark" : "bg-checker"
        }`}
      >
        {preview ? (
          <div className="h-full w-full [&>svg]:h-full [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: preview }} />
        ) : null}
      </div>

      <div>
        <p className="text-base font-semibold text-gray-1000">{mark.name}</p>
        {mark.note ? <p className="mt-0.5 text-sm text-gray-900">{mark.note}</p> : null}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        <Field label="Background" options={BG} index={bg} onPick={setBg} />
        <Field label="Colour" options={FG} index={fg} onPick={setFg} off={(i) => hasBg && at(FG, i).value === ground} />
        <Field label="Padding" options={pads} index={pad} onPick={setPad} off={(i) => (hasBg ? i === 0 : i !== 0)} />
        <Field label="Corners" options={RADII} index={rad} onPick={setRad} off={(i) => !hasBg && i !== 0} />
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-x-4">
          <Field label="Format" options={FORMATS.map((f) => ({ name: f }))} index={FORMATS.indexOf(format)} onPick={(i) => setFormat(at([...FORMATS], i))} />
          <div>
            <span className="mb-1.5 block text-[11px] tracking-wide text-gray-700 uppercase">Size</span>
            {format === "svg" ? (
              <p className="flex h-8 items-center text-[13px] text-gray-700" title="An SVG scales — it has no fixed size">
                Scalable
              </p>
            ) : (
              <select
                className="h-8 w-full cursor-pointer rounded-brand border-0 bg-bg-200 px-2 font-mono text-[11px] text-gray-1000 shadow-border"
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
        </div>

        <button
          type="button"
          className="h-9 w-full cursor-pointer rounded-brand border-0 bg-gray-1000 text-sm font-medium text-bg-100 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={save}
          disabled={busy || !comp}
        >
          {busy ? "Rendering…" : `Download ${format.toUpperCase()}`}
        </button>

        {/* The filename is the point of the tool, so it is readable and
            selectable rather than hidden inside the button. */}
        <div className="flex items-start justify-between gap-3">
          <code className="min-w-0 font-mono text-[11px] leading-4 break-all text-gray-700">{filename}</code>
          <button
            type="button"
            className="shrink-0 cursor-pointer border-0 bg-transparent text-[11px] whitespace-nowrap text-gray-900 underline underline-offset-2 hover:text-gray-1000"
            title={`${CDN_BASE}${filename}`}
            onClick={copyCdn}
          >
            {copied ? "Copied" : "CDN link"}
          </button>
        </div>
      </div>
    </div>
  );
}

/** The cards, as cells of the hairline grid the page puts them in. */
export function LogoStudio({ letter, marks }: { letter: string; marks: Mark[] }) {
  return (
    <>
      {marks.map((m) => (
        <Cell key={`${m.file}-${m.kind}`}>
          <AssetCard letter={letter} mark={m} />
        </Cell>
      ))}
    </>
  );
}
