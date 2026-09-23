/* ------------------------------------------------------------------ *
 * @ovadev-gmbh/ticketova-blobs: a face for every customer without a photo.
 *
 *   blobSvg("lea.meier@example.ch")
 *
 * One flat silhouette, two strokes for eyes, nothing else, after
 * Blobatar (github.com/Alain00/blobatar), redrawn in TICKETOVA's terms:
 *
 *   black on white  the bodies are TICKETOVA's grey ramp down to its
 *                   ink, never a hue. Colour is how TICKETOVA says a state,
 *                   and a customer is not a state;
 *   the counter     half the silhouettes are what lies on a ticket desk:
 *                   ticket, stamp, wristband, coin;
 *   stillness       nothing moves at rest. `animate: "hover"` answers a
 *                   pointer with one hop and one blink, 160 and 240 ms on
 *                   TICKETOVA's easing, and honours reduced motion.
 *
 * Deterministic and dependency-free: the same seed gives the same blob on
 * the server, in the browser and next year, so it is rendered on demand
 * and never stored. Seed with something stable and not secret.
 * ------------------------------------------------------------------ */

import { reader } from "./seed";
import { outline, r1, sdf, SHAPES, type Shape } from "./shapes";

export { SHAPES, type Shape } from "./shapes";

/* TICKETOVA's grey ramp, --tova-gray-400 to -1000, and the eye each one
   needs to keep its contrast */
export const TONES = [
  { body: "#d1d5db", eye: "#0a0a0a" },
  { body: "#9ca3af", eye: "#0a0a0a" },
  { body: "#6b7280", eye: "#ffffff" },
  { body: "#4b5563", eye: "#ffffff" },
  { body: "#374151", eye: "#ffffff" },
  { body: "#0a0a0a", eye: "#ffffff" },
] as const;

export const EXPRESSIONS = ["idle", "happy", "sad", "mad", "surprised", "wink", "sleepy", "smug", "shy", "scared"] as const;
export type Expression = (typeof EXPRESSIONS)[number];

export interface Traits {
  shape: Shape;
  /** index into TONES, pale to ink */
  tone: number;
  /** degrees; the whole figure leans, eyes and all */
  tilt: number;
  /** squash and stretch of the silhouette */
  scaleX: number;
  scaleY: number;
  /** half the distance between the eyes */
  eyeGap: number;
  eyeHeight: number;
  eyeWidth: number;
  /** degrees; both eyes lean the same way */
  eyeTilt: number;
  /** vertical position of the eyes, relative to the centre */
  eyeY: number;
  /** where the blob is looking */
  lookX: number;
  wobble: [number, number, number];
}

export interface BlobOptions {
  /** width and height in px; without it the SVG scales with CSS */
  size?: number;
  /** the plate behind the blob; "circle" by default, TICKETOVA's only pill */
  background?: "circle" | "squircle" | "square" | "none";
  /** a pose over the seeded face; "idle" is the seed's own. A pose is
   *  never a state: a failed payment says so in words. */
  expression?: Expression;
  /** pin any trait, e.g. { shape: "ticket" } for staff, or a tone for a role */
  traits?: Partial<Traits>;
  /** "hover": one hop and a blink when a pointer arrives. Inline SVG only. */
  animate?: false | "hover";
  /** accessible name; without it the SVG is decorative (aria-hidden) */
  title?: string;
}

const PLATE = "#f3f4f6"; /* --tova-gray-200 */
const CX = 50, CY = 52;
/* The silhouettes are drawn at a 30-unit radius; on the plate they sit
   at about two thirds of its width: big enough to read at 24px, small
   enough that a tilted, stretched ticket never touches the rim. */
const FIT = 0.96;

/** The seed's blob, as numbers, with any pinned traits applied. */
export function blobTraits(seed: string, pinned?: Partial<Traits>): Traits {
  const u = reader(seed);
  const shape = u.pick("shape", SHAPES);
  return {
    shape,
    tone: Math.floor(u("tone") * TONES.length),
    tilt: u.num("tilt", -10, 10),
    scaleX: u.num("scale.x", 0.9, 1.08),
    scaleY: u.num("scale.y", 0.9, 1.08),
    eyeGap: u.num("eye.gap", 6, 9.5),
    eyeHeight: u.num("eye.height", 5.5, 9),
    eyeWidth: u.num("eye.width", 4.4, 5.6),
    eyeTilt: u.num("eye.tilt", -12, 12),
    eyeY: u.num("eye.y", -7, 0),
    lookX: u.num("look.x", -3, 3),
    wobble: [u("wobble.0"), u("wobble.1"), u("wobble.2")],
    ...pinned,
  };
}

/* An eye is one stroke: a centre, a length along its own axis (0 is a
   dot), an angle from upright, a weight. Expressions are nothing but
   edits to these four numbers, so every pose works on every face. */
interface Eye { x: number; y: number; len: number; angle: number; w: number }

