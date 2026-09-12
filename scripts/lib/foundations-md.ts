/* The foundations of a package rendered as Markdown, for DESIGN.md and the
 * catalog's Markdown mirror. One function per foundation; the same text in
 * both places, so an agent reading either gets the same system. */
import { ROOT, BRANDS } from "./catalog";

export async function loadFoundations(id: string) {
  const base = `${ROOT}/packages/${id}/src/foundations`;
  return {
    colors: await import(`${base}/colors.ts`),
    typography: await import(`${base}/typography.ts`),
    materials: await import(`${base}/materials.ts`),
    layout: await import(`${base}/layout.ts`),
  };
}

const table = (head: string[], rows: string[][]) =>
  [`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");

export function colorsMd(id: string, f: Awaited<ReturnType<typeof loadFoundations>>["colors"]): string {
  const p = BRANDS[id]!.prefix;
  const out: string[] = [];
  out.push(`### Semantic colours`, ``, `Write with these. Each is a Tailwind colour (\`bg-surface-hover\`, \`text-content-secondary\`, \`bg-status-danger/10\`) and a custom property (\`--${p}-surface-hover\`).`, ``);
  for (const g of f.SEMANTIC) {
    out.push(`**${g.name}.** ${g.note}`, ``, table(["Token", "Step", "Use"], g.tokens.map((t: { token: string; ref: string; use: string }) => [`\`${t.token}\``, `\`${t.ref}\``, t.use])), ``);
  }
  out.push(`### Scales`, ``, `Ten steps each, the same roles on every scale. Reach for a step (\`bg-green-200\`, \`--${p}-gray-700\`) only for an exact colour a semantic name does not cover.`, ``);
  out.push(table(["Steps", "Role"], f.ROLES.map((r: { steps: number[]; name: string; use: string }) => [r.steps.map((s) => s / 100).join(", "), `${r.name}: ${r.use}`])), ``);
  out.push(table(["Scale", "Note", "700"], f.SCALES.map((s: { id: string; name: string; note: string; steps: Record<number, string> }) => [`\`${s.id}\``, s.note, `\`${s.steps[700]}\``])), ``);
  out.push(`Backgrounds: \`background-100\` ${f.BACKGROUNDS[100].value} (${f.BACKGROUNDS[100].use}) and \`background-200\` ${f.BACKGROUNDS[200].value} (${f.BACKGROUNDS[200].use})`, ``);
  return out.join("\n");
}

export function typographyMd(f: Awaited<ReturnType<typeof loadFoundations>>["typography"]): string {
  const out: string[] = [`### Type styles`, ``, `${f.FACES.sans.name} for everything, ${f.FACES.mono.name} for figures and code. One class sets size, line height, tracking and weight; never add a weight class beside one. \`<strong>\` inside a style is its modifier.`, ``];
  for (const g of f.GROUPS) {
    out.push(`**${g.name}.** ${g.note}`, ``, table(["Class", "Size / line", "Weight", "Use"], g.styles.map((s: { cls: string; size: number; line: number; weight: number; use?: string }) => [`\`${s.cls}\``, `${s.size} / ${s.line}`, String(s.weight), s.use ?? ""])), ``);
  }
  return out.join("\n");
}

export function materialsMd(f: Awaited<ReturnType<typeof loadFoundations>>["materials"]): string {
  const rows = (ms: { cls: string; radius: number; use: string }[]) => table(["Class", "Radius", "Use"], ms.map((m) => [`\`${m.cls}\``, `${m.radius}px`, m.use]));
  return [
    `### Materials`, ``,
    `A material sets radius, fill, stroke and shadow together. The stroke is a hairline in the shadow: never add a border to a material.`, ``,
    `**Surface.** On the page.`, ``, rows(f.SURFACE), ``,
    `**Floating.** Above the page.`, ``, rows(f.FLOATING), ``,
    `**Tints.** The small material with a colour in its ring.`, ``, rows(f.TINTS), ``,
    ...f.PRACTICES.flatMap((p: { name: string; items: string[] }) => [`**${p.name}.**`, ``, ...p.items.map((i) => `- ${i}`), ``]),
  ].join("\n");
}

export function layoutMd(id: string, f: Awaited<ReturnType<typeof loadFoundations>>["layout"]): string {
  const p = BRANDS[id]!.prefix;
  const rows = (ts: { token: string; value: string; use: string }[], cls: (t: string) => string) =>
    table(["Token", "Tailwind", "Value", "Use"], ts.map((t) => [`\`--${p}-${t.token}\``, `\`${cls(t.token)}\``, `\`${t.value}\``, t.use]));
  return [
    `### Layout`, ``,
    `**Spacing.** The steps a layout is made of.`, ``, rows(f.SPACING, (t) => `p-${t} / gap-${t}`), ``,
    `**Radius.**`, ``, rows(f.RADIUS, (t) => `rounded-${t.replace("radius-", "")}`), ``,
    `**Motion.**`, ``, rows(f.MOTION, (t) => (t.startsWith("ease") ? "ease-brand" : t)), ``,
    ...f.PRACTICES.map((i: string) => `- ${i}`), ``,
  ].join("\n");
}
