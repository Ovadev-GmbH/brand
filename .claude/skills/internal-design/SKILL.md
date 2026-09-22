---
name: internal-design
description: Design and build UI for Internal (Ovadev's internal tools: operations, billing, deployments, support, audit). Internal is Ovadev's design system in light mode, so this hands over to ovadev-design. Use whenever a task touches an internal admin screen, table, form, console or panel.
---

# Internal design

Internal is Ovadev in light mode. There is no separate system: follow the `ovadev-design` skill and `packages/ovadev/DESIGN.md` (or `https://intern.ova.dev/brand/ovadev/design.md`), with these differences for a tool:

- Existing tools import `@ovadev-gmbh/ui-internal/styles.css`, which is Ovadev's stylesheet with light mode as the default and the old `--int-*` custom properties kept as aliases. New code imports components from `@ovadev-gmbh/ui-ovadev` and writes `--ova-*`, never `--int-*`.
- A tool may offer dark mode: `data-theme="dark"` on `<html>` (or `"system"` to follow the OS). The tokens switch; never write `dark:`.
- Red stays a signal, not a status: errors use `status-danger`, and a tool screen rarely needs the red block at all.
