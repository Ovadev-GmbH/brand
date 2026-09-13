import type { Doc } from "../../types";

export default {
  description:
    "A part that opens and closes under its own trigger: a guest's notes, the rest of tonight's arrivals, the options most bookings leave alone. For a stack of parts whose headings list what is inside, use [Accordion](/januna/accordion).",
  usage: `<Collapsible>
  <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>Guest notes</CollapsibleTrigger>
  <CollapsibleContent>Shellfish allergy. Window table if free.</CollapsibleContent>
</Collapsible>`,
  composition: `Collapsible
├── CollapsibleTrigger
└── CollapsibleContent`,
  sections: [
    {
      title: "Trigger",
      text: "`CollapsibleTrigger` renders a plain button; pass `render` to make it one of the system's buttons. While the content shows, the trigger carries `data-panel-open`, which is what turns the arrow.",
      example: "trigger",
    },
    {
      title: "Open by Default",
      text: "`defaultOpen` on `Collapsible` starts it open, for the detail the host came to read, like why a deposit is still unpaid.",
      example: "default-open",
    },
    {
      title: "Advanced Options",
      text: "Options most bookings leave alone go under a trigger inside the form. `keepMounted` on `CollapsibleContent` keeps the fields in the page while they are hidden, so their values survive closing and still submit.",
      example: "advanced-options",
    },
    {
      title: "Nested",
      text: "A `Collapsible` inside another's content, for records that group: an area of the floor, its tables, and the bookings on each.",
      example: "nested",
    },
    {
      title: "Disabled",
      text: "`disabled` on `Collapsible` keeps it shut and its trigger inert, for content that does not exist yet, such as the waitlist of a shift that is not full.",
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
