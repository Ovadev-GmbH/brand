import type { Doc } from "../../types";

export default {
  description:
    "A section that opens and closes under its own trigger: the older posts of a year on the blog, the advanced options of a form. For a stack of sections whose headings list what is inside, use [Accordion](/ovadev/accordion).",
  usage: `<Collapsible>
  <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>Advanced options</CollapsibleTrigger>
  <CollapsibleContent>Canonical URL, meta description and the social image.</CollapsibleContent>
</Collapsible>`,
  composition: `Collapsible
├── CollapsibleTrigger
└── CollapsibleContent`,
  sections: [
    {
      title: "Trigger",
      text: "`CollapsibleTrigger` renders a plain button; pass `render` to make it one of the system's buttons. While the content shows, the trigger carries `data-panel-open`, which is what turns the chevron.",
      example: "trigger",
    },
    {
      title: "Open by Default",
      text: "`defaultOpen` on `Collapsible` starts it open, for the detail someone came to read, like the reason a contact request bounced.",
      example: "default-open",
    },
    {
      title: "Advanced Options",
      text: "Options most people leave alone go under a trigger inside the form. `keepMounted` on `CollapsibleContent` keeps the fields in the page while they are hidden, so their values survive closing and still submit.",
      example: "advanced-options",
    },
    {
      title: "Nested",
      text: "A `Collapsible` inside another's content, for records that group: a product's pages, each in its languages.",
      example: "nested",
    },
    {
      title: "Disabled",
      text: "`disabled` on `Collapsible` keeps it shut and its trigger inert, for content that does not exist yet, such as the reads of a post not yet published.",
      example: "disabled",
    },
    {
      title: "Hidden Until Found",
      text: '`hiddenUntilFound` on `CollapsibleContent` hides the content with `hidden="until-found"`, so the browser\'s find in page opens it when the match is inside.',
      example: "hidden-until-found",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` hand the state to you, for a trigger whose label says what opening it will show.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Collapsible",
      text: "Base UI's Collapsible with no styles of its own: `CollapsibleTrigger` is its Trigger and `CollapsibleContent` its Panel. Every prop is Base UI's.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/collapsible",
    api: "https://base-ui.com/react/components/collapsible#api-reference",
  },
} satisfies Doc;
