import type { Doc } from "../../types";

export default {
  description:
    "A ring for how much of a limit is used: a quota, a disk, the seats on a plan. It stands beside its label and the exact figure; for a job that finishes, use [Progress](/internal/progress).",
  usage: `<Gauge value={72} showValue aria-label="API quota used" />`,
  sections: [
    {
      title: "Size",
      text: "`size` sets the ring: `tiny` (20px) for a table cell, `sm` (32px) for a dense row, the default 48px for a panel and `lg` (64px) for a record's header.",
      example: "size",
    },
    {
      title: "Show Value",
      text: "`showValue` prints the rounded value in the centre, in mono. `tiny` has no room for it, so there the figure goes beside the ring.",
      example: "show-value",
    },
    {
      title: "With Label",
      text: "The ring is a `meter` whose value a screen reader hears; give it an `aria-label`, and write the label and the figure with its unit beside it.",
      example: "with-label",
    },
    {
      title: "Thresholds",
      text: "By default the colour follows the value from grey through blue and yellow to green, which reads as more is better. `colors` as a map of thresholds replaces that, and the highest key at or below the value wins: for a quota, turn it round so it ends in red.",
      example: "thresholds",
    },
    {
      title: "Fixed Colors",
      text: "`colors={{ primary, secondary }}` fixes the arc and the track whatever the value, such as black for a count that is not a state.",
      example: "fixed-colors",
    },
    {
      title: "Equal Arcs",
      text: '`arcPriority="equal"` draws both parts at the same weight with a gap between them, for a split between two things rather than an amount used.',
      example: "equal-arcs",
    },
    {
      title: "Indeterminate",
      text: "`indeterminate` turns a quarter arc while the value is not known yet, and the ring becomes a `progressbar` without a value.",
      example: "indeterminate",
    },
    {
      title: "In a Table",
      text: "A `tiny` ring before a right-aligned figure lets a column of quotas be scanned; the figure is still what gets read.",
      example: "table",
    },
  ],
  api: [
    {
      name: "Gauge",
      text: "A `<div>` with `role=\"meter\"` around an SVG ring that fills clockwise from twelve. `value` runs from 0 to 100 and is clamped. Takes every div prop but `children`.",
      props: [
        ["value", "number", "–"],
        ["size", `"tiny" | "sm" | "default" | "lg"`, `"default"`],
        ["showValue", "boolean", "false"],
        ["colors", "{ primary: string; secondary?: string } | Record<string, string>", "grey, blue, yellow, green"],
        ["arcPriority", `"primary" | "equal"`, `"primary"`],
        ["indeterminate", "boolean", "false"],
      ],
    },
    {
      name: "gaugeVariants",
      text: "The ring's box as a function of `{ size }`.",
    },
  ],
} satisfies Doc;
