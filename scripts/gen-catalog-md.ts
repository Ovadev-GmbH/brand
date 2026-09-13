/* The catalog as Markdown: every page an agent can see in the browser it can
 * also read at the same path with `.md`, the way Geist does it, plus an
 * llms.txt index per brand. The introduction is site/public/<id>.md
 * (/brand/<id>.md), every page under it site/public/<id>/<slug>.md.
 *
 * A brand with foundations (packages/<id>/src/foundations) is written from
 * them and from its component files. A brand without (Ovadev, TICKETOVA) is
 * written from what its catalog pages show: the chrome in site/src/brands.ts
 * and the Base UI registry with its example files.
 *
 *   bun run scripts/gen-catalog-md.ts januna */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import type { Doc } from "../site/src/types";
import { BRANDS, ROOT, SITE, componentsOf, demoOf } from "./lib/catalog";
import { colorsMd, layoutMd, loadFoundations, materialsMd, typographyMd } from "./lib/foundations-md";

const ID = process.argv[2];
if (!ID) throw new Error("usage: gen-catalog-md.ts <package id>");
const brand = BRANDS[ID];
if (!brand) throw new Error(`unknown brand ${ID}`);
const BASE = `${SITE}/${ID}`;
const out = `${ROOT}/site/public/${ID}`;
mkdirSync(out, { recursive: true });
const write = (slug: string, body: string) => writeFileSync(`${out}/${slug}.md`, body.trimEnd() + "\n");
const table = (head: string[], rows: string[][]) =>
  [`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");

type Mark = { file: string; name: string; kind: string; note?: string; colour?: string };
type Chrome = {
  marks?: Mark[];
  og?: string;
  source: string;
  swatches: { name: string; token: string; value: string }[];
  type: { name: string; family: string; weight: number; size: string; note: string }[];
  lines?: { colors?: string; typography?: string; icons?: string; components?: string };
  materials?: unknown;
  layout?: unknown;
  icons?: { library: string };
};
const { CHROME } = (await import(`${ROOT}/site/src/brands.ts`)) as { CHROME: Record<string, Chrome> };
const chrome = CHROME[ID]!;
const lines = chrome.lines ?? {};

type Page = { slug: string; name: string; line: string };
type Component = { slug: string; name: string; group: string; exports: string[] };
const foundations: Page[] = [];
const assets: Page[] = [];
let components: Component[] = [];

/* ── foundations and assets ─────────────────────────────────────────── */

if (existsSync(`${ROOT}/packages/${ID}/src/foundations`)) {
  const f = await loadFoundations(ID);
  write("colors", `# ${brand.name} colours\n\n${colorsMd(ID, f.colors)}`);
  write("typography", `# ${brand.name} typography\n\n${typographyMd(f.typography)}`);
  write("materials", `# ${brand.name} materials\n\n${materialsMd(f.materials)}`);
  write("layout", `# ${brand.name} layout\n\n${layoutMd(ID, f.layout)}`);
  foundations.push(
    { slug: "colors", name: "Colors", line: lines.colors ?? "The brand's palette." },
    { slug: "typography", name: "Typography", line: lines.typography ?? "The brand's faces." },
    { slug: "materials", name: "Materials", line: "Radius, stroke and shadow, by elevation." },
    { slug: "layout", name: "Layout", line: "Spacing, corners and motion." },
  );
} else {
  write("colors", [
    `# ${brand.name} colours`, ``,
    `The brand's colours as its stylesheet ships them. Source: ${chrome.source}.`, ``,
    table(["Name", "Token", "Value"], chrome.swatches.map((s) => [s.name, `\`${s.token}\``, `\`${s.value}\``])),
  ].join("\n"));
  write("typography", [
    `# ${brand.name} typography`, ``,
    table(["Style", "Family", "Weight", "Size", "Note"], chrome.type.map((t) => [t.name, `\`${t.family}\``, String(t.weight), t.size, t.note])),
  ].join("\n"));
  foundations.push(
    { slug: "colors", name: "Colors", line: lines.colors ?? "The brand's palette." },
    { slug: "typography", name: "Typography", line: lines.typography ?? "The brand's faces." },
  );
}

if (chrome.marks?.length) {
  const file = (name: string) => (existsSync(`${ROOT}/site/public/brand/${name}`) ? `${SITE}/brand/${name}` : undefined);
  write("brand-assets", [
    `# ${brand.name} brand assets`, ``,
    `The marks as they ship. Each is an SVG; the page at ${BASE}/brand-assets also exports PNG and builds a favicon bundle from the icon.`, ``,
    ...chrome.marks.flatMap((m) => {
      const svg = file(`${m.colour ?? m.file}.svg`);
      const mono = m.colour ? file(`${m.file}.svg`) : undefined;
      return [
        `## ${m.name}`, ``,
        ...(m.note ? [m.note, ``] : []),
        ...(svg ? [`- SVG: ${svg}`] : []),
        ...(mono ? [`- Single colour, in the surrounding ink: ${mono}`] : []),
        ``,
      ];
    }),
    ...(chrome.og && file(`${chrome.og}.png`)
      ? [`## OG image`, ``, `What a link to the brand unfurls into, 1200 × 630: ${file(`${chrome.og}.png`)}`, ``]
      : []),
  ].join("\n"));
  assets.push({ slug: "brand-assets", name: "Brand Assets", line: "The marks, and how to place them." });
}

