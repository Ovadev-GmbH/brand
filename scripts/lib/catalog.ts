/* What the catalog knows about a package's components, shared by the
 * generators: which slug sits in which group, how a slug becomes a name, and
 * which names a component file exports. */
import { readdirSync, readFileSync } from "node:fs";

export const ROOT = new URL("../..", import.meta.url).pathname.replace(/\/$/, "");

export const BRANDS: Record<string, { name: string; pkg: string; prefix: string }> = {
  januna: { name: "Januna", pkg: "@ovadev-gmbh/ui-januna", prefix: "jan" },
  ticketova: { name: "TICKETOVA", pkg: "@ovadev-gmbh/ui-ticketova", prefix: "tova" },
};

/** Sidebar groups, in order, and which slug sits in which. */
export const GROUPS: [string, string[]][] = [
  ["Actions", ["button", "button-group", "toggle", "toggle-group", "kbd"]],
  ["Forms", ["input", "input-group", "input-otp", "textarea", "label", "field", "checkbox", "radio-group", "switch", "select", "native-select", "combobox", "slider", "calendar", "questionnaire"]],
  ["Overlays", ["dialog", "alert-dialog", "sheet", "drawer", "popover", "hover-card", "tooltip", "dropdown-menu", "context-menu", "menubar", "navigation-menu", "command", "toast"]],
  ["Disclosure", ["accordion", "collapsible", "tabs"]],
  ["Feedback", ["alert", "note", "badge", "status-dot", "progress", "gauge", "spinner", "skeleton", "empty", "marker"]],
  ["Data", ["table", "chart", "description", "entity", "snippet", "pagination", "breadcrumb", "avatar", "card", "item", "carousel"]],
  ["Layout", ["stack", "separator", "aspect-ratio", "scroll-area", "resizable", "sidebar", "direction"]],
  ["Chat", ["message", "message-scroller", "bubble", "attachment"]],
];
export const groupOf = new Map(GROUPS.flatMap(([g, slugs]) => slugs.map((s) => [s, g] as const)));

const CAPS: Record<string, string> = { otp: "OTP" };
export const pascal = (slug: string) => slug.split("-").map((w) => w[0]!.toUpperCase() + w.slice(1)).join("");
export const title = (slug: string) => slug.split("-").map((w) => CAPS[w] ?? w[0]!.toUpperCase() + w.slice(1)).join(" ");

/** The component names a file exports — its closing `export { … }` block,
 *  minus the helpers (variants, hooks) that start lowercase. */
export function exportsOf(src: string): string[] {
  const block = src.match(/export \{([^}]+)\}\s*$/);
  if (!block) return [];
  return block[1]!
    .split(",")
    .map((s) => s.trim().replace(/^type /, "").split(/\s+as\s+/).pop()!)
    .filter((n) => n && /^[A-Z]/.test(n));
}

export type Component = { slug: string; name: string; group: string; exports: string[]; source: string };

/** Every component of a package, in sidebar order. */
export function componentsOf(id: string): Component[] {
  const dir = `${ROOT}/packages/${id}/src/components/ui`;
  const slugs = readdirSync(dir).filter((f) => f.endsWith(".tsx")).map((f) => f.replace(/\.tsx$/, ""));
  const missing = slugs.filter((s) => !groupOf.has(s));
  if (missing.length) throw new Error(`ungrouped components: ${missing.join(", ")}`);
  return GROUPS.flatMap(([, s]) => s)
    .filter((s) => slugs.includes(s))
    .map((slug) => {
      const source = readFileSync(`${dir}/${slug}.tsx`, "utf8");
      return { slug, name: title(slug), group: groupOf.get(slug)!, exports: exportsOf(source), source };
    });
}

/** A demo's source, if the catalog has one. */
export function demoOf(id: string, slug: string): string | undefined {
  try {
    return readFileSync(`${ROOT}/site/src/examples/${id}/${pascal(slug)}Demo.tsx`, "utf8");
  } catch {
    return undefined;
  }
}