function eyes(t: Traits, e: Expression): [Eye, Eye] {
  const x = t.lookX, y = t.eyeY, g = t.eyeGap, h = t.eyeHeight, w = t.eyeWidth, a = t.eyeTilt;
  const pair = (dx: number, dy: number, len: number, al: number, ar: number, ww = w): [Eye, Eye] => [
    { x: x - g - dx, y: y + dy, len, angle: al, w: ww },
    { x: x + g + dx, y: y + dy, len, angle: ar, w: ww },
  ];
  switch (e) {
    case "idle": return pair(0, 0, h, a, a);
    case "happy": return pair(0, 0, h * 0.95, 78, 102);
    case "sad": return pair(2, 3, h * 0.55, -24, 24);
    case "mad": return pair(0, 1, h * 0.9, 122, 58);
    case "surprised": return pair(1, -1, h * 1.35, 0, 0, w * 1.15);
    case "wink": return [{ x: x - g, y, len: 0, angle: 0, w: w * 1.25 }, { x: x + g, y, len: h * 0.9, angle: 96, w }];
    case "sleepy": return pair(0, 2.5, h * 0.6, 90, 90, w * 0.85);
    case "smug": return pair(0, 1.5, h * 0.85, 100, 100);
    case "shy": return pair(-1.5, 3, h * 0.3, a, a, w);
    case "scared": return pair(2.5, -1, h * 1.2, -6, 6, w * 0.8);
  }
}

const eyePath = ({ x, y, len, angle }: Eye) => {
  const r = (angle * Math.PI) / 180, dx = (Math.sin(r) * len) / 2, dy = (-Math.cos(r) * len) / 2;
  return `M${r1(CX + x - dx)} ${r1(CY + y - dy)}L${r1(CX + x + dx)} ${r1(CY + y + dy)}`;
};

let uid = 0;

const PLATES: Record<Exclude<NonNullable<BlobOptions["background"]>, "none">, string> = {
  circle: `<circle cx="50" cy="50" r="50" fill="${PLATE}"/>`,
  squircle: `<rect width="100" height="100" rx="24" fill="${PLATE}"/>`,
  square: `<rect width="100" height="100" fill="${PLATE}"/>`,
};

/** A standalone SVG document string. */
export function blobSvg(seed: string, options: BlobOptions = {}): string {
  const t = blobTraits(seed, options.traits);
  const tone = TONES[Math.min(TONES.length - 1, Math.max(0, Math.round(t.tone)))]!;
  const body = outline(sdf(t.shape, t.wobble), t.scaleX * FIT, t.scaleY * FIT, 0, CX, CY);
  const [l, r] = eyes(t, options.expression ?? "idle");
  const bg = options.background ?? "circle";
  const id = `tb${(uid++).toString(36)}`;
  const anim = options.animate === "hover";

  const size = options.size != null ? ` width="${options.size}" height="${options.size}"` : "";
  const a11y = options.title ? ` role="img" aria-label="${esc(options.title)}"` : ` aria-hidden="true"`;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"${size}${a11y}${anim ? ` class="${id}"` : ""}>`;
  if (options.title) svg += `<title>${esc(options.title)}</title>`;
  if (anim) svg += `<style>${motion(id)}</style>`;
  if (bg !== "none") svg += PLATES[bg];
  svg += `<g class="f"><g transform="rotate(${r1(t.tilt)} ${CX} ${CY})">`;
  svg += `<path d="${body}" fill="${tone.body}"/>`;
  svg += `<g class="e" fill="none" stroke="${tone.eye}" stroke-linecap="round">`;
  for (const e of [l, r]) svg += `<path d="${eyePath(e)}" stroke-width="${r1(e.w)}"/>`;
  svg += `</g></g></g></svg>`;
  return svg;
}

/* Scoped to the SVG's own class, so two hundred blobs on a page do not
   share one :hover. TICKETOVA's durations and easing, never longer than
   a quarter second; reduced motion gets none of it. */
function motion(id: string) {
  const ease = "cubic-bezier(0.2,0,0,1)";
  return `.${id} .f{transition:transform 160ms ${ease};transform-origin:50px 80px}`
    + `.${id}:hover .f{transform:translateY(-3px) scale(1.04,0.97)}`
    + `.${id} .e{transform-box:fill-box;transform-origin:center}`
    + `.${id}:hover .e{animation:${id}b 240ms ${ease}}`
    + `@keyframes ${id}b{45%{transform:scaleY(.12)}}`
    + `@media (prefers-reduced-motion:reduce){.${id} .f,.${id} .e{transition:none;animation:none;transform:none}}`;
}

/** The SVG as a data: URI, for an <img src>, a CSS background or an e-mail. */
export function blobDataUri(seed: string, options: Omit<BlobOptions, "animate"> = {}): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(blobSvg(seed, options))}`;
}

function esc(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
}
