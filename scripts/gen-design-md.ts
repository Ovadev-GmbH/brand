/* Assemble a brand's DESIGN.md: the hand-written sections in
 * packages/<id>/design/*.md, in order, with the published API generated
 * from the foundations and the component files between them. Written to
 * the package (it ships with it) and to the site (it is served at
 * /<id>/design.md).
 *
 *   bun run scripts/gen-design-md.ts januna */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { BRANDS, ROOT, componentsOf } from "./lib/catalog";
import { colorsMd, layoutMd, loadFoundations, materialsMd, typographyMd } from "./lib/foundations-md";

const ID = process.argv[2];
if (!ID) throw new Error("usage: gen-design-md.ts <package id>");
const brand = BRANDS[ID];
if (!brand) throw new Error(`unknown brand ${ID}`);

const dir = `${ROOT}/packages/${ID}/design`;
const parts = readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
const f = await loadFoundations(ID);
const components = componentsOf(ID);

const api = [
  `## Use the published API`, ``,
  `Install the package and import its stylesheet as the app's Tailwind entry; nothing else is needed.`, ``,
  "```css", `@import "${brand.pkg}/styles.css";`, "```", ``,
  "```tsx", `import { Button, Dialog, DialogTrigger } from "${brand.pkg}";`, "```", ``,
  `Every colour, type style, material and layout token below is a Tailwind class in the app. Tailwind's own palette is cleared: \`bg-zinc-500\` does not exist, and that is the point.`, ``,
  colorsMd(ID, f.colors), typographyMd(f.typography), materialsMd(f.materials), layoutMd(ID, f.layout),
  `### Components`, ``,
  `${components.length} components on Base UI. Each is documented with a live demo and its source at https://ovadev-gmbh.github.io/brand/${ID}/<slug>, and as Markdown at the same path with \`.md\`. The exported names are the parts you compose.`, ``,
  ...(() => {
    const byGroup = new Map<string, typeof components>();
    for (const c of components) byGroup.set(c.group, [...(byGroup.get(c.group) ?? []), c]);
    return [...byGroup].flatMap(([g, cs]) => [`**${g}.**`, ``, ...cs.map((c) => `- ${c.name} (\`${c.slug}\`): ${c.exports.join(", ")}`), ``]);
  })(),
  `### Icons`, ``, `${brand.icons.library}. ${brand.icons.note} The full set: https://ovadev-gmbh.github.io/brand/${ID}/icons`, ``, "```tsx", brand.icons.usage, "```", ``,
].join("\n");

const doc = parts.map((p) => readFileSync(`${dir}/${p}`, "utf8").trim()).flatMap((s, i) => (parts[i]!.startsWith("05") ? [s, api] : [s])).join("\n\n") + "\n";

writeFileSync(`${ROOT}/packages/${ID}/DESIGN.md`, doc);
mkdirSync(`${ROOT}/site/public/${ID}`, { recursive: true });
writeFileSync(`${ROOT}/site/public/${ID}/design.md`, doc);
console.log(`packages/${ID}/DESIGN.md: ${doc.split(/\s+/).length} words`);
