/* ------------------------------------------------------------------ *
 * Every trait reads its own number, addressed by name.
 *
 * A blob is not drawn from one random stream but from one hash per
 * trait key ("shape", "eye.gap", ...). Adding a trait later reads a new
 * key and leaves every existing key, and so every existing customer's
 * blob, exactly as it was. A stream would shift everything after the
 * insertion point, and half the dashboard would change face overnight.
 *
 * What is not free to change is the order of a pick list: the index is
 * part of the mapping. Lists are append-only within a major version.
 * ------------------------------------------------------------------ */

/* cyrb53: good spread on short, similar inputs (a@x.ch vs b@x.ch) */
export function hash(input: string): number {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 2654435761);
    h2 = Math.imul(h2 ^ c, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

export interface Reader {
  /** uniform in [0, 1) */
  (key: string): number;
  num(key: string, min: number, max: number): number;
  pick<T>(key: string, list: readonly T[]): T;
}

/** Seeds are normalised: " Lea.Meier@Example.ch" and "lea.meier@example.ch" are one person. */
export function reader(seed: string): Reader {
  const base = seed.normalize("NFC").trim().toLowerCase();
  const u = ((key: string) => hash(`${base}\u0000${key}`) / 2 ** 53) as Reader;
  u.num = (key, min, max) => min + u(key) * (max - min);
  u.pick = (key, list) => list[Math.floor(u(key) * list.length)]!;
  return u;
}
