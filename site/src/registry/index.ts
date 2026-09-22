import type { Entry, Pkg, PkgId } from "../types";
import { ovadev } from "./ovadev";
import { ticketova } from "./ticketova";
import { januna } from "./januna";

export const PACKAGES: Pkg[] = [ovadev, ticketova, januna];

export function pkgById(id: string | undefined): Pkg | undefined {
  return PACKAGES.find((p) => p.id === id);
}

export function entryBySlug(pkg: Pkg, slug: string | undefined): Entry | undefined {
  return pkg.entries.find((e) => e.slug === slug);
}

/** Catalog-relative: /ovadev/table. The host app mounts the catalog
 *  wherever it likes and resolves these through its link slot. */
export function href(pkg: PkgId, slug?: string): string {
  return slug ? `/${pkg}/${slug}` : `/${pkg}`;
}

/** The Markdown twin of a page: the same path with `.md`, generated into
 *  public/<id>/ by scripts/gen-catalog-md.ts for every brand. */
export function mdHref(pkg: Pkg, slug: string): string {
  return `${import.meta.env.BASE_URL}${pkg.id}/${slug}.md`;
}

/** The brand's introduction as Markdown: /<id>.md, beside its folder. */
export function introMdHref(pkg: Pkg): string {
  return `${import.meta.env.BASE_URL}${pkg.id}.md`;
}

/** The chooser as Markdown. Under a base it is the base with `.md`
 *  (/brand.md); at the root, where that would be "/.md", it is /index.md. */
export function indexMdHref(): string {
  const base = import.meta.env.BASE_URL;
  return base === "/" ? "/index.md" : `${base.replace(/\/$/, "")}.md`;
}

/** Entries grouped in the package's declared order, empty groups dropped. */
export function grouped(pkg: Pkg, filter = ""): { group: string; entries: Entry[] }[] {
  const q = filter.trim().toLowerCase();
  return pkg.groups
    .map((group) => ({
      group,
      entries: pkg.entries.filter((e) => e.kind !== "block" && e.group === group && (!q || e.name.toLowerCase().includes(q))),
    }))
    .filter((g) => g.entries.length > 0);
}
