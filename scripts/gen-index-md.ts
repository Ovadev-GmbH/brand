/* The chooser as Markdown: site/public/index.md, served at /brand.md (and
 * /brand/index.md), and the root llms.txt. One entry per brand, in the
 * chooser's order, each pointing at the brand's own introduction and index.
 * Run after gen-catalog-md.ts has written those.
 *
 *   bun run scripts/gen-index-md.ts */
import { existsSync, writeFileSync } from "node:fs";
import { BRANDS, ROOT, SITE } from "./lib/catalog";

const ORDER = ["ovadev", "ticketova", "januna"];

const md = [
  `# Ovadev Brand`, ``,
  `Design systems from Ovadev: one catalog per brand, each with its foundations, its assets and its components.`, ``,
  `---`, ``,
  `## Brands`, ``,
  ...ORDER.map((id) => {
    const b = BRANDS[id]!;
    const design = existsSync(`${ROOT}/packages/${id}/design`);
    return `- **${b.name}**, \`${b.pkg}\`: ${SITE}/${id}.md. Every page: ${SITE}/${id}/llms.txt.${design ? ` How to design with it: ${SITE}/${id}/design.md.` : ""}`;
  }),
  ``,
  `---`, ``,
  `## Markdown for agents`, ``,
  `Every page of the catalog is also Markdown: append \`.md\` to its URL (${SITE}/ovadev/button.md), or request it with an \`Accept: text/markdown\` header.`, ``,
].join("\n");

writeFileSync(`${ROOT}/site/public/index.md`, md);
writeFileSync(
  `${ROOT}/site/public/llms.txt`,
  [`# Ovadev brands`, ``, `- [All brands](${SITE}.md)`, ...ORDER.map((id) => `- [${BRANDS[id]!.name}](${SITE}/${id}/llms.txt): the ${BRANDS[id]!.name} design system`), ``].join("\n"),
);
console.log(`site/public/index.md and llms.txt: ${ORDER.length} brands`);