if (chrome.icons && brand.icons.note) {
  write("icons", `# ${brand.name} icons\n\n${brand.icons.library}. ${brand.icons.note} An icon takes the colour of its text. Browse them at ${BASE}/icons.\n\n\`\`\`tsx\n${brand.icons.usage}\n\`\`\``);
  assets.push({ slug: "icons", name: "Icons", line: lines.icons ?? `${brand.icons.library}, as the components draw it.` });
}

/* ── components ─────────────────────────────────────────────────────── */

if (existsSync(`${ROOT}/packages/${ID}/src/components/ui`)) {
  const cs = componentsOf(ID);
  /* A doc's text links catalog pages as /<id>/<slug>; in Markdown they point
     at the page's own twin. Pipes in a type would split a table cell. */
  const prose = (text: string) => text.replace(/\]\((\/[^)]+)\)/g, (_, path: string) => `](${SITE}${path}.md)`);
  const cell = (text: string) => text.replace(/\|/g, "\\|");
  const fence = (lang: string, code: string) => ["```" + lang, code.trim(), "```", ``];

  for (const c of cs) {
    const demo = demoOf(ID, c.slug);
    const oneLine = `import { ${c.exports.join(", ")} } from "${brand.pkg}";`;
    const importLine = oneLine.length <= 80 ? oneLine : `import {\n${c.exports.map((n) => `  ${n},`).join("\n")}\n} from "${brand.pkg}";`;
    const source = [`## Source`, ``, `The component as the package ships it, Base UI beneath, styled with the system's classes.`, ``, ...fence("tsx", c.source)];
    const docPath = `${ROOT}/site/src/docs/${ID}/${c.slug}.ts`;

    if (!existsSync(docPath)) {
      write(c.slug, [
        `# ${c.name}`, ``,
        `Group: ${c.group}. Package: \`${brand.pkg}\`. Live: ${BASE}/${c.slug}`, ``,
        ...fence("tsx", importLine),
        ...(demo ? [`## Example`, ``, ...fence("tsx", demo)] : []),
        ...source,
      ].join("\n"));
      continue;
    }

    /* The same page as the catalog shows, in the same order. */
    const doc = (await import(docPath)).default as Doc;
    const example = (name: string) => readFileSync(`${ROOT}/site/src/examples/${ID}/${c.slug}/${name}.tsx`, "utf8");
    write(c.slug, [
      `# ${c.name}`, ``,
      prose(doc.description), ``,
      `Group: ${c.group}. Package: \`${brand.pkg}\`. Live: ${BASE}/${c.slug}`, ``,
      ...(demo ? fence("tsx", demo) : []),
      `## Installation`, ``,
      `Add the package and Base UI, which it is built on. The \`@ovadev-gmbh\` scope is served from GitHub Packages, so the registry needs a token that can read packages.`, ``,
      ...fence("bash", `bun add ${brand.pkg} @base-ui/react`),
      `Import the stylesheet as the app's Tailwind entry.`, ``,
      ...fence("css", `@import "${brand.pkg}/styles.css";`),
      `## Usage`, ``,
      ...fence("tsx", importLine),
      ...fence("tsx", doc.usage),
      ...(doc.composition ? [`## Composition`, ``, `The parts nest like this:`, ``, ...fence("text", doc.composition)] : []),
      ...doc.sections.flatMap((s) => [
        `## ${s.title}`, ``,
        ...(s.text ? [prose(s.text), ``] : []),
        ...(s.code ? fence("tsx", s.code) : []),
        ...(s.example ? fence("tsx", example(s.example)) : []),
      ]),
      ...(doc.api?.length
        ? [
            `## API Reference`, ``,
            ...doc.api.flatMap((part) => [
              `### ${part.name}`, ``,
              prose(part.text), ``,
              ...(part.props?.length ? [table(["Prop", "Type", "Default"], part.props.map((row) => row.map((v) => `\`${cell(v)}\``))), ``] : []),
            ]),
            ...(doc.links?.api ? [`Everything else is Base UI's: ${doc.links.api}`, ``] : []),
          ]
        : []),
      ...source,
    ].join("\n"));
  }
  components = cs;
} else {
  /* The Base UI registry is generated TypeScript that imports TSX, so it is
     read as text: each entry's name, slug, group and imports, and the example
     files its sources point at. */
  const reg = readFileSync(`${ROOT}/site/src/registry/${ID}.base-ui.ts`, "utf8");
  const files = new Map([...reg.matchAll(/import (\w+) from "\.\.\/examples\/[\w-]+\/([\w-]+\.tsx)\?raw";/g)].map((m) => [m[1]!, m[2]!]));
  const entries = [
    ...reg.matchAll(/name: "([^"]+)",\s*slug: "([^"]+)",\s*group: "([^"]+)",\s*(?:imports: \[([^\]]*)\],\s*)?examples: \[([\s\S]*?)\n    \],/g),
  ];
  const declared = (reg.match(/slug: "/g) ?? []).length;
  if (entries.length !== declared) throw new Error(`${ID}.base-ui.ts: read ${entries.length} of ${declared} entries`);
  for (const m of entries) {
    const [name, slug, group] = [m[1]!, m[2]!, m[3]!];
    const exports = m[4] ? [...m[4].matchAll(/"([^"]+)"/g)].map((x) => x[1]!) : [name];
    const examples = [...m[5]!.matchAll(/source: (\w+)/g)].map((x) => readFileSync(`${ROOT}/site/src/examples/${ID}/${files.get(x[1]!)}`, "utf8"));
    write(slug, [
      `# ${name}`, ``,
      `Group: ${group}. Package: \`${brand.pkg}\`. Live: ${BASE}/${slug}`, ``,
      "```tsx", `import { ${exports.join(", ")} } from "${brand.pkg}";`, "```", ``,
      ...examples.flatMap((src, i) => [examples.length > 1 ? `## Example ${i + 1}` : `## Example`, ``, "```tsx", src.trim(), "```", ``]),
    ].join("\n"));
    components.push({ slug, name, group, exports });
  }
}

/* ── the introduction and the index ─────────────────────────────────── */

const design = existsSync(`${ROOT}/packages/${ID}/design`);
const byGroup = new Map<string, Component[]>();
for (const c of components) byGroup.set(c.group, [...(byGroup.get(c.group) ?? []), c]);
const door = (p: Page) => `- **${p.name}**: ${p.line} See ${BASE}/${p.slug}.md`;

writeFileSync(`${ROOT}/site/public/${ID}.md`, [
  `# ${brand.name} Design System`, ``,
  `${brand.name}'s ${foundations.map((p) => p.name.toLowerCase()).join(", ")}${assets.length ? `, ${assets.map((p) => p.name.toLowerCase()).join(" and ")}` : ""}, and ${components.length} components, published as \`${brand.pkg}\`.`, ``,
  `---`, ``,
  `## Foundations`, ``, ...foundations.map(door), ``,
  ...(assets.length ? [`---`, ``, `## Assets`, ``, ...assets.map(door), ``] : []),
  `---`, ``,
  `## Components`, ``,
  `${lines.components ?? `${components.length} building blocks on Base UI.`} Import them from the package:`, ``,
  "```tsx", `import { ${components.slice(0, 3).map((c) => c.exports[0]).join(", ")} } from "${brand.pkg}";`, "```", ``,
  ...[...byGroup].flatMap(([g, cs]) => [`**${g}.** ${cs.map((c) => `[${c.name}](${BASE}/${c.slug}.md)`).join(", ")}`, ``]),
  `---`, ``,
  `## Markdown for agents`, ``,
  `Every page of this catalog is also Markdown: append \`.md\` to its URL (for example ${BASE}/colors.md), or request it with an \`Accept: text/markdown\` header.${design ? ` How to design with ${brand.name}: ${BASE}/design.md.` : ""} Every page of this brand: ${BASE}/llms.txt. Every brand: ${SITE}.md.`, ``,
].join("\n"));

writeFileSync(`${out}/llms.txt`, [
  `# ${brand.name} Design System`, ``,
  `> ${brand.name}'s foundations${assets.length ? ", assets" : ""} and components, as Markdown.${design ? " Start with design.md: how to compose a screen, and the published API." : ""}`, ``,
  `## Start here`, ``,
  `- [Introduction](${SITE}/${ID}.md): what the system is made of`,
  ...(design ? [`- [DESIGN.md](${BASE}/design.md): how to design for ${brand.name}, priorities, the visual system, anti-patterns, the published API`] : []),
  ``,
  `## Foundations`, ``, ...foundations.map((p) => `- [${p.name}](${BASE}/${p.slug}.md)`), ``,
  ...(assets.length ? [`## Assets`, ``, ...assets.map((p) => `- [${p.name}](${BASE}/${p.slug}.md)`), ``] : []),
  `## Components`, ``,
  ...components.map((c) => `- [${c.name}](${BASE}/${c.slug}.md): ${c.exports.slice(0, 6).join(", ")}${c.exports.length > 6 ? ", …" : ""}`), ``,
].join("\n"));

console.log(`site/public/${ID}: introduction, ${foundations.length + assets.length} foundation and asset pages, ${components.length} components, llms.txt`);
