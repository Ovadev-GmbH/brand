import { expect, test } from "bun:test";
import { blobColours, blobSvg, blobTraits, EXPRESSIONS, SHAPES, TONES } from "../src/index";

const strip = (svg: string) => svg.replace(/tb[0-9a-z]+/g, "tb");

test("a seed is always the same blob", () => {
  expect(strip(blobSvg("lea@example.ch"))).toBe(strip(blobSvg("lea@example.ch")));
  expect(blobTraits(" Lea@Example.ch ")).toEqual(blobTraits("lea@example.ch"));
});

test("pinning one trait leaves the others as the seed made them", () => {
  const free = blobTraits("noah@example.ch");
  const pinned = blobTraits("noah@example.ch", { shape: "ticket" });
  expect(pinned.shape).toBe("ticket");
  expect({ ...pinned, shape: free.shape }).toEqual(free);
});

test("similar seeds spread over shapes and tones", () => {
  const shapes = new Set<string>(), tones = new Set<number>();
  for (let i = 0; i < 500; i++) {
    const t = blobTraits(`user${i}@x.ch`);
    shapes.add(t.shape); tones.add(t.tone);
  }
  expect(shapes.size).toBe(SHAPES.length);
  expect(tones.size).toBe(TONES.length);
});

test("every shape stays inside the round plate", () => {
  for (const shape of SHAPES) for (let i = 0; i < 40; i++) {
    const d = blobSvg(`s${i}`, { traits: { shape, tilt: 0, scaleX: 1.08, scaleY: 1.08 } }).match(/<path d="([^"]+)" fill/)![1]!;
    for (const [, x, y] of d.matchAll(/[ML](-?[\d.]+) (-?[\d.]+)/g)) {
      expect(Math.hypot(Number(x) - 50, Number(y) - 50)).toBeLessThan(48);
    }
  }
});

test("every expression renders two eyes", () => {
  for (const expression of EXPRESSIONS) {
    expect(blobSvg("x", { expression }).match(/stroke-width=/g)).toHaveLength(2);
  }
});

test("hover motion is scoped and respects reduced motion", () => {
  const svg = blobSvg("x", { animate: "hover" });
  expect(svg).toContain(":hover");
  expect(svg).toContain("prefers-reduced-motion");
  expect(blobSvg("x")).not.toContain("<style>");
});

test("titles are escaped", () => {
  expect(blobSvg("x", { title: `<a "b">` })).toContain("&lt;a &quot;b&quot;&gt;");
});

test("eyes clear 4.5:1 on every hue and tone", () => {
  const lum = (h: string) => {
    const [r, g, b] = [1, 3, 5].map((i) => { const v = parseInt(h.slice(i, i + 2), 16) / 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
    return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
  };
  for (let hue = 0; hue < 360; hue += 15) for (let tone = 0; tone < 6; tone++) {
    const c = blobColours({ ...blobTraits("x"), hue, tone });
    const [a, b] = [lum(c.body), lum(c.eye)];
    expect((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)).toBeGreaterThanOrEqual(4.45);
  }
});

test("mono stays on the grey ramp", () => {
  expect(blobSvg("x", { palette: "mono", traits: { tone: 5 } })).toContain("#0a0a0a");
  expect(blobSvg("x", { palette: "mono" })).toContain("#f3f4f6");
});
