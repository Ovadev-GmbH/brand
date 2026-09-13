import type { Doc } from "../../types";

export default {
  description:
    "A short label on something unlike its neighbours: Beta, Trial, Overdue. A state that every row has is a [Status Dot](/internal/status-dot) with its word, not a column of badges.",
  usage: `<Badge variant="secondary">Beta</Badge>`,
  sections: [
    { title: "Default", text: "Black carrying white, for the one label in view that must be read first.", example: "default" },
    {
      title: "Secondary",
      text: "A grey fill: the quiet label most badges should be, such as Trial next to a tenant.",
      example: "secondary",
    },
    {
      title: "Outline",
      text: "A hairline on the sheet, for a label among other controls. A version or a region inside it is set in mono.",
      example: "outline",
    },
    {
      title: "Destructive",
      text: "Red on a faint red fill, for what has gone wrong with one record: Overdue, Revoked.",
      example: "destructive",
    },
    {
      title: "Ghost",
      text: "No fill and no edge until the pointer is on it, for a label that also opens something in a dense row.",
      example: "ghost",
    },
    {
      title: "Link",
      text: '`render={<a href="…" />}` makes a badge a link, and the filled and outline variants gain a hover fill. `variant="link"` sets it in the link colour instead.',
      example: "link",
    },
    {
      title: "With Icon",
      text: 'Mark the icon `data-icon="inline-start"` or `data-icon="inline-end"`; the badge sets it at 12px and trims its padding on that side.',
      example: "with-icon",
    },
    {
      title: "With Spinner",
      text: "A `Spinner` in place of the icon, for a label whose work is still running.",
      example: "with-spinner",
    },
    {
      title: "In a Table",
      text: "In a table a badge marks the exception on a row, next to the name it qualifies, rather than filling a column of its own.",
      example: "table",
    },
  ],
  api: [
    {
      name: "Badge",
      text: "A `<span>` with the system's variants; `render` swaps it for another element, such as an `<a>`.",
      props: [["variant", `"default" | "secondary" | "outline" | "destructive" | "ghost" | "link"`, `"default"`]],
    },
    {
      name: "badgeVariants",
      text: "The same classes as a function of `{ variant, className }`, for an element that is not a `Badge`.",
    },
  ],
} satisfies Doc;
