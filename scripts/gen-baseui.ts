/* Scaffold the Base UI layer into every package, and its pages into the site.
 *
 * Base UI ships its own documentation inside the npm package
 * (@base-ui/react/docs/react/components/*.md). This reads that: the part list
 * per component, which parts render an element — only those take a className —
 * and the first CSS-Modules demo of each, which becomes the catalog example
 * with the styling stripped back out of it.
 *
 * It writes, per package, one wrapper module per Base UI component: every part
 * re-exported with a brand class on it, and an empty stylesheet next to it to
 * fill in. That is the whole point — the hooks exist before the styling does,
 * so a brand can be styled component by component without touching a .tsx.
 *
 * Run it again after a Base UI upgrade: the wrappers are rebuilt, and a
 * stylesheet that has grown real rules is left alone. --force overwrites those
 * too.
 */
import { createRequire } from "node:module";
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";

const FORCE = process.argv.includes("--force");
const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");

// Base UI is a peer dependency, so it is installed under the packages rather
// than at the workspace root. Any of the four resolves to the same copy.
const require = createRequire(`${ROOT}/packages/ticketova/package.json`);
const BASE_UI = require.resolve("@base-ui/react/package.json").replace(/\/package\.json$/, "");
const DOCS = `${BASE_UI}/docs/react/components`;

/* ── the four packages ─────────────────────────────────────────────────── */

type PkgSpec = {
  id: string;
  /** Class prefix, the one this package's own components already use. */
  prefix: string;
  /** Names the package's own components have already taken. */
  alias: Record<string, string>;
};

const PACKAGES: PkgSpec[] = [
  { id: "ovadev", prefix: "ova-", alias: {} },
  { id: "ticketova", prefix: "tova-", alias: {} },
  { id: "internal", prefix: "ui-", alias: {} },
];

/** Where each component sits in the catalog sidebar. */
const GROUPS: Record<string, string> = {
  button: "Actions", toggle: "Actions", "toggle-group": "Actions", toolbar: "Actions",
  checkbox: "Forms", "checkbox-group": "Forms", radio: "Forms", field: "Forms", fieldset: "Forms",
  form: "Forms", input: "Forms", "number-field": "Forms", "otp-field": "Forms", select: "Forms",
  combobox: "Forms", autocomplete: "Forms", slider: "Forms", switch: "Forms",
  dialog: "Overlays", "alert-dialog": "Overlays", drawer: "Overlays", popover: "Overlays",
  tooltip: "Overlays", "preview-card": "Overlays", menu: "Overlays", "context-menu": "Overlays",
  menubar: "Overlays", "navigation-menu": "Overlays", toast: "Overlays",
  accordion: "Disclosure", collapsible: "Disclosure", tabs: "Disclosure",
  meter: "Feedback", progress: "Feedback",
  avatar: "Layout", separator: "Layout", "scroll-area": "Layout",
};

const GROUP_ORDER = ["Actions", "Forms", "Overlays", "Disclosure", "Feedback", "Layout"];

/** Components whose module pulls in a second Base UI entry point. Radio only
 *  makes sense with its group, and Base UI documents the two together. */
const EXTRA_ENTRY_POINTS: Record<string, string[]> = { radio: ["radio-group"] };

/* ── reading Base UI: its runtime shape and its own documentation ──────── */

type Part = { name: string; classable: boolean };
type Module = { name: string; sub: string; single: boolean; parts: Part[] };
type Comp = { slug: string; title: string; group: string; modules: Module[]; anatomy: string; demo: string };

/** The parts a namespace actually exports, read off the module. A component
 *  that is one element rather than a namespace is a forwardRef object: it has
 *  no part names on it, only `render`. */
async function partsOf(sub: string): Promise<{ name: string; keys: string[] }> {
  const ns = await import(require.resolve(`@base-ui/react/${sub}`));
  const name = Object.keys(ns).filter((k) => k !== "default" && k !== "__esModule")[0];
  return { name, keys: Object.keys(ns[name]).filter((k) => /^[A-Za-z]/.test(k)) };
}

