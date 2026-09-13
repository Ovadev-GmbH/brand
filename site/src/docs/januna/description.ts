import type { Doc } from "../../types";

export default {
  description:
    "The fields of one record, each a title over its value: a booking's guest, its table, its deposit. For many records with the same fields, use a [Table](/januna/table).",
  usage: `<DescriptionList>
  <Description title="Guest" content="Anna Keller" />
  <Description title="Table" content="T12, Terrace" />
</DescriptionList>`,
  composition: `DescriptionList
└── Description
    ├── title (dt)
    └── content (dd)`,
  sections: [
    {
      title: "Columns",
      text: "`columns` on `DescriptionList` sets 2, 3 or 4 columns from the `sm` breakpoint up. Below it every list falls back to two.",
      example: "columns",
    },
    {
      title: "Tooltip",
      text: "`tooltip` adds a help icon after the title that explains how the value is counted. Keep it to one sentence; the value itself stays visible. The tooltip reads its delay from the app's `TooltipProvider`.",
      example: "tooltip",
    },
    {
      title: "Right Aligned",
      text: "`right` aligns title and value to the end, so a CHF amount lines up with the figures in a table below it.",
      example: "right",
    },
    {
      title: "Ellipsis",
      text: "`ellipsis` holds title and value to one line and puts the full text in the native `title`. It works for text and numbers; other content is cut without a tooltip.",
      example: "ellipsis",
    },
    {
      title: "Content",
      text: "`content` takes any node: a `StatusDot` with its word, a booking reference in `text-label-13-mono`, a phone number the host can call.",
      example: "content",
    },
    {
      title: "Record",
      text: "A booking screen opens with its reference, its status and one or two actions, then the list of its fields.",
      example: "record",
    },
  ],
  api: [
    {
      name: "Description",
      text: "A `<dl>` with one `<dt>` in `text-label-13` and the secondary ink, and one `<dd>` in `text-label-14`. Takes every other prop of a `<dl>`.",
      props: [
        ["title", "string", "–"],
        ["content", "React.ReactNode", "–"],
        ["tooltip", "string", "–"],
        ["right", "boolean", "false"],
        ["ellipsis", "boolean", "false"],
      ],
    },
    {
      name: "DescriptionList",
      text: "A grid of descriptions with 24px between columns and 16px between rows.",
      props: [["columns", "2 | 3 | 4", "2"]],
    },
    {
      name: "descriptionListVariants",
      text: "The grid classes as a function of `{ columns }`, for a list that is not a `DescriptionList`.",
    },
  ],
} satisfies Doc;
