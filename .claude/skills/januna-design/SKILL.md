---
name: januna-design
description: Design and build UI for Januna (the restaurant reservations product) with the @ovadev-gmbh/ui-januna design system. Use whenever a task touches a Januna screen, component, page, form, e-mail-like surface or visual copy — building new UI, restyling, reviewing a PR for brand fit, or answering "how should this look". Loads DESIGN.md (priorities, visual system, anti-patterns, the published API) and points at the catalog's Markdown pages.
---

# Januna design

Everything Januna-looking comes from one package and one document.

1. Read `packages/januna/DESIGN.md` in the brand repo, or `https://ovadev-gmbh.github.io/brand/januna/design.md` from anywhere. It is the authority: read it fully before the first line of UI.
2. For a specific component, read its Markdown page: `https://ovadev-gmbh.github.io/brand/januna/<slug>.md` (import line, demo, source). The index is `https://ovadev-gmbh.github.io/brand/januna/llms.txt`.
3. Build only with the package. Install it from GitHub Packages, import `@ovadev-gmbh/ui-januna/styles.css` as the Tailwind entry, import components from `@ovadev-gmbh/ui-januna`, icons from `@hugeicons/react` + `@hugeicons/core-free-icons`.

Rules that are not negotiable, in the words of DESIGN.md:

- Write with the semantic names (`bg-surface-hover`, `text-content-secondary`, `bg-brand text-content-inverse`); never a hex, never Tailwind's default palette, never `dark:`.
- One type style per element (`text-label-14`, `text-heading-16`), never a weight class beside it, never a made-up size.
- Materials draw edges; never a border on a material, never a card in a card.
- 12px corners on what acts and holds, pills only for badges, switches, chips, avatars.
- One green thing acting per view; selection is shade, not colour; taupe on green, never white.
- Default to stillness; `ease-brand` and the three durations only.

When reviewing existing UI, check it against the "Reject generated-design reflexes" list in DESIGN.md and name each hit.

To change the system itself (a token, a style, a component), work in the brand repo: foundations live in `packages/januna/src/foundations/*.ts` and are generated into CSS with `bun run foundations`; components in `packages/januna/src/components/ui/`; the catalog registry and Markdown mirror regenerate at build.
