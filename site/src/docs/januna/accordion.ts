import type { Doc } from "../../types";

export default {
  description:
    "The parts of one booking, policy or setting that open in place, so the host reads one at a time: the guest, the deposit, the notes. For a single part use [Collapsible](/januna/collapsible); for views that replace each other, [Tabs](/januna/tabs).",
  usage: `<Accordion defaultValue={["guest"]}>
  <AccordionItem value="guest">
    <AccordionTrigger>Guest</AccordionTrigger>
    <AccordionContent>Anna Keller, party of 6, 19:30.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="deposit">
    <AccordionTrigger>Deposit</AccordionTrigger>
    <AccordionContent>CHF 120.00, paid on 2026-09-10.</AccordionContent>
  </AccordionItem>
</Accordion>`,
  composition: `Accordion
└── AccordionItem
    ├── AccordionTrigger
    └── AccordionContent`,
  sections: [
    {
      title: "Multiple",
      text: "One item is open at a time by default. `multiple` on `Accordion` lets several stay open, and `defaultValue` lists the ones open at first. An open item sits on `bg-surface-secondary`, so it stays visible where it begins and ends.",
      example: "multiple",
    },
    {
      title: "Disabled",
      text: "`disabled` on an `AccordionItem` keeps that item shut and dims it; on `Accordion` it holds all of them. Say beside the title why it cannot open.",
      example: "disabled",
    },
    {
      title: "With Description",
      text: "A `DescriptionList` in each panel sets out a booking's fields, grouped by topic, with times and amounts in mono. See [Description](/januna/description).",
      example: "description",
    },
    {
      title: "With Link",
      text: "A link inside `AccordionContent` is underlined, and paragraphs in it keep a 16px gap between them, for a policy whose fix lives on another page.",
      example: "link",
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
      text: "A full-width column of items inside a 12px frame with a hairline edge, so it needs no container of its own. Takes Base UI's Root props, among them `value`, `defaultValue`, `multiple` and `disabled`.",
    },
    {
      name: "AccordionItem",
      text: "One part, with a hairline under every item but the last and the secondary surface while it is open.",
    },
    {
      name: "AccordionTrigger",
      text: "The button that opens the item, in Button 14 with 16px of padding, inside Base UI's Header. The arrow at its end points down while shut and up while open.",
    },
    {
      name: "AccordionContent",
      text: "The panel, in Copy 14. Its height animates as it opens and closes; `className` lands on the inner box that holds the padding.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/accordion", api: "https://base-ui.com/react/components/accordion#api-reference" },
} satisfies Doc;
