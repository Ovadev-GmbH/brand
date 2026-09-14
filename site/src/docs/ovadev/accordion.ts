import type { Doc } from "../../types";

export default {
  description:
    "Sections of one record or document that open in place, so a long page is read a part at a time: a job posting, a product's specification, the privacy notice. For a single section use [Collapsible](/ovadev/collapsible); for views that replace each other, [Tabs](/ovadev/tabs).",
  usage: `<Accordion defaultValue={["ticketova"]}>
  <AccordionItem value="ticketova">
    <AccordionTrigger>TICKETOVA</AccordionTrigger>
    <AccordionContent>Online ticketing for swimming pools and venues: shop, admission control, real-time reporting.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="januna">
    <AccordionTrigger>JANUNA</AccordionTrigger>
    <AccordionContent>Restaurant operations: till, kitchen displays, orders. Coming soon.</AccordionContent>
  </AccordionItem>
</Accordion>`,
  composition: `Accordion
└── AccordionItem
    ├── AccordionTrigger
    └── AccordionContent`,
  sections: [
    {
      title: "Multiple",
      text: "One item is open at a time by default. `multiple` on `Accordion` lets several stay open, and `defaultValue` lists the ones open at first.",
      example: "multiple",
    },
    {
      title: "Disabled",
      text: "`disabled` on an `AccordionItem` keeps that item shut; on `Accordion` it holds all of them. Say beside the title why it cannot open.",
      example: "disabled",
    },
    {
      title: "Bordered",
      text: "Inside a `material-base` container with side padding, for an accordion that stands on its own. The rules between items stay as they are.",
      example: "bordered",
    },
    {
      title: "With Details",
      text: "A plain `<dl>` in each panel sets out a record's fields, grouped by topic: each `<dt>` in Label 12 and the secondary ink above its `<dd>`, with figures and IDs in mono. It needs no component.",
      example: "description",
    },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` keep the open items in your state, so buttons outside the accordion can expand or collapse all of them.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Accordion",
      text: "A full-width column of items. Takes Base UI's Root props, among them `value`, `defaultValue`, `multiple` and `disabled`.",
    },
    {
      name: "AccordionItem",
      text: "One section, with a hairline under every item but the last.",
    },
    {
      name: "AccordionTrigger",
      text: "The button that opens the item, inside an `<h3>`, with the chevron drawn at its end.",
    },
    {
      name: "AccordionContent",
      text: "The panel, in Copy 13. Its height animates as it opens and closes.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/accordion", api: "https://base-ui.com/react/components/accordion#api-reference" },
} satisfies Doc;
