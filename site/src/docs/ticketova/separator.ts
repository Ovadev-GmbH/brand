import type { Doc } from "../../types";

export default {
  description:
    "A hairline between two groups of content, across a column or between items in a row. Rows of records need none: a [Table](/ticketova/table) draws its own rules.",
  usage: `<Separator />`,
  sections: [
    {
      title: "Vertical",
      text: '`orientation="vertical"` stands between items in a row and stretches to the row\'s height, so give the row one.',
      example: "vertical",
    },
    {
      title: "Toolbar",
      text: "Vertical separators split a toolbar into the actions that belong together: looking at the list on one side, acting on it on the other.",
      example: "toolbar",
    },
    {
      title: "Between Rows",
      text: "Horizontal separators between rows of settings, each a label with its control. The parent's gap spaces them, not a margin on the separator.",
      example: "between-rows",
    },
    {
      title: "With a Label",
      text: 'A rule with a word in it, such as the day in a conversation, is a [Marker](/ticketova/marker) with `variant="separator"`.',
    },
  ],
  api: [
    {
      name: "Separator",
      text: 'Base UI\'s Separator, drawn as a 1px line in `divider`. It renders `role="separator"`; every other prop is Base UI\'s.',
      props: [["orientation", `"horizontal" | "vertical"`, `"horizontal"`]],
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/separator",
    api: "https://base-ui.com/react/components/separator#api-reference",
  },
} satisfies Doc;
