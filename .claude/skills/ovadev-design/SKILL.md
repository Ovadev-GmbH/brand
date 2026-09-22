---
name: ovadev-design
description: Design and build UI for Ovadev (the company's own surfaces: ova.dev, its brand pages, contact, blog, product pages, status) with the @ovadev-gmbh/ui-ovadev design system. Use whenever a task touches an Ovadev page, component, form, list, card or visual copy — building new UI, restyling, reviewing a PR for brand fit, or answering "how should this look". Loads DESIGN.md (priorities, visual system, anti-patterns, the published API) and points at the catalog's Markdown pages.
---

# Ovadev design

Everything Ovadev-looking comes from one package and one document.

1. Read `packages/ovadev/DESIGN.md` in the brand repo, or `https://intern.ova.dev/brand/ovadev/design.md` from anywhere. It is the authority: read it fully before the first line of UI.
2. For a specific component, read its Markdown page: `https://intern.ova.dev/brand/ovadev/<slug>.md` (import line, demo, source). The index is `https://intern.ova.dev/brand/ovadev/llms.txt`.
3. Build only with the package. Install it from GitHub Packages, import `@ovadev-gmbh/ui-ovadev/styles.css` as the Tailwind entry, import components from `@ovadev-gmbh/ui-ovadev`, icons from `@ovadev-gmbh/ui-ovadev/icons`, whole screens (app shell, auth, error pages, stats) from `@ovadev-gmbh/ui-ovadev/blocks`. Never install or import Base UI or Lucide in the app; the package brings both.

Rules that are not negotiable, in the words of DESIGN.md:

- Write with the semantic names (`bg-surface-hover`, `text-content-secondary`, `bg-brand text-content-inverse`: ink carrying paper); never a hex, never Tailwind's default palette, never `dark:`. Two modes, dark by default and light with `data-theme="light"` on `<html>`; the tokens switch, so a class is written once and a line or tint is `gray-alpha`, never `white-alpha`.
- One type style per element (`text-label-14`, `text-heading-54`), never a weight class beside it, never a made-up size. Geist for everything; there is no second face.
- Materials draw edges; never a border on a material, never a card in a card. The one shadow is the cut, 8px 8px, no blur, only on what floats.
- Corners are hard everywhere; `rounded-pill` is for a switch and nothing else.
- Red is a signal, not a colour to design with: one `bg-brand-signal` block per screen, seated into a corner or an edge, never type, never a button, never twice. Type on the block is white. The primary button is ink.
- Default to stillness; what moves is a translate on one axis with `ease-brand` and the three durations. Nothing fades, scales, blurs, bounces or rotates.
- The mark comes from the brand assets, keeps one cell of clear space, and is never rounded, rotated, recoloured, glowed, boxed or stretched.

When reviewing existing UI, check it against the "Reject generated-design reflexes" list in DESIGN.md and name each hit.

To change the system itself (a token, a style, a component), work in the brand repo: foundations live in `packages/ovadev/src/foundations/*.ts` and are generated into CSS with `bun run foundations`; components in `packages/ovadev/src/components/ui/`; the catalog registry and Markdown mirror regenerate at build.