function apiSections(md: string): { name: string; body: string }[] {
  const tail = md.slice(md.indexOf("\n## API reference"));
  const marks: { name: string; at: number }[] = [];
  for (const m of tail.matchAll(/^### (.+)$/gm)) marks.push({ name: m[1].trim(), at: m.index! });
  return marks.map((mk, k) => ({ name: mk.name, body: tail.slice(mk.at, k + 1 < marks.length ? marks[k + 1].at : tail.length) }));
}

function fencedAfter(md: string, heading: string): string {
  const fence = md.indexOf("```", md.indexOf(heading));
  const start = md.indexOf("\n", fence) + 1;
  return md.slice(start, md.indexOf("```", start)).trim();
}

/** The first CSS-Modules demo of a component: a whole index.tsx. */
function firstDemo(md: string): string {
  const at = md.indexOf("/* index.tsx */", md.indexOf("\n### CSS Modules"));
  return md.slice(at, md.indexOf("\n```", at)).trim();
}

async function readComponents(): Promise<Comp[]> {
  const out: Comp[] = [];
  for (const file of readdirSync(DOCS).filter((f) => f.endsWith(".md")).sort()) {
    const slug = file.replace(/\.md$/, "");
    const md = readFileSync(`${DOCS}/${file}`, "utf8");
    // A part takes a className exactly when it renders an element of its own,
    // and the reference says so by listing the prop.
    const classable = new Map<string, boolean>();
    for (const s of apiSections(md)) if (!s.name.includes(".")) classable.set(s.name, /^\| className\s/m.test(s.body));

    const modules: Module[] = [];
    for (const sub of [slug, ...(EXTRA_ENTRY_POINTS[slug] ?? [])]) {
      const { name, keys } = await partsOf(sub);
      const single = !keys.some((k) => /^[A-Z]/.test(k));
      modules.push({ name, sub, single, parts: single ? [] : keys.map((p) => ({ name: p, classable: classable.get(p) === true })) });
    }
    out.push({
      slug,
      title: /^title: (.+)$/m.exec(md)![1],
      group: GROUPS[slug],
      modules,
      anatomy: fencedAfter(md, "\n## Anatomy"),
      demo: firstDemo(md),
    });
  }
  return out;
}

/* ── names ─────────────────────────────────────────────────────────────── */

const kebab = (s: string) => s.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const pascal = (s: string) => s.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");

/** The Root and the one-element components carry the component's own class;
 *  every other part hangs off it. */
const classOf = (prefix: string, m: Module, part?: string) =>
  !part || part === "Root" ? `${prefix}${kebab(m.name)}` : `${prefix}${kebab(m.name)}-${kebab(part)}`;

/** Every hook a component puts on the DOM, with the part it belongs to. */
const hooksOf = (prefix: string, comp: Comp) =>
  comp.modules.flatMap((m) =>
    m.single
      ? [{ cls: classOf(prefix, m), part: m.name }]
      : m.parts.filter((p) => p.classable).map((p) => ({ cls: classOf(prefix, m, p.name), part: `${m.name}.${p.name}` })),
  );

/* ── what gets written ─────────────────────────────────────────────────── */

const PART_HELPER = `/* Put a class on a Base UI part without changing anything else about it.
 *
 * Base UI parts take \`className\` either as a string or as a function of the
 * part's own state, and both have to keep working — so the brand class is
 * prepended to whichever the caller passed. The result is cast back to the
 * part's own type, so the wrapper is invisible: same props, same generics,
 * same ref.
 *
 * Generated by scripts/gen-baseui.ts, and identical in all four packages —
 * the libraries stay independent, with no shared core to import. */
import { createElement, forwardRef } from "react";
import type { ElementType } from "react";

type ClassName = string | ((state: never) => string | undefined) | undefined;

const join = (brand: string, own: string | undefined) => (own ? \`\${brand} \${own}\` : brand);

export function part<T>(Part: T, brand: string): T {
  const Wrapped = forwardRef<unknown, { className?: ClassName }>(function BrandPart(props, ref) {
    const own = props.className;
    const className =
      typeof own === "function" ? (state: never) => join(brand, own(state)) : join(brand, own);
    // \`ref\` first: on React 19 it arrives in props and wins, on React 18 the
    // forwarded one is the only one there is.
    return createElement(Part as unknown as ElementType, { ref, ...props, className });
  });
  Wrapped.displayName = brand;
  return Wrapped as unknown as T;
}
`;

/** The anatomy, indented into a block comment. Base UI writes JSX comments in
 *  some of them, and a `*​/` inside would close the comment early. */
function anatomyComment(comp: Comp): string {
  return comp.anatomy
    .split("\n")
    .filter((l) => !l.trimStart().startsWith("import") && !l.includes("{/*"))
    .join("\n")
    .trim()
    .replace(/\*\//g, "* /")
    .split("\n")
    .map((l) => `   ${l}`)
    .join("\n");
}

function wrapperSource(pkg: PkgSpec, comp: Comp): string {
  const imports = comp.modules.map((m) => `import { ${m.name} as ${m.name}Primitive } from "@base-ui/react/${m.sub}";`);
  const body = comp.modules.map((m) => {
    const exported = pkg.alias[m.name] ?? m.name;
    if (m.single) return `export const ${exported} = part(${m.name}Primitive, "${classOf(pkg.prefix, m)}");`;
    const lines = m.parts.map((p) =>
      p.classable
        ? `  ${p.name}: part(${m.name}Primitive.${p.name}, "${classOf(pkg.prefix, m, p.name)}"),`
        : `  ${p.name}: ${m.name}Primitive.${p.name},`,
    );
    return `export const ${exported} = {\n${lines.join("\n")}\n};`;
  });
  return `/* ${comp.title} — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/${comp.slug}.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
${anatomyComment(comp)}
*/
${imports.join("\n")}
import { part } from "./part";
import "../styles/${comp.slug}.css";

${body.join("\n\n")}
`;
}

function cssStub(pkg: PkgSpec, comp: Comp): string {
  const hooks = hooksOf(pkg.prefix, comp);
  const w = Math.max(...hooks.map((h) => h.cls.length));
  return `/* ${comp.title} — unstyled. These are every class the wrapper puts on the
   DOM; give them rules to make this component the brand's.

${hooks.map((h) => `   .${h.cls.padEnd(w)}  ${h.part}`).join("\n")}
*/
`;
}

/** The catalog example: Base UI's own demo with the CSS Modules taken out and
 *  the import pointed at the brand package. */
function exampleSource(pkg: PkgSpec, comp: Comp): string {
  const used: string[] = [];
  let src = comp.demo
    .replace(/^\/\* index\.tsx \*\/\n/, "")
    .replace(/^'use client';\n/m, "")
    .replace(/^import styles from '\.\/[^']+';\n/gm, "")
    .replace(/^[ \t]*className=\{styles\.[A-Za-z0-9_]+\}\n/gm, "")
    .replace(/ ?className=\{styles\.[A-Za-z0-9_]+\}/g, "")
    .replace(/^import \{ (\w+) \} from '@base-ui\/react\/[^']+';\n/gm, (_, name: string) => {
      const exported = pkg.alias[name] ?? name;
      used.push(exported === name ? name : `${exported} as ${name}`);
      return "";
    });
  // A demo that types a helper as `NavigationMenu.Link.Props` is reaching for
  // Base UI's type namespace, which the wrappers — plain objects — do not
  // carry. The props of the wrapped part say the same thing.
  const usesTypeNamespace = /\b\w+\.\w+\.(?:Props|State)\b/.test(src);
  src = src.replace(/\b(\w+)\.(\w+)\.(?:Props|State)\b/g, "React.ComponentProps<typeof $1.$2>");
  const needsReact = usesTypeNamespace || /^import \* as React from 'react';\n/m.test(src);
  src = src
    .replace(/^import \* as React from 'react';\n/m, "")
    .replace(/export default function \w+/, `export default function ${pascal(comp.slug)}Basic`)
    .replace(/^\n+/, "")
    .replace(/\n{3,}/g, "\n\n");
  return `${needsReact ? 'import * as React from "react";\n' : ""}import { ${used.join(", ")} } from "@ovadev-gmbh/ui-${pkg.id}";\n\n${src}\n`;
}

/** The generated half of a package's catalog page list. */
function registrySource(pkg: PkgSpec, comps: Comp[]): string {
  const imports = comps.flatMap((c) => {
    const n = `${pascal(c.slug)}Basic`;
    return [`import ${n} from "../examples/${pkg.id}/${n}";`, `import ${n}Src from "../examples/${pkg.id}/${n}.tsx?raw";`];
  });
  // The sidebar, the ⌘K menu and the pager all read this order, and reading
  // it off the doc file names would put Toggle Group above Toggle.
  const ordered = [...comps].sort((a, b) => GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group) || a.title.localeCompare(b.title));
  const entries = ordered.map((c) => {
    const n = `${pascal(c.slug)}Basic`;
    const names = c.modules.map((m) => pkg.alias[m.name] ?? m.name);
    // Where the package renamed the primitive, the page is named and
    // addressed after the export — otherwise ui-internal would have two
    // Buttons and two Toolbars, and the router could only reach one.
    const renamed = pkg.alias[c.modules[0].name];
    const title = renamed ?? c.title;
    const slug = renamed ? kebab(renamed) : c.slug;
    return `  {
    name: ${JSON.stringify(title)},
    slug: ${JSON.stringify(slug)},
    group: ${JSON.stringify(c.group)},
    imports: ${JSON.stringify(names)},
    examples: [
      {
        Component: ${n},
        source: ${n}Src,
      },
    ],
  },`;
  });
  return `/* The Base UI half of this package's catalog: one page per component, each
   showing Base UI's own demo unstyled. Generated by scripts/gen-baseui.ts —
   the hand-written entries live in ${pkg.id}.ts next to this file. */
import type { Entry } from "../types";
${imports.join("\n")}

export const BASE_UI_GROUPS = ${JSON.stringify(GROUP_ORDER)};

export const baseUiEntries: Entry[] = [
${entries.join("\n")}
];
`;
}

