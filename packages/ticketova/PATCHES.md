# Changes on top of the shadcn output

`src/components/ui` is written by `shadcn add --all --overwrite` (`bun run
shadcn`) in the `base-nova` style with Phosphor icons. Running it again
rewrites every file below and silently drops these changes. After a
regeneration, compare against this list and put them back.

Unlike Internal and Januna, the components keep nova's own classes
(`text-sm`, `bg-muted`, `rounded-lg`). The brand reaches them through the
slots `src/theme.css` maps (`--primary`, `--muted`, `--border`, `--radius`),
so these are fixes, not a restyle.

## 0.2.0

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
  (`formatValue`), whatever the reader's locale.
- **input-otp.tsx:** the container has `gap-2` in place of the undefined
  `cn-input-otp` class.
- **tooltip.tsx:** no arrow. The tooltip material is "black, white text, no
  stem."
- **sidebar.tsx:** "Toggle sidebar" in sentence case.
- **alert.tsx:** the `success`, `warning` and `info` variants and the `sm`
  size (the inline note), so an alert written for Internal or Januna reads
  here too.
