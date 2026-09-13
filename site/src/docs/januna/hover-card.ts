import type { Doc } from "../../types";

export default {
  description:
    "A preview of what a link leads to, shown while the pointer rests on it: a guest, a server, a booking. For content that is clicked open or holds controls, use [Popover](/januna/popover).",
  usage: `<HoverCard>
  <HoverCardTrigger href="/guests/nora-keller">Nora Keller</HoverCardTrigger>
  <HoverCardContent>Regular since 2023. 14 visits, never a no-show.</HoverCardContent>
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
      text: "Where a server's name appears beside a table, an `Avatar`, their section and their shift.",
      example: "team-member",
    },
    {
      title: "Booking",
      text: "A `Badge` with the booking's state in its word, and the facts the host checks first. Times, references and amounts sit in mono so they line up.",
      example: "booking",
    },
    {
      title: "Touch Screens",
      text: "The host's tablet has no hover, so the card does not open there. Keep it a preview of the page the link opens, never the only place something is said.",
    },
  ],
  api: [
    {
      name: "HoverCardContent",
      text: "The card on the menu material, 288px wide with 16px padding, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "4"],
        ["align", `"start" | "center" | "end"`, `"center"`],
        ["alignOffset", "number", "4"],
      ],
    },
    {
      name: "HoverCardTrigger",
      text: "An `<a>`. Give it the `href` of the page the card previews, or render it as a `Button` with `variant=\"link\"`.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/preview-card",
    api: "https://base-ui.com/react/components/preview-card#api-reference",
  },
} satisfies Doc;