/* ── writing ───────────────────────────────────────────────────────────── */

function write(path: string, body: string, keepIf?: (existing: string) => boolean): boolean {
  mkdirSync(path.slice(0, path.lastIndexOf("/")), { recursive: true });
  if (!FORCE && keepIf && existsSync(path) && keepIf(readFileSync(path, "utf8"))) return false;
  writeFileSync(path, body);
  return true;
}

/** A stylesheet with a rule in it is the brand's work, not the scaffold's. */
const styled = (css: string) => css.replace(/\/\*[\s\S]*?\*\//g, "").includes("{");

const comps = await readComponents();
let written = 0;
let kept = 0;

for (const pkg of PACKAGES) {
  const src = `${ROOT}/packages/${pkg.id}/src`;
  write(`${src}/components/part.tsx`, PART_HELPER);
  for (const comp of comps) {
    write(`${src}/components/${comp.slug}.tsx`, wrapperSource(pkg, comp));
    write(`${src}/styles/${comp.slug}.css`, cssStub(pkg, comp), styled) ? written++ : kept++;
    written++;
  }
  write(
    `${src}/base-ui.ts`,
    `/* Every Base UI component, wrapped with this brand's classes. Generated by
   scripts/gen-baseui.ts; the styling lives in src/styles/, not here. */

${comps.map((c) => `export { ${c.modules.map((m) => pkg.alias[m.name] ?? m.name).join(", ")} } from "./components/${c.slug}";`).join("\n")}
`,
  );
  written += 3;

  // The three brand libraries had one hand-written Button; Base UI's takes its
  // place, so the old component and its stylesheet go.
  if (pkg.id !== "internal") for (const f of [`${src}/Button.tsx`, `${src}/button.css`]) if (existsSync(f)) rmSync(f);

  const site = `${ROOT}/site/src`;
  for (const comp of comps) {
    write(`${site}/examples/${pkg.id}/${pascal(comp.slug)}Basic.tsx`, exampleSource(pkg, comp));
    written++;
  }
  write(`${site}/registry/${pkg.id}.base-ui.ts`, registrySource(pkg, comps));
  written++;
}

console.log(`base-ui scaffold: ${comps.length} components × ${PACKAGES.length} packages — ${written} files written, ${kept} styled stylesheets kept`);
