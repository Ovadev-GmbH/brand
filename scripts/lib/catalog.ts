/* What the catalog knows about a package's components, shared by the
 * generators: which slug sits in which group, how a slug becomes a name, and
 * which names a component file exports. */
import { existsSync, readdirSync, readFileSync } from "node:fs";

export const ROOT = new URL("../..", import.meta.url).pathname.replace(/\/$/, "");

/** Where the catalog is served: the brand service behind intern.ova.dev.
 *  Every absolute link the generators write starts here. */
export const SITE = "https://intern.ova.dev/brand";

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
      usage: 'import { HugeiconsIcon, Add01Icon } from "@ovadev-gmbh/ui-januna/icons";\n\n<HugeiconsIcon icon={Add01Icon} strokeWidth={2} />',
      note: "The free set, 6,704 icons, stroke rounded. Inside a button it is 16px at stroke 2; standalone 24px at stroke 1.5. Names end in `Icon`.",
    },
  },
  ovadev: {
    name: "Ovadev", pkg: "@ovadev-gmbh/ui-ovadev", prefix: "ova",
    icons: {
      library: "Lucide",
      usage: 'import { PlusIcon, SearchIcon } from "@ovadev-gmbh/ui-ovadev/icons";\n\n<PlusIcon className="size-4" />',
      note: "2,000 icons, stroke 2 at 16px inside controls, 1.75 at 20px standalone, always in the ink. Every icon is exported as `Name` and `NameIcon`; use the `Icon` spelling. The mark itself is not an icon: it comes from Brand Assets.",
    },
  },
  ticketova: {
    name: "TICKETOVA", pkg: "@ovadev-gmbh/ui-ticketova", prefix: "tova",
    icons: {
      library: "Phosphor",
      usage: 'import { PlusIcon, MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";\n\n<PlusIcon className="size-4" />',
      note: "1,512 icons in six weights; the system draws the regular weight, 16px inside controls, 20px standalone, in the colour of its text. Every icon is exported as `Name` and `NameIcon`; use the `Icon` spelling.",
    },
  },
};

/** Sidebar groups, in order, and which slug sits in which. */
export const GROUPS: [string, string[]][] = [
  ["Actions", ["button", "button-group", "toggle", "toggle-group", "kbd"]],
  ["Forms", ["input", "input-group", "input-otp", "textarea", "label", "field", "checkbox", "radio-group", "switch", "select", "native-select", "combobox", "slider", "calendar", "questionnaire"]],
  ["Overlays", ["dialog", "alert-dialog", "sheet", "drawer", "popover", "hover-card", "tooltip", "dropdown-menu", "context-menu", "menubar", "navigation-menu", "command", "toast"]],
  ["Disclosure", ["accordion", "collapsible", "tabs"]],
  ["Feedback", ["alert", "badge", "progress", "spinner", "skeleton", "empty", "marker"]],
  ["Data", ["table", "chart", "pagination", "breadcrumb", "avatar", "card", "item", "carousel"]],
  ["Layout", ["separator", "aspect-ratio", "scroll-area", "resizable", "sidebar", "direction"]],
  ["Chat", ["message", "message-scroller", "bubble", "attachment"]],
];
export const groupOf = new Map(GROUPS.flatMap(([g, slugs]) => slugs.map((s) => [s, g] as const)));

/** The blocks, in sidebar order: whole screens and screen parts composed
 *  from the components, published as the package's `/blocks` subpath. Each
 *  is packages/<id>/src/blocks/<slug>.tsx; its examples are every file under
 *  site/src/examples/<id>/blocks/<slug>/. */
export const BLOCKS = ["app-shell", "auth", "error-page", "stats"];
export const BLOCKS_GROUP = "Blocks";

const CAPS: Record<string, string> = { otp: "OTP" };
export const pascal = (slug: string) => slug.split("-").map((w) => w[0]!.toUpperCase() + w.slice(1)).join("");
export const title = (slug: string) => slug.split("-").map((w) => CAPS[w] ?? w[0]!.toUpperCase() + w.slice(1)).join(" ");

/** The component names a file exports — its closing `export { … }` block,
 *  minus the helpers (variants, hooks) that start lowercase. */
export function exportsOf(src: string): string[] {
  const block = src.match(/export \{([^}]+)\};?\s*$/);
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

export type Block = { slug: string; name: string; exports: string[]; source: string; examples: { name: string; title: string; description: string; source: string }[] };

/** An example's one line, from the doc comment at the top of its file. */
function descriptionOf(src: string): string {
  const m = src.match(/^(?:import[^\n]*\n|\s*\n)*\/\*\*([\s\S]*?)\*\//);
  return m ? m[1]!.replace(/^\s*\*\s?/gm, "").replace(/\s+/g, " ").trim() : "";
}

/** Every block of a package, in sidebar order, with its examples. A block
 *  file that BLOCKS does not list is an error, like an ungrouped component. */
export function blocksOf(id: string): Block[] {
  const dir = `${ROOT}/packages/${id}/src/blocks`;
  if (!existsSync(dir)) return [];
  const slugs = readdirSync(dir).filter((f) => f.endsWith(".tsx")).map((f) => f.replace(/\.tsx$/, ""));
  const unlisted = slugs.filter((s) => !BLOCKS.includes(s));
  if (unlisted.length) throw new Error(`blocks not in BLOCKS: ${unlisted.join(", ")}`);
  return BLOCKS.filter((s) => slugs.includes(s)).map((slug) => {
    const source = readFileSync(`${dir}/${slug}.tsx`, "utf8");
    const exDir = `${ROOT}/site/src/examples/${id}/blocks/${slug}`;
    const examples = existsSync(exDir)
      ? readdirSync(exDir)
          .filter((f) => f.endsWith(".tsx"))
          .sort()
          .map((f) => {
            const name = f.replace(/\.tsx$/, "");
            const source = readFileSync(`${exDir}/${f}`, "utf8");
            return { name, title: title(name.replace(/^\d+-/, "")), description: descriptionOf(source), source };
          })
      : [];
    if (!examples.length) throw new Error(`block ${slug} has no examples under site/src/examples/${id}/blocks/${slug}/`);
    return { slug, name: title(slug), exports: exportsOf(source), source, examples };
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
