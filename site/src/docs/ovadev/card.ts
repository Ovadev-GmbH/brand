import type { Doc } from "../../types";

export default {
  description:
    "A hairline box around one self-contained thing: a settings panel, a product's summary, a destructive action set apart. A list of records is a [Table](/ovadev/table), not a grid of cards.",
  usage: `<Card>
  <CardHeader>
    <CardTitle>TICKETOVA</CardTitle>
    <CardDescription>Online ticketing for swimming pools and venues</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
</Card>`,
  composition: `Card
├── CardHeader
│   ├── CardTitle
│   ├── CardDescription
│   └── CardAction
├── CardContent
└── CardFooter`,
  sections: [
    {
      title: "Size",
      text: '`size="sm"` tightens the padding and the gaps between parts from 16px to 12px, for a card in a sidebar or a narrow column.',
      example: "size",
    },
    {
      title: "Action",
      text: "`CardAction` in the header sits to the right of the title and description, for the one control that acts on the whole card.",
      example: "action",
    },
    {
      title: "Footer",
      text: "`CardFooter` is ruled off from the content and holds the card's buttons. A card that exists for a destructive action says what will be lost before the button.",
      example: "footer",
    },
    {
      title: "Edge to Edge",
      text: "`--card-spacing` holds the card's inset. Take the padding off `CardContent` and put it back on each row with `px-(--card-spacing)`, and the rules between rows reach both edges.",
      example: "edge-to-edge",
    },
    {
      title: "Form",
      text: "A setting that saves on its own: the fields in `CardContent`, the save button in `CardFooter`.",
      example: "form",
    },
    {
      title: "When Not to Use",
      text: "Do not put a card in a card, or a card around a table or a section that a heading and a rule already separate. Figures above a table are one `<dl>` laid out in a row, not a row of cards.",
    },
  ],
  api: [
    {
      name: "Card",
      text: "A `<div>` in `material-base`. Sets `--card-spacing`, which every part uses for its inset.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
    {
      name: "CardHeader",
      text: "A grid of title and description that gains a second column when it holds a `CardAction`. With `border-b` it adds padding under the rule.",
    },
    { name: "CardTitle", text: "The card's name, in `text-heading-16`." },
    { name: "CardAction", text: "Placed in the header's right column, spanning both rows." },
    { name: "CardFooter", text: "A row with a rule above it and the card's inset on every side." },
  ],
} satisfies Doc;
