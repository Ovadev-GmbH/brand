import type { Doc } from "../../types";

export default {
  description:
    "A placeholder in the shape of content on its way, so the page does not move when it arrives. When the shape is not known, use a [Spinner](/januna/spinner).",
  usage: `<Skeleton className="h-4 w-40" />`,
  sections: [
    {
      title: "Text",
      text: "Give each line the height of the type it stands for, `h-6` for a Heading 16 title and `h-4` for a line of Copy 14, and end a paragraph on a shorter line. The 12px corners round the ends of a line that short.",
      example: "text",
    },
    {
      title: "Avatar",
      text: "`rounded-pill` for what will be round, like a guest's avatar. Everything else keeps the 12px corner of the controls and cards the content will sit in.",
      example: "avatar",
    },
    {
      title: "Form",
      text: "A label's line above a block at the control's height, `h-10`, keeps a form's rhythm while its values load.",
      example: "form",
    },
    {
      title: "Table",
      text: "Keep the real header and draw the rows: one skeleton per cell, right-aligned where the figures will be. `aria-busy` on the table and a caption tell a screen reader to wait.",
      example: "table",
    },
    {
      title: "Card",
      text: "In a `Card`, what is already known stays, such as the title and the row labels; only the values are drawn as skeletons.",
      example: "card",
    },
  ],
  api: [
    {
      name: "Skeleton",
      text: "A `<div>` that pulses on the ink at 8%, with 12px corners. Its size is yours: set a height and a width.",
    },
  ],
} satisfies Doc;
