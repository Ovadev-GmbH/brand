import type { Entry, Pkg, PkgId } from "../types";
import { internal } from "./internal";
import { ovadev } from "./ovadev";
import { ticketova } from "./ticketova";
import { januna } from "./januna";

export const PACKAGES: Pkg[] = [internal, ovadev, ticketova, januna];

export function pkgById(id: string | undefined): Pkg | undefined {
  return PACKAGES.find((p) => p.id === id);
}

export function entryBySlug(pkg: Pkg, slug: string | undefined): Entry | undefined {
  return pkg.entries.find((e) => e.slug === slug);
}

/** Catalog-relative: /internal/table. The host app mounts the catalog
 *  wherever it likes and resolves these through its link slot. */
export function href(pkg: PkgId, slug?: string): string {
  return slug ? `/${pkg}/${slug}` : `/${pkg}`;
}

/** Entries grouped in the package's declared order, empty groups dropped. */
export function grouped(pkg: Pkg, filter = ""): { group: string; entries: Entry[] }[] {
  const q = filter.trim().toLowerCase();
  return pkg.groups
    .map((group) => ({
      group,
      entries: pkg.entries.filter((e) => e.group === group && (!q || e.name.toLowerCase().includes(q))),
    }))
    .filter((g) => g.entries.length > 0);
}
