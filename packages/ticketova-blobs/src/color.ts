/* ------------------------------------------------------------------ *
 * The colour palette: one hue from the seed, lightness and chroma fixed.
 *
 * The seed chooses only where on the wheel a blob sits and which of six
 * tones it wears. The tones are set in OKLCH, so a pastel green and a
 * pastel violet are equally pale. Every colour is resolved to sRGB hex,
 * because server-side rasterisers (resvg, sharp) do not all read
 * oklch() and a blob in a PDF ticket has to look like the one on screen.
 * The eyes are checked against the body in real sRGB luminance and
 * pushed until they clear 4.5:1.
 * ------------------------------------------------------------------ */

interface Oklch { l: number; c: number; h: number }

/* pastel, pale, mid, deep, bright, ink */
export const COLOUR_TONES = [
  { l: 0.86, c: 0.085 },
  { l: 0.9, c: 0.03 },
  { l: 0.73, c: 0.135 },
  { l: 0.62, c: 0.16 },
  { l: 0.87, c: 0.16 },
  { l: 0.34, c: 0.035 },
] as const;

function linear({ l, c, h }: Oklch): [number, number, number] {
  const r = (h * Math.PI) / 180, a = c * Math.cos(r), b = c * Math.sin(r);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
}

const fits = (rgb: number[]) => rgb.every((v) => v >= -1e-4 && v <= 1 + 1e-4);

/* Out of gamut, chroma gives way rather than a channel clipping: a
   clipped vivid blue turns purple, a desaturated one stays blue. */
function rgb(color: Oklch): [number, number, number] {
  let out = linear(color);
  if (!fits(out)) {
    let lo = 0, hi = color.c;
    for (let i = 0; i < 12; i++) {
      const mid = (lo + hi) / 2;
      if (fits(linear({ ...color, c: mid }))) lo = mid; else hi = mid;
    }
    out = linear({ ...color, c: lo });
  }
  return out.map((v) => Math.min(1, Math.max(0, v))) as [number, number, number];
}

const luminance = (c: Oklch) => { const [r, g, b] = rgb(c); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const contrast = (a: Oklch, b: Oklch) => {
  const x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

/* move fg's lightness away from bg until the pair clears `min` */
function clear(fg: Oklch, bg: Oklch, min: number): Oklch {
  const p = { ...fg }, dir = fg.l >= bg.l ? 1 : -1;
  for (let i = 0; i < 60 && contrast(p, bg) < min; i++) p.l = Math.min(1, Math.max(0, p.l + dir * 0.02));
  return p;
}

function hex(c: Oklch): string {
  return "#" + rgb(c).map((v) => {
    const s = v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
    return Math.round(s * 255).toString(16).padStart(2, "0");
  }).join("");
}

/** Body, eye and plate for one hue and one of the six tones. */
export function colourPalette(hue: number, tone: number): { body: string; eye: string; plate: string } {
  const t = COLOUR_TONES[tone]!;
  const plate: Oklch = { l: 0.965, c: 0.012, h: hue };
  const body = clear({ l: t.l, c: t.c, h: hue }, plate, 1.25);
  /* dark eyes on a light body, light eyes on a dark one */
  const eye = clear(body.l >= 0.5 ? { l: 0.17, c: 0.02, h: hue } : { l: 0.97, c: 0.012, h: hue }, body, 4.5);
  return { body: hex(body), eye: hex(eye), plate: hex(plate) };
}
