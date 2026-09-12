/* What the catalog knows about a package's components, shared by the
 * generators: which slug sits in which group, how a slug becomes a name, and
 * which names a component file exports. */
import { readdirSync, readFileSync } from "node:fs";

export const ROOT = new URL("../..", import.meta.url).pathname.replace(/\/$/, "");

export type Brand = {
  name: string;
  pkg: string;
  prefix: string;
  /** The icon set, as Markdown for DESIGN.md and the icons page. */
  icons: { library: string; usage: string; note: string };
};
export const BRANDS: Record<string, Brand> = {
  januna: {
    name: "Januna", pkg: "@ovadev-gmbh/ui-januna", prefix: "jan",
    icons: {
      library: "Hugeicons",
      usage: 'import { HugeiconsIcon } from "@hugeicons/react";\nimport { Add01Icon } from "@hugeicons/core-free-icons";\n\n<HugeiconsIcon icon={Add01Icon} strokeWidth={2} />',
      note: "The free set, 6,704 icons, stroke rounded. Inside a button it is 16px at stroke 2; standalone 24px at stroke 1.5. Names end in `Icon`.",
    },
  },
  ticketova: {
    name: "TICKETOVA", pkg: "@ovadev-gmbh/ui-ticketova", prefix: "tova",
    icons: { library: "Hugeicons", usage: "", note: "" },
  },
  internal: {
    name: "Internal", pkg: "@ovadev-gmbh/ui-internal", prefix: "int",
    icons: {
      library: "Phosphor",
      usage: 'import { PlusIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";\n\n<PlusIcon className="size-4" />',
      note: "1,500 icons, regular weight. 16px inside controls, 20px standalone. Every icon is exported as `Name` and `NameIcon`; use the `Icon` spelling.",
    },
  },
};

/** Sidebar groups, in order, and which slug sits in which. */
export const GROUPS: [string, string[]][] = [
  ["Actions", ["button", "button-group", "toggle", "toggle-group", "kbd"]],
  ["Forms", ["input", "input-group", "input-otp", "textarea", "label", "field", "checkbox", "radio-group", "switch", "select", "native-select", "combobox", "slider", "calendar", "questionnaire"]],
  ["Overlays", ["dialog", "alert-dialog", "sheet", "drawer", "popover", "hover-card", "tooltip", "dropdown-menu", "context-menu", "menubar", "navigation-menu", "command", "toast"]],
  ["Disclosure", ["accordion", "collapsible", "tabs"]],
  ["Feedback", ["alert", "badge", "status-dot", "progress", "gauge", "spinner", "skeleton", "empty", "marker"]],
  ["Data", ["table", "chart", "description", "snippet", "pagination", "breadcrumb", "avatar", "card", "item", "carousel"]],
  ["Layout", ["separator", "aspect-ratio", "scroll-area", "resizable", "sidebar", "direction"]],
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
