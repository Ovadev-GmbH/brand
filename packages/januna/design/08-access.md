## Accessibility and reflow

Use landmarks, one `h1` per screen, ordered headings, native controls with visible labels, semantic tables, and the package's components, which carry their ARIA. Every state has a word or an icon beside its colour. Focus is visible on everything focusable, in tab order that follows reading order. Contrast meets WCAG AA on both the sheet and the island; the ink levels are published so that it does.

Reflow before shrinking: rows stack, tables scroll locally in their own container, controls keep their size, type keeps its style. Give grid and flex children `min-width: 0`. Never conceal overflow to hide a layout problem. A screen must work at a phone's width, on a tablet at the lectern, and on a laptop, without a different design for each.
