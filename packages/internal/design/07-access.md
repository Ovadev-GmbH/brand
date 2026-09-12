## Accessibility and reflow

Use landmarks, one `h1` per screen, ordered headings, native controls with visible labels, semantic tables with header cells, and the package's components, which carry their ARIA. Every state has a word or an icon beside its colour. Focus is visible on everything focusable, in tab order that follows reading order; a tool is driven from the keyboard more than a product is, so shortcuts are documented in `Kbd` where they exist. Contrast meets WCAG AA; the ink levels are published so that it does.

Reflow before shrinking: rows stack, tables scroll locally in their own container, controls keep their size, type keeps its style. Give grid and flex children `min-width: 0`. Never conceal overflow. A screen must work on a laptop and at a narrow width without a different design for each.
