/* The brand's favicon, and the whole bundle a site needs.
 *
 * Every file is the brand's icon as it ships — its colour drawing, the one
 * the Icon card shows — never a recoloured badge. The tab sizes are that
 * drawing on transparent. The home-screen sizes (Apple touch icon, PWA
 * icons) are the brand's app cut where it has one, and otherwise the drawing
 * on a full square of its own ground: iOS and Android fill anything
 * transparent with a colour of their own choosing. Everything is drawn in
 * the browser from public/brand, so there is nothing to keep in sync. */

import * as React from "react";
import type { Mark } from "../brands";
import { badge, inked, rasterize, save, sizeOf } from "./LogoStudio";
import { buildIco, zipStore, type ZipFile } from "../lib/bundle";

const FAVICON_PX = [16, 32, 48, 64, 96, 128, 256] as const;
const PWA_PX = [192, 512, 1024] as const;
const APPLE_PX = 180;

/** Every file the bundle ships, in the order it is built. */
const FILES = [
  "icon.svg",
  ...FAVICON_PX.map((s) => `favicon-${s}x${s}.png`),
  "favicon.ico",
  "apple-touch-icon.png",
  ...PWA_PX.map((s) => `icon-${s}.png`),
];

function mimeFor(name: string): string {
  if (name.endsWith(".svg")) return "image/svg+xml";
  if (name.endsWith(".ico")) return "image/x-icon";
  return "image/png";
}

async function pngBytes(svg: string, size: number): Promise<Uint8Array> {
  const { W, H } = sizeOf(svg);
  return new Uint8Array(await (await rasterize(svg, W, H, size, "image/png")).arrayBuffer());
}

const fetchSvg = (file: string) => fetch(`${import.meta.env.BASE_URL}brand/${file}.svg`).then((r) => r.text());

/** The drawing fills its box and scales through its own viewBox. */
const fill = (svg: string) =>
  svg.replace(/<svg([^>]*?)>/, (_m, a: string) => `<svg${a.replace(/\s(width|height)="[^"]*"/g, "")} width="100%" height="100%">`);

export function FaviconStudio({ mark, brand }: { mark: Mark; brand: string }) {
  const [art, setArt] = React.useState<{ tab: string; app: string } | null>(null);
  const [busy, setBusy] = React.useState(false);
  const files = React.useRef<ZipFile[] | null>(null);

  React.useEffect(() => {
    let alive = true;
    files.current = null;
    setArt(null);
    Promise.all([fetchSvg(mark.colour ?? mark.file), mark.app ? fetchSvg(mark.app) : null])
      .then(([raw, app]) => {
        // A currentColor drawing leaves here set in ink, as the mark downloads do.
        const tab = inked(raw, "#000000");
        if (alive) setArt({ tab, app: app ?? badge(tab, { bg: mark.ground ?? "#ffffff", padF: 0, radF: 0 }).svg });
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [mark.file, mark.colour, mark.app, mark.ground]);

  async function build(): Promise<ZipFile[]> {
    if (files.current) return files.current;
    const { tab, app } = art!;
    const out: ZipFile[] = [{ name: "icon.svg", data: new TextEncoder().encode(tab) }];
    const ico: { size: number; png: Uint8Array }[] = [];
    for (const s of FAVICON_PX) {
      const png = await pngBytes(tab, s);
      out.push({ name: `favicon-${s}x${s}.png`, data: png });
      if (s <= 48) ico.push({ size: s, png });
    }
    out.push({ name: "favicon.ico", data: buildIco(ico) });
    out.push({ name: "apple-touch-icon.png", data: await pngBytes(app, APPLE_PX) });
    for (const s of PWA_PX) out.push({ name: `icon-${s}.png`, data: await pngBytes(app, s) });
    files.current = out;
    return out;
  }

  async function run(fn: (all: ZipFile[]) => void) {
    if (!art || busy) return;
    setBusy(true);
    try {
      fn(await build());
    } finally {
      setBusy(false);
    }
  }

  const downloadOne = (name: string) =>
    run((all) => {
      const f = all.find((x) => x.name === name);
      if (f) save(new Blob([f.data as BlobPart], { type: mimeFor(name) }), name);
    });
  const downloadAll = () => run((all) => save(zipStore(all), `${brand}-favicon-bundle.zip`));

  return (
    <div className="grid md:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="flex min-h-64 items-end justify-center gap-12 border-b border-alpha-400 bg-checker p-8 md:border-r md:border-b-0">
        {art ? (
          <>
            <Tile label="Tab">
              <div className="size-16 [&>svg]:block [&>svg]:size-full" dangerouslySetInnerHTML={{ __html: fill(art.tab) }} />
            </Tile>
            <Tile label="Home screen">
              <div className="size-28 overflow-hidden rounded-[22%] [&>svg]:block [&>svg]:size-full" dangerouslySetInnerHTML={{ __html: fill(art.app) }} />
            </Tile>
          </>
        ) : null}
      </div>

      <div className="flex flex-col gap-6 p-8">
        <div>
          <p className="text-base font-semibold text-gray-1000">Favicon</p>
          <p className="mt-0.5 text-sm text-gray-900">
            The icon as it ships: on transparent in a tab, on a full square of its ground on a home screen.
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <button
            type="button"
            className="h-9 w-full cursor-pointer rounded-brand border-0 bg-bg-200 text-sm font-medium text-gray-1000 shadow-border hover:bg-alpha-100 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => downloadOne("favicon.ico")}
            disabled={busy || !art}
          >
            favicon.ico
          </button>
          <button
            type="button"
            className="h-9 w-full cursor-pointer rounded-brand border-0 bg-gray-1000 text-sm font-medium text-bg-100 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={downloadAll}
            disabled={busy || !art}
          >
            {busy ? "Rendering…" : `Download bundle · ${FILES.length} files`}
          </button>
        </div>
      </div>

      <div className="col-span-full border-t border-alpha-400 p-8">
        <ul className="m-0 list-none p-0 md:columns-2 md:gap-8">
          {FILES.map((n) => (
            <li key={n} className="break-inside-avoid">
              <button
                type="button"
                className="flex h-7 w-full cursor-pointer items-center justify-between gap-3 rounded-brand border-0 bg-transparent px-2 text-left hover:bg-alpha-100 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => downloadOne(n)}
                disabled={busy || !art}
              >
                <code className="truncate font-mono text-[11px] text-gray-900">{n}</code>
                <span className="shrink-0 text-[11px] text-gray-700">↓</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Tile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      {children}
      <figcaption className="font-mono text-[11px] text-gray-700">{label}</figcaption>
    </figure>
  );
}
