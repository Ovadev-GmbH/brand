import type { Doc } from "../../types";

export default {
  description:
    "How far a job with a known end has come: an invoice run, a migration, an export. How much of a limit is used, a ratio rather than a job, is a progress bar too: the label names the limit and the value prints the count against it, such as 38 of 40 seats.",
  usage: `<Progress value={64}>
  <ProgressLabel>Invoice run, September 2026</ProgressLabel>
  <ProgressValue />
</Progress>`,
  composition: `Progress
├── ProgressLabel
└── ProgressValue`,
  sections: [
    {
      title: "Label and Value",
      text: "`ProgressLabel` names the bar, on screen and for a screen reader; `ProgressValue` prints the percentage in mono at the end of the same row. The bar wraps beneath them.",
      example: "label-and-value",
    },
    {
      title: "Custom Value",
      text: "`ProgressValue` takes a function of the formatted value and the raw one, for a count with its total instead of a percentage. Set `max` to the total.",
      example: "custom-value",
    },
    {
      title: "Format",
      text: "`format` takes `Intl.NumberFormat` options and `locale` a locale, so the value prints with its unit, and a screen reader hears the same.",
      example: "format",
    },
    {
      title: "Indeterminate",
      text: "`value={null}` when the job cannot say how far it has come. The bar stays empty, so leave out `ProgressValue` and let a `Spinner` show the job is still running.",
      example: "indeterminate",
    },
    {
      title: "In a Table",
      text: "Without a label, give `Progress` an `aria-label`. In a table the exact figure goes in its own right-aligned column, and the bar only shows the shape.",
      example: "table",
    },
    {
      title: "Controlled",
      text: "`value` is always yours to set: move it as the job reports back, and change the label once it is done.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Progress",
      text: "Base UI's Progress root. It draws `ProgressTrack` and `ProgressIndicator` after its children, so a label and a value sit on a row above the bar without a wrapper.",
    },
    {
      name: "ProgressValue",
      text: "The value, right-aligned in mono. Its child may be a function of the formatted value and the raw one.",
    },
    {
      name: "ProgressTrack",
      text: "The 4px bar and, inside it, `ProgressIndicator`, its black fill. `Progress` already renders both.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/progress", api: "https://base-ui.com/react/components/progress#api-reference" },
} satisfies Doc;
