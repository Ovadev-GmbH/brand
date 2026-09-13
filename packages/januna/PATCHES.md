# Changes on top of the shadcn output

`src/components/ui` is written by `shadcn add --all --overwrite` (`bun run
shadcn`). Running it again rewrites every file below and silently drops these
changes. After a regeneration, compare against this list and put them back.

## 0.4.0

- **Removed:** `description.tsx`, `gauge.tsx`, `snippet.tsx`, `status-dot.tsx`,
  and their exports from `src/index.ts`. They were written here, not added by
  shadcn, and the package now ships only shadcn's components. Their
  replacements: a `Badge` with the state's word for a status dot, `Progress`
  for a gauge, an `InputGroup` with a read-only input and a copy button for a
  snippet, a plain `<dl>` for a description list.

## 0.3.0

- **alert-dialog.tsx:** `AlertDialogAction` renders `AlertDialogPrimitive.Close`
  like `AlertDialogCancel`, so it closes the dialog. It takes `variant` and
  `size`. An action that must finish first holds `open` itself.
- **checkbox.tsx:** the states are data attributes, because Base UI renders
  the box as a `<span>`: `data-disabled:` dims it (a `disabled:` variant never
  matched), and `data-indeterminate:` fills it and swaps the tick for a dash.
- **toggle-group.tsx:** `orientation` is passed to Base UI, so the arrow keys
  follow a vertical group.
- **slider.tsx:** a single number as `value` or `defaultValue` draws one
  thumb; only a slider with no value falls back to `[min, max]`.
- **carousel.tsx:** the `reInit` listener is removed on cleanup, and a
  vertical carousel answers to the up and down arrow keys.
- **chart.tsx:** tooltip figures are formatted with the Swiss apostrophe
  (`formatValue`), whatever the reader's locale; the tooltip label has no
  `font-medium`.
- **input-otp.tsx:** the container has `gap-2` in place of the undefined
  `cn-input-otp` class.
- **input-group.tsx:** `InputGroupButton` `size="sm"` is a 32px button.
- **dialog.tsx, alert-dialog.tsx, sheet.tsx, drawer.tsx:** no backdrop blur.
  DESIGN.md rejects blurs behind popups.
- **avatar.tsx, message.tsx:** `rounded-pill` in place of `rounded-full`.
- **attachment.tsx, item.tsx:** `rounded-small` in place of `rounded-sm`; no
  `font-medium` on the attachment title.
- **sidebar.tsx:** `ease-brand` in place of `ease-linear`, no
  `data-active:font-medium`, "Toggle sidebar" in sentence case.
