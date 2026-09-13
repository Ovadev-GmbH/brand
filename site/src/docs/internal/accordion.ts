import type { Doc } from "../../types";

export default {
  description:
    "Sections of one record or document that open in place, so a long page is read a part at a time: a runbook, a postmortem, a tenant's settings. For a single section use [Collapsible](/internal/collapsible); for views that replace each other, [Tabs](/internal/tabs).",
  usage: `<Accordion defaultValue={["billing"]}>
  <AccordionItem value="billing">
    <AccordionTrigger>Billing</AccordionTrigger>
    <AccordionContent>Scale plan, invoiced monthly in CHF.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="hosting">
    <AccordionTrigger>Hosting</AccordionTrigger>
    <AccordionContent>Runs in ch-zrh-1.</AccordionContent>
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
      title: "With Description",
      text: "A `DescriptionList` in each panel sets out a record's fields, grouped by topic. See [Description](/internal/description).",
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
