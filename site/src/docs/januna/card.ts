import type { Doc } from "../../types";

export default {
  description:
    "A resting surface around one self-contained thing: tonight's shift at a glance, a setting that saves on its own, a destructive action set apart. A list of bookings is a [Table](/januna/table), not a grid of cards.",
  usage: `<Card>
  <CardHeader>
    <CardTitle>Dinner shift</CardTitle>
    <CardDescription>Friday, 18:00 to 23:00</CardDescription>
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
      text: '`size="sm"` tightens the inset and the gaps between parts from 24px to 20px, for a card in a sidebar or a narrow column.',
      example: "size",
    },
    {
      title: "Action",
      text: "`CardAction` in the header sits to the right of the title and description, for the one control that acts on the whole card.",
      example: "action",
    },
    {
      title: "Footer",
      text: "`CardFooter` holds the card's buttons. It has no rule of its own: `border-t border-divider` draws one and adds the inset under it, as `border-b` does on `CardHeader`. A card that exists for a destructive action says what will be lost before the button.",
      example: "footer",
    },
    {
      title: "Edge to Edge",
      text: "`--card-spacing` holds the card's inset. Take the padding off `CardContent` and put it back on each row with `px-(--card-spacing)`, and the rules between rows reach both edges.",
      example: "edge-to-edge",
    },
    {
      title: "Form",
      text: 'A setting that saves on its own: the fields in `CardContent`, the save button in `CardFooter`, all inside a `<form className="contents">` so the card still spaces its parts.',
      example: "form",
    },
    {
      title: "Image",
      text: "An `<img>` as the card's first child drops the top inset and takes the card's top corners, for a photo of the room above its details.",
      code: `<Card>
  <img src={room.photoUrl} alt="The terrace set for dinner" className="aspect-video object-cover" />
  <CardHeader>
    <CardTitle>Terrace</CardTitle>
    <CardDescription>8 tables, 32 seats</CardDescription>
  </CardHeader>
</Card>`,
    },
    {
      title: "When Not to Use",
      text: "Do not put a card in a card, or a card around a table or a section that a heading and air already set apart. Figures above a table are one `<dl>` laid out in a row, not a row of cards.",
    },
  ],
  api: [
    {
      name: "Card",
      text: "A `<div>` in `material-base` and `text-copy-14`. Sets `--card-spacing`, which every part uses for its inset. The material draws the edge, so the card takes no border.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
    {
      name: "CardHeader",
      text: "A grid of title and description that gains a second column when it holds a `CardAction`. With `border-b` it adds the inset under the rule.",
    },
    { name: "CardTitle", text: "The card's name, in `text-heading-16`." },
    { name: "CardDescription", text: "A line under the title in `text-copy-14` and the secondary ink." },
    { name: "CardAction", text: "Placed in the header's right column, spanning both rows." },
    { name: "CardContent", text: "The card's body, at the card's inset on either side." },
    { name: "CardFooter", text: "A row at the card's inset. With `border-t` it adds the inset above its content." },
  ],
} satisfies Doc;
