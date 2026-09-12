---
name: intern-design
description: Design and build UI for Intern (Ovadev's internal tools: operations, billing, deployments, support, audit) with the @ovadev-gmbh/ui-internal design system. Use whenever a task touches an internal admin screen, table, form, console or panel — building new UI, restyling, reviewing a PR for brand fit, or answering "how should this look". Loads DESIGN.md (priorities, visual system, anti-patterns, the published API) and points at the catalog's Markdown pages.
---

# Intern design

Everything Intern-looking comes from one package and one document.

1. Read `packages/internal/DESIGN.md` in the brand repo, or `https://ovadev-gmbh.github.io/brand/internal/design.md` from anywhere. It is the authority: read it fully before the first line of UI.
2. For a specific component, read its Markdown page: `https://ovadev-gmbh.github.io/brand/internal/<slug>.md` (import line, demo, source). The index is `https://ovadev-gmbh.github.io/brand/internal/llms.txt`.
3. Build only with the package. Install it from GitHub Packages, import `@ovadev-gmbh/ui-internal/styles.css` as the Tailwind entry, import components from `@ovadev-gmbh/ui-internal`, icons from `@phosphor-icons/react`.

Rules that are not negotiable, in the words of DESIGN.md:

- Write with the semantic names (`bg-surface-hover`, `text-content-secondary`, `bg-brand text-content-inverse`: black carrying white); never a hex, never Tailwind's default palette, never `dark:`.
- One type style per element (`text-label-14`, `text-heading-16`), never a weight class beside it, never a made-up size.
- Materials draw edges; never a border on a material, never a card in a card.
- 2px corners on what acts and holds, square inside, pills only for status dots, avatars, switches. Black hairline rules, no shadows on the page.
- Colour only where it names a state; the primary button is black; figures in mono, right-aligned; every amount with its currency, every time exact.
- Default to stillness; `ease-brand` and the three durations only.

When reviewing existing UI, check it against the "Reject generated-design reflexes" list in DESIGN.md and name each hit.

To change the system itself (a token, a style, a component), work in the brand repo: foundations live in `packages/internal/src/foundations/*.ts` and are generated into CSS with `bun run foundations`; components in `packages/internal/src/components/ui/`; the catalog registry and Markdown mirror regenerate at build.
