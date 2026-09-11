/* One ordered list of pages per brand. The sidebar, the ⌘K menu and the
   Prev/Next pager all read this, so they can never disagree about what the
   catalog contains or what order it is in. */

import type { Entry, Pkg } from "./types";
import { grouped, href } from "./registry";
import { CHROME } from "./brands";

export type NavItem = {
  href: string;
  name: string;
  group: string;
  kind: "foundation" | "component";
  entry?: Entry;
};

/** The pages above the components, in the order the introduction lists them.
 *  Brand Assets only exists for a brand that has marks: ui-internal has none
 *  of its own, it wears Ovadev's. */
export function foundationsOf(pkg: Pkg): { slug: string; name: string }[] {
  return [
    { slug: "", name: "Introduction" },
    ...(CHROME[pkg.id].marks?.length ? [{ slug: "brand-assets", name: "Brand Assets" }] : []),
    { slug: "colors", name: "Colors" },
    { slug: "typography", name: "Typography" },
    ...(CHROME[pkg.id].icons ? [{ slug: "icons", name: "Icons" }] : []),
    { slug: "components", name: "Components" },
  ];
}

export type NavGroup = { group: string; items: NavItem[] };

/** Foundations first, then the package's own component groups. `filter`
 *  narrows by name and drops the groups that empty out. */
export function navGroups(pkg: Pkg, filter = ""): NavGroup[] {
  const q = filter.trim().toLowerCase();
  const foundations: NavItem[] = foundationsOf(pkg)
    .filter((f) => !q || f.name.toLowerCase().includes(q))
    .map((f) => ({
      href: f.slug ? `${href(pkg.id)}/${f.slug}` : href(pkg.id),
      name: f.name,
      group: "Foundations",
      kind: "foundation",
    }));
  const components: NavGroup[] = grouped(pkg, filter).map(({ group, entries }) => ({
    group,
    items: entries.map((e) => ({ href: href(pkg.id, e.slug), name: e.name, group, kind: "component", entry: e })),
  }));
  return [...(foundations.length ? [{ group: "Foundations", items: foundations }] : []), ...components];
}

export function navFlat(pkg: Pkg): NavItem[] {
  return navGroups(pkg).flatMap((g) => g.items);
}

/** The pages either side of `path`, for the pager at the foot of a page. */
export function neighbours(pkg: Pkg, path: string): { prev?: NavItem; next?: NavItem } {
  const flat = navFlat(pkg);
  const i = flat.findIndex((n) => n.href === path);
  if (i === -1) return {};
  return { prev: flat[i - 1], next: flat[i + 1] };
}
