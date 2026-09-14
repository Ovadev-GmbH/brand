import type { Doc } from "../../types";

export default {
  description:
    "The framed text of one message, as wide as its content and at most 80% of the row. Put it in a [Message](/ovadev/message) for the sender, the avatar and the time.",
  usage: `<Bubble variant="muted">
  <BubbleContent>Your request reached us. We answer within two working days.</BubbleContent>
</Bubble>`,
  composition: `BubbleGroup
└── Bubble
    ├── BubbleContent
    └── BubbleReactions`,
  sections: [
    {
      title: "Variant",
      text: "`variant` sets the fill. `default` in ink for our own messages, `muted` or `secondary` for the other side, `outline` and `tinted` for what the system adds, `ghost` for unframed text, `destructive` for what failed.",
      example: "variant",
    },
    {
      title: "Align",
      text: '`align="end"` moves a bubble to the other side of its column. Inside a `Message`, set `align` on the message instead and the bubble follows it.',
      example: "align",
    },
    {
      title: "Group",
      text: "`BubbleGroup` stacks consecutive bubbles from one sender closer together than the space between senders. `align` still goes on each `Bubble`.",
      example: "group",
    },
    {
      title: "Links and Buttons",
      text: "`render` on `BubbleContent` turns the whole bubble into an `<a>` or a `<button>`, with a hover fill and the focus ring.",
      example: "links-buttons",
    },
    {
      title: "Reactions",
      text: '`BubbleReactions` overlaps the bubble\'s edge with counts or small buttons; `side` and `align` pick the corner. Leave room around the bubble for it, and name each reaction for screen readers.',
      example: "reactions",
    },
    {
      title: "Show More",
      text: "A long paste, such as a stack trace, can wait behind a `Collapsible` inside `BubbleContent`, with the first line always in view.",
      example: "show-more",
    },
    {
      title: "Tooltip",
      text: "Render `BubbleContent` as a `TooltipTrigger` to show the exact time a message was sent on hover and on focus.",
      example: "tooltip",
    },
    {
      title: "Popover",
      text: "Render `BubbleContent` as a `PopoverTrigger` when the bubble has more to tell on request, such as the reason a delivery failed.",
      example: "popover",
    },
  ],
  api: [
    {
      name: "Bubble",
      text: "A `<div>` that sizes to its content and styles the `BubbleContent` inside it.",
      props: [
        ["variant", `"default" | "secondary" | "muted" | "tinted" | "outline" | "ghost" | "destructive"`, `"default"`],
        ["align", `"start" | "end"`, `"start"`],
      ],
    },
    {
      name: "BubbleContent",
      text: "The framed text, a `<div>` in `text-copy-13`. `render` swaps the element and keeps the frame.",
    },
    {
      name: "BubbleReactions",
      text: "A small row laid over one corner of the bubble.",
      props: [
        ["side", `"top" | "bottom"`, `"bottom"`],
        ["align", `"start" | "end"`, `"end"`],
      ],
    },
    {
      name: "BubbleGroup",
      text: "A column of bubbles with an 8px gap.",
    },
  ],
} satisfies Doc;
