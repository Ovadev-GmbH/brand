/* Which mode the catalog shows a two-mode brand in (Ovadev: dark and
   light). One choice for the whole catalog, kept across visits: the demo
   frames, the Colors page and the materials all read it. A brand with one
   mode ignores it. */
import * as React from "react";
import type { ColorSystem } from "../brands";

export type Mode = "dark" | "light";
const KEY = "brand-catalog-mode";
const listeners = new Set<() => void>();

function read(): Mode {
  try {
    return localStorage.getItem(KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function setMode(mode: Mode) {
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    /* private mode: the choice lasts the visit */
  }
  for (const l of listeners) l();
}

export function useMode(): Mode {
  return React.useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    read,
    () => "dark",
  );
}

type Light = Pick<ColorSystem, "BACKGROUNDS" | "SCALES">;
/** The brand's light palette, if it has one (colors.ts exports LIGHT). */
export const lightOf = (colors: ColorSystem | undefined): Light | undefined =>
  (colors as (ColorSystem & { LIGHT?: Light }) | undefined)?.LIGHT;

/** The colour system as the given mode draws it: the light scales, and each
 *  semantic token pointing at its light step where it names one. */
export function inMode(colors: ColorSystem, mode: Mode): ColorSystem {
  const light = lightOf(colors);
  if (mode === "dark" || !light) return colors;
  return {
    ...colors,
    BACKGROUNDS: light.BACKGROUNDS,
    SCALES: light.SCALES,
    SEMANTIC: colors.SEMANTIC.map((g) => ({
      ...g,
      tokens: g.tokens.map((t) => {
        const l = (t as { light?: string }).light;
        return l ? { ...t, ref: l } : t;
      }),
    })),
  } as ColorSystem;
}
