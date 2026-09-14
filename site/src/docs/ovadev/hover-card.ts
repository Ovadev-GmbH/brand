import type { Doc } from "../../types";

export default {
  description:
    "A preview of what a link leads to, shown while the pointer rests on it: a product, a colleague, a blog post. For content that is clicked open or holds controls, use [Popover](/ovadev/popover).",
  usage: `<HoverCard>
  <HoverCardTrigger href="/products/ticketova">TICKETOVA</HoverCardTrigger>
  <HoverCardContent>Online ticketing for swimming pools and venues. 14 customers, live since 2024.</HoverCardContent>
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
      text: "Where a name appears on a post or a page, an `Avatar`, the role and the last time the person was active.",
      example: "team-member",
    },
    {
      title: "Deployment",
      text: "A `Badge` with the state of the site's last deployment in its word, and the facts an editor checks first, in mono.",
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
