/* The brand's social card, 1200 × 630, shown and shipped exactly as it is.
 *
 * A card carries a sentence, and a brand that sells in two languages unfurls
 * into a different one in each, so `og` is a file per language and each gets a
 * box of its own — the same box a mark gets: the drawing on its stage, what it
 * is under that, and the download at the foot. Two boxes rather than one with
 * a switch, because the grid's row wants filling and because both cards are
 * worth seeing at once. */

import * as React from "react";
import { save } from "./LogoStudio";

export const LANGS = ["de", "en"] as const;
export type Lang = (typeof LANGS)[number];

const LABEL: Record<Lang, string> = { de: "Deutsch", en: "English" };

export function OgCard({ file, lang, brand }: { file: string; lang: Lang; brand: string }) {
  const [busy, setBusy] = React.useState(false);
  const src = `${import.meta.env.BASE_URL}brand/${file}.png`;
  const filename = `${file}.png`;

  async function download() {
    if (busy) return;
    setBusy(true);
    try {
      save(await (await fetch(src)).blob(), filename);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex h-full flex-col gap-6 p-8">
      <div className="overflow-hidden rounded-brand shadow-border">
        <img src={src} alt={`${brand} OG image, ${LABEL[lang]}`} className="block h-auto w-full" />
      </div>
      <div>
        <p className="text-base font-semibold text-gray-1000">{LABEL[lang]}</p>
        <p className="mt-0.5 text-sm text-gray-900">1200 × 630, as it ships.</p>
      </div>
      <div className="mt-auto flex flex-col gap-3">
        <button
          type="button"
          className="h-9 w-full cursor-pointer rounded-brand border-0 bg-gray-1000 text-sm font-medium text-bg-100 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={download}
          disabled={busy}
        >
          Download PNG
        </button>
        <code className="font-mono text-[11px] leading-4 text-gray-700">{filename}</code>
      </div>
    </div>
  );
}
