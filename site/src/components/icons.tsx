/* A handful of 16px glyphs, drawn here rather than pulled from an icon set,
   so the catalog carries no icon dependency and nothing has to be licensed.
   All of them inherit currentColor and sit on the same 16-unit box. */

import type { ReactNode } from "react";

type P = { size?: number };

function Svg({ size = 16, children, label }: P & { children: ReactNode; label?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(p: P) {
  return (
    <Svg {...p}>
      <circle cx="7" cy="7" r="4.5" />
      <path d="M10.5 10.5 14 14" />
    </Svg>
  );
}

export function SystemIcon(p: P) {
  return (
    <Svg {...p}>
      <rect x="1.75" y="2.75" width="12.5" height="8.5" />
      <path d="M5.5 14h5" />
    </Svg>
  );
}

export function SunIcon(p: P) {
  return (
    <Svg {...p}>
      <circle cx="8" cy="8" r="3.25" />
      <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.1 3.1l1 1M11.9 11.9l1 1M12.9 3.1l-1 1M4.1 11.9l-1 1" />
    </Svg>
  );
}

export function MoonIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1Z" />
    </Svg>
  );
}

export function MenuIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M2 4h12M2 8h12M2 12h12" />
    </Svg>
  );
}

export function CloseIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
    </Svg>
  );
}

export function ArrowIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M2 8h11" />
      <path d="M9 4l4 4-4 4" />
    </Svg>
  );
}

export function ChevronIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M6 3l5 5-5 5" />
    </Svg>
  );
}

export function CaretIcon(p: P) {
  return (
    <Svg {...p}>
      <path d="M4.5 6.5L8 10l3.5-3.5" />
    </Svg>
  );
}

export function SwatchIcon(p: P) {
  return (
    <Svg {...p}>
      <circle cx="8" cy="8" r="5.25" />
      <path d="M8 2.75v10.5" />
    </Svg>
  );
}

/* The one glyph here that is a filled mark rather than a stroked one: the
   GitHub logo only reads as itself solid. It inherits currentColor like the
   rest, so it is whatever ink the text around it is. */
export function GitHubIcon({ size = 16 }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 .2a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.39l-.01-1.37c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.72-.5.06-.49.06-.49.8.06 1.22.83 1.22.83.72 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.14.46.55.38A8 8 0 0 0 8 .2Z"
      />
    </svg>
  );
}
