import type { Doc } from "../../types";

export default {
  description:
    "A preview of what a link leads to, shown while the pointer rests on it: a tenant, a colleague, a deployment. For content that is clicked open or holds controls, use [Popover](/ticketova/popover).",
  usage: `<HoverCard>
  <HoverCardTrigger href="/tenants/acme-logistics">acme-logistics</HoverCardTrigger>
  <HoverCardContent>Acme Logistics AG, Scale plan, 38 of 40 seats in use.</HoverCardContent>
</HoverCard>`,
  composition: `HoverCard
├── HoverCardTrigger
└── HoverCardContent`,
  sections: [
    {
      title: "Sides",
      text: "`side` on `HoverCardContent` opens the card below the link by default, or `top`, `left` or `right` of it. Where there is no room, it flips.",
      example: "sides",
    },
    {
      title: "Delay",
      text: "The card opens once the pointer has rested on the link for 600ms and closes 300ms after it leaves. `delay` and `closeDelay` on `HoverCardTrigger` change both.",
      example: "delay",
    },
    {
      title: "Team Member",
      text: "Where an address appears in the audit log, an `Avatar`, the role and the last time the person was active.",
      example: "team-member",
    },
    {
      title: "Deployment",
      text: "A `Badge` with the deployment's state in its word, and the facts an operator checks first, in mono.",
      example: "deployment",
    },
    {
      title: "Touch Screens",
      text: "A touch screen has no hover, so the card does not open there. Keep it a preview of the page the link opens, never the only place something is said.",
    },
  ],
  api: [
    {
      name: "HoverCardContent",
      text: "The card, 256px wide, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "4"],
        ["align", `"start" | "center" | "end"`, `"center"`],
        ["alignOffset", "number", "4"],
      ],
    },
    {
      name: "HoverCardTrigger",
      text: "An `<a>`. Give it the `href` of the page the card previews.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/preview-card",
    api: "https://base-ui.com/react/components/preview-card#api-reference",
  },
} satisfies Doc;
