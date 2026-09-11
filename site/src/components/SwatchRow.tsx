import type { Swatch } from "../brands";

/** The brand's palette as the Colors card's preview: one capsule per swatch,
 *  a bar of the colour standing inside an outline — the shape Geist shows
 *  its scales in. Inert; the page behind the card names the values. */
export function SwatchRow({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      {swatches.map((s) => (
        <div
          key={s.token}
          className="flex h-24 w-10 shrink-0 items-center justify-center rounded-full border border-alpha-400 bg-bg-100"
          title={`${s.name} ${s.value}`}
        >
          <span className="block h-16 w-3 rounded-full shadow-border" style={{ background: s.value }} />
        </div>
      ))}
    </div>
  );
}
