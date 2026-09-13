/* The brand's favicon, and the whole bundle a site needs.
 *
 * House rule: a favicon is always the icon on its badge — full padding, fully
 * rounded — never the bare mark. The dark badge is the standard; the light
 * one ships beside it as the optional variant. Everything is drawn from the
 * brand's own icon in the browser, so there is nothing to keep in sync. */

import * as React from "react";
import type { Mark } from "../brands";
import { badge, inked, rasterize, save } from "./LogoStudio";
import { buildIco, zipStore, type ZipFile } from "../lib/bundle";

const TONES = [
  { name: "Dark badge", role: "the standard", ink: "#ffffff", ground: "#000000", suffix: "" },
  { name: "Light badge", role: "optional", ink: "#000000", ground: "#ffffff", suffix: "-light" },
] as const;
const FAVICON_PX = [16, 32, 48, 64, 96, 128, 256] as const;
const PWA_PX = [192, 512, 1024] as const;
const APPLE_PX = 180;
const PAD = 0.26;

/** Every file the bundle ships for one tone, in the order it is built. */
function fileNames(sfx: string): string[] {
  return [
    `icon${sfx}.svg`,
    ...FAVICON_PX.map((s) => `favicon-${s}x${s}${sfx}.png`),
    `favicon${sfx}.ico`,
    `apple-touch-icon${sfx}.png`,
    ...PWA_PX.map((s) => `icon-${s}${sfx}.png`),
  ];
}

function mimeFor(name: string): string {
  if (name.endsWith(".svg")) return "image/svg+xml";
  if (name.endsWith(".ico")) return "image/x-icon";
  return "image/png";
}

async function pngBytes(svg: string, W: number, H: number, size: number): Promise<Uint8Array> {
  return new Uint8Array(await (await rasterize(svg, W, H, size, "image/png")).arrayBuffer());
}

export function FaviconStudio({ mark, brand }: { mark: Mark; brand: string }) {
  const [raw, setRaw] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);
  const files = React.useRef<ZipFile[] | null>(null);

  React.useEffect(() => {
    let alive = true;
    files.current = null;
    fetch(`${import.meta.env.BASE_URL}brand/${mark.file}.svg`)
      .then((r) => r.text())
      .then((t) => alive && setRaw(t))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [mark.file]);

  const badges = React.useMemo(
    () => (raw ? TONES.map((t) => ({ tone: t, ...badge(inked(raw, t.ink), { bg: t.ground, padF: PAD, radF: 0.5 }) })) : null),
    [raw],
  );

  async function build(): Promise<ZipFile[]> {
    if (files.current) return files.current;
    const out: ZipFile[] = [];
    const enc = new TextEncoder();
    for (const b of badges!) {
      const sfx = b.tone.suffix;
      out.push({ name: `icon${sfx}.svg`, data: enc.encode(b.svg) });
      const ico: { size: number; png: Uint8Array }[] = [];
      for (const s of FAVICON_PX) {
        const png = await pngBytes(b.svg, b.W, b.H, s);
        out.push({ name: `favicon-${s}x${s}${sfx}.png`, data: png });
        if (s <= 48) ico.push({ size: s, png });
      }
      out.push({ name: `favicon${sfx}.ico`, data: buildIco(ico) });
      out.push({ name: `apple-touch-icon${sfx}.png`, data: await pngBytes(b.svg, b.W, b.H, APPLE_PX) });
      for (const s of PWA_PX) out.push({ name: `icon-${s}${sfx}.png`, data: await pngBytes(b.svg, b.W, b.H, s) });
    }
    files.current = out;
    return out;
  }

  async function run(fn: (all: ZipFile[]) => void) {
    if (!badges || busy) return;
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

  const total = TONES.length * fileNames("").length;
  const fill = (svg: string) => svg.replace(/<svg([^>]*?)>/, (_m, a: string) => `<svg width="100%" height="100%"${a}>`);

  return (
    <div className="grid md:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="flex min-h-64 items-center justify-center gap-10 border-b border-alpha-400 bg-checker p-8 md:border-r md:border-b-0">
        {badges ? (
          badges.map((b) => (
            <div key={b.tone.suffix} className="size-28 [&>svg]:block [&>svg]:size-full" dangerouslySetInnerHTML={{ __html: fill(b.svg) }} />
          ))
        ) : null}
      </div>

      <div className="flex flex-col gap-6 p-8">
        <div>
          <p className="text-base font-semibold text-gray-1000">Favicon</p>
          <p className="mt-0.5 text-sm text-gray-900">The icon on its badge, fully rounded, with full padding. Dark is the standard, light the option.</p>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <button
            type="button"
            className="h-9 w-full cursor-pointer rounded-brand border-0 bg-bg-200 text-sm font-medium text-gray-1000 shadow-border hover:bg-alpha-100 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => downloadOne("favicon.ico")}
            disabled={busy || !badges}
          >
            favicon.ico
          </button>
          <button
            type="button"
            className="h-9 w-full cursor-pointer rounded-brand border-0 bg-gray-1000 text-sm font-medium text-bg-100 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={downloadAll}
            disabled={busy || !badges}
          >
            {busy ? "Rendering…" : `Download bundle · ${total} files`}
          </button>
        </div>
      </div>

      <div className="col-span-full grid gap-8 border-t border-alpha-400 p-8 md:grid-cols-2">
        {TONES.map((t) => (
          <div key={t.suffix} className="min-w-0">
            <p className="text-sm text-gray-900">
              <span className="font-medium text-gray-1000">{t.name}</span> · {t.role}
            </p>
            <ul className="mt-3 flex list-none flex-col p-0">
              {fileNames(t.suffix).map((n) => (
                <li key={n}>
                  <button
                    type="button"
                    className="flex h-7 w-full cursor-pointer items-center justify-between gap-3 rounded-brand border-0 bg-transparent px-2 text-left hover:bg-alpha-100 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => downloadOne(n)}
                    disabled={busy || !badges}
                  >
                    <code className="truncate font-mono text-[11px] text-gray-900">{n}</code>
                    <span className="shrink-0 text-[11px] text-gray-700">↓</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
