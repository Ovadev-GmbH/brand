/* The catalog as Markdown: one file per page under site/public/<id>/, so
 * every page an agent can see in the browser it can also read at the same
 * path with `.md` — the way Geist does it — plus an llms.txt index.
 *
 *   bun run scripts/gen-catalog-md.ts januna */
import { mkdirSync, writeFileSync } from "node:fs";
import { BRANDS, ROOT, componentsOf, demoOf } from "./lib/catalog";
import { colorsMd, layoutMd, loadFoundations, materialsMd, typographyMd } from "./lib/foundations-md";

const ID = process.argv[2];
if (!ID) throw new Error("usage: gen-catalog-md.ts <package id>");
const brand = BRANDS[ID];
if (!brand) throw new Error(`unknown brand ${ID}`);
const BASE = `https://ovadev-gmbh.github.io/brand/${ID}`;
const out = `${ROOT}/site/public/${ID}`;
mkdirSync(out, { recursive: true });

const f = await loadFoundations(ID);
const components = componentsOf(ID);
const write = (slug: string, body: string) => writeFileSync(`${out}/${slug}.md`, body.trimEnd() + "\n");

write("colors", `# ${brand.name} colours\n\n${colorsMd(ID, f.colors)}`);
write("typography", `# ${brand.name} typography\n\n${typographyMd(f.typography)}`);
write("materials", `# ${brand.name} materials\n\n${materialsMd(f.materials)}`);
write("layout", `# ${brand.name} layout\n\n${layoutMd(ID, f.layout)}`);
write("icons", `# ${brand.name} icons\n\nHugeicons, the free set (6,704 icons, stroke rounded). Usage:\n\n\`\`\`tsx\nimport { HugeiconsIcon } from "@hugeicons/react";\nimport { Add01Icon } from "@hugeicons/core-free-icons";\n\n<HugeiconsIcon icon={Add01Icon} strokeWidth={2} />\n\`\`\`\n\nAn icon takes the colour of its text. Inside a button it is 16px at stroke 2; standalone 24px at stroke 1.5. Names end in \`Icon\`; browse them at ${BASE}/icons.`);

for (const c of components) {
  const demo = demoOf(ID, c.slug);
  write(c.slug, [
    `# ${c.name}`, ``,
    `Group: ${c.group}. Package: \`${brand.pkg}\`. Live: ${BASE}/${c.slug}`, ``,
    "```tsx", `import { ${c.exports.join(", ")} } from "${brand.pkg}";`, "```", ``,
    ...(demo ? [`## Example`, ``, "```tsx", demo.trim(), "```", ``] : []),
    `## Source`, ``, `The component as the package ships it, Base UI beneath, styled with the system's classes.`, ``, "```tsx", c.source.trim(), "```", ``,
  ].join("\n"));
}

const index = [
  `# ${brand.name} Design System`, ``,
  `> Januna's components, colours, type, materials and layout, as Markdown. Start with design.md: how to compose a Januna screen, and the published API.`, ``,
  `## Start here`, ``,
  `- [DESIGN.md](${BASE}/design.md): how to design for ${brand.name}, priorities, the visual system, anti-patterns, the published API`, ``,
  `## Foundations`, ``,
  ...["colors", "typography", "materials", "layout", "icons"].map((s) => `- [${s[0]!.toUpperCase() + s.slice(1)}](${BASE}/${s}.md)`), ``,
  `## Components`, ``,
  ...components.map((c) => `- [${c.name}](${BASE}/${c.slug}.md): ${c.exports.slice(0, 6).join(", ")}${c.exports.length > 6 ? ", …" : ""}`), ``,
].join("\n");
writeFileSync(`${out}/llms.txt`, index);
writeFileSync(`${ROOT}/site/public/llms.txt`, `# Ovadev brands\n\n- [${brand.name}](${BASE}/llms.txt): the ${brand.name} design system\n`);
console.log(`site/public/${ID}: ${components.length + 5} pages + llms.txt`);
