// The packages' versions, read off their package.json at build time by
// scripts/gen-versions.mjs. Bundled so the catalog can print the version it
// documents next to the install line.

import doc from "./versions.json";
import type { PkgId } from "./types";

const DOC = doc as { generatedAt: string; packages: Record<PkgId, { name: string; version: string }> };

/** The version this catalog documents. */
export function pkgVersion(id: PkgId): string {
  return DOC.packages[id]?.version ?? "?";
}
