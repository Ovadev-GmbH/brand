import type { Doc } from "../../types";

export default {
  description:
    "A short pill-shaped label on something unlike its neighbours: Walk-in, Large party, No-show. A booking's state is a badge with its word, such as Pending or Seated; in a table where every booking has one, write the word in its status colour rather than a column of badges.",
  usage: `<Badge variant="secondary">Walk-in</Badge>`,
  sections: [
    {
      title: "Default",
      text: "The brand green carrying taupe, for the one label in view that must be read first. Use it once on a screen; it is as loud as the primary button.",
      example: "default",
    },
    {
      title: "Secondary",
      text: "The ink at 8% as a fill: the quiet label most badges should be, such as Walk-in next to a guest.",
      example: "secondary",
    },
    {
      title: "Outline",
      text: "The sheet with a hairline edge, for a label among other controls. A table or a reference inside it is set in mono.",
      example: "outline",
    },
    {
      title: "Destructive",
      text: "The danger colour on a faint fill of itself, for what has gone wrong with one booking: No-show, Declined.",
      example: "destructive",
    },
    {
      title: "Ghost",
      text: "No fill until the pointer is on it, for a label that also opens something in a dense row.",
      example: "ghost",
    },
    {
      title: "Link",
      text: '`render={<a href="…" />}` makes a badge a link, and the filled and outline variants gain a hover fill. `variant="link"` sets it in the brand colour instead.',
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
      text: "A 20px `<span>` with fully round ends, in Label 12; `render` swaps it for another element, such as an `<a>`.",
      props: [["variant", `"default" | "secondary" | "outline" | "destructive" | "ghost" | "link"`, `"default"`]],
    },
    {
      name: "badgeVariants",
      text: "The same classes as a function of `{ variant, className }`, for an element that is not a `Badge`.",
    },
  ],
} satisfies Doc;
