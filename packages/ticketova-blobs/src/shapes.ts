/* ------------------------------------------------------------------ *
 * The silhouettes, as signed distance functions.
 *
 * Half of them are what a blob is anyway (round, organic, boxy, cloud,
 * drop, hexagon); the other half come off the TICKETOVA counter: the
 * ticket with its two bites, the postage stamp with its perforation,
 * the wristband, the coin with its milled edge. Distance functions make
 * the ticket's bite and the stamp's teeth one subtraction each, and give
 * every corner the same soft radius without drawing a single curve.
 *
 * Every shape is star-shaped around its centre, so its outline is found
 * by walking out along rays until the distance turns positive. All
 * sizes are in the 100 × 100 drawing space, centred on the origin.
 * ------------------------------------------------------------------ */

export const SHAPES = ["round", "organic", "boxy", "band", "cloud", "drop", "hexagon", "ticket", "stamp", "coin"] as const;
export type Shape = (typeof SHAPES)[number];

type Sdf = (x: number, y: number) => number;

const len = (x: number, y: number) => Math.hypot(x, y);
const circle = (cx: number, cy: number, r: number): Sdf => (x, y) => len(x - cx, y - cy) - r;

/* a box with half-extents bx, by and corner radius r */
const box = (bx: number, by: number, r: number): Sdf => (x, y) => {
  const qx = Math.abs(x) - bx + r, qy = Math.abs(y) - by + r;
  return len(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
};

/* smooth union: the join between two circles fills in like a meniscus */
const smin = (a: number, b: number, k: number) => {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - (h * h * k) / 4;
};

function hexagon(r: number, round: number): Sdf {
  const kx = -0.866025404, ky = 0.5, kz = 0.577350269;
  return (x, y) => {
    let px = Math.abs(y), py = Math.abs(x); /* pointy top */
    const d = 2 * Math.min(kx * px + ky * py, 0);
    px -= d * kx; py -= d * ky;
    px -= Math.min(Math.max(px, -kz * (r - round)), kz * (r - round));
    py -= r - round;
    return len(px, py) * Math.sign(py) - round;
  };
}

/** Wobble is 0..1 from the seed; only the organic shape reads it. */
export function sdf(shape: Shape, wobble: readonly number[]): Sdf {
  switch (shape) {
    case "round": return circle(0, 0, 30);
    case "organic": return (x, y) => {
      const a = Math.atan2(y, x);
      const f = 1 + 0.07 * Math.sin(2 * a + wobble[0]! * 6.28) + 0.05 * Math.sin(3 * a + wobble[1]! * 6.28) + 0.03 * Math.sin(5 * a + wobble[2]! * 6.28);
      return len(x, y) - 30 * f;
    };
    case "boxy": return box(28, 27, 11);
    case "band": return box(35, 19, 19);
    case "cloud": {
      const parts = [circle(0, 5, 19), circle(-17, 7, 13), circle(17, 7, 13), circle(-7, -10, 14), circle(9, -8, 13)];
      return (x, y) => parts.reduce((d, p) => smin(d, p(x, y), 5), Infinity);
    }
    case "drop": {
      const body = circle(0, 7, 25);
      /* the tip: a diamond whose top corner is the point of the drop */
      const tip: Sdf = (x, y) => {
        const c = Math.SQRT1_2, rx = (x + (y + 10)) * c, ry = (-x + (y + 10)) * c;
        return box(14, 14, 5)(rx, ry);
      };
      return (x, y) => smin(body(x, y), tip(x, y), 14);
    }
    case "hexagon": return hexagon(30, 8);
    case "ticket": {
      const b = box(34, 23, 5), bite = 7.5;
      return (x, y) => Math.max(b(x, y), -Math.min(circle(-34, 0, bite)(x, y), circle(34, 0, bite)(x, y)));
    }
    case "stamp": {
      /* a postage stamp: a square with its perforation bitten out of all four edges */
      const s = 27, b = box(s, s, 2), holes: Sdf[] = [];
      for (let i = -3; i <= 3; i++) {
        const t = (i * 2 * s) / 7;
        holes.push(circle(t, -s, 3.2), circle(t, s, 3.2), circle(-s, t, 3.2), circle(s, t, 3.2));
      }
      return (x, y) => Math.max(b(x, y), -holes.reduce((d, h) => Math.min(d, h(x, y)), Infinity));
    }
    case "coin": {
      /* milled edge: a circle with fine teeth, the way a franc feels */
      return (x, y) => len(x, y) - 29 - 1.6 * Math.max(0, Math.sin(Math.atan2(y, x) * 18));
    }
  }
}

/** The outline as a closed path: rays from the centre, each bisected to the edge. */
export function outline(f: Sdf, sx: number, sy: number, rot: number, cx: number, cy: number, n = 180): string {
  const c = Math.cos(rot), s = Math.sin(rot);
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, dx = Math.cos(a), dy = Math.sin(a);
    let lo = 0, hi = 2;
    while (f(dx * hi, dy * hi) < 0 && hi < 70) { lo = hi; hi += 2; }
    for (let k = 0; k < 10; k++) {
      const mid = (lo + hi) / 2;
      if (f(dx * mid, dy * mid) < 0) lo = mid; else hi = mid;
    }
    const x = dx * lo * sx, y = dy * lo * sy;
    const px = cx + x * c - y * s, py = cy + x * s + y * c;
    d += `${i ? "L" : "M"}${r1(px)} ${r1(py)}`;
  }
  return d + "Z";
}

export const r1 = (v: number) => {
  const s = Math.round(v * 10) / 10;
  return Object.is(s, -0) ? "0" : String(s);
};
