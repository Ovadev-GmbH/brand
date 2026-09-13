import type { Doc } from "../../types";

export default {
  description:
    "One entry in a conversation: who wrote it, what they wrote and when. It places the avatar, a header, the content and a footer on the sender's side; the content is usually a [Bubble](/internal/bubble).",
  usage: `<Message>
  <MessageContent>
    <MessageHeader>Anna Roth, acme-logistics</MessageHeader>
    <Bubble variant="muted">
      <BubbleContent>Invoice INV-2026-0142 lists 14 seats.</BubbleContent>
    </Bubble>
  </MessageContent>
</Message>`,
  composition: `MessageGroup
└── Message
    ├── MessageAvatar
    └── MessageContent
        ├── MessageHeader
        ├── Bubble
        └── MessageFooter`,
  sections: [
    {
      title: "Avatar",
      text: '`MessageAvatar` holds an `Avatar`, or an icon for the system, at the foot of the row. `align="end"` on `Message` moves the whole row to the other side.',
      example: "avatar",
    },
    {
      title: "Group",
      text: "`MessageGroup` stacks consecutive messages from one sender. Give the earlier ones an empty `MessageAvatar` so their bubbles line up with the last.",
      example: "group",
    },
    {
      title: "Header and Footer",
      text: "`MessageHeader` names the sender; `MessageFooter` carries the time and the delivery state, and follows the row to its side.",
      example: "header-footer",
    },
    {
      title: "Plain Text",
      text: "With a `ghost` bubble the text runs unframed across the row, and the header and footer drop their inset to line up with it: for internal notes and longer answers.",
      example: "plain-text",
    },
    {
      title: "Actions",
      text: "Icon buttons in `MessageFooter` act on the message. Each needs an `aria-label` that names what it does.",
      example: "actions",
    },
    {
      title: "Failed",
      text: "A message that did not go out takes a `destructive` bubble, and its footer says why in words, beside the action that retries it.",
      example: "failed",
    },
    {
      title: "Attachment",
      text: "An [Attachment](/internal/attachment) goes in `MessageContent` next to the bubble and keeps to the row's side.",
      example: "attachment",
    },
  ],
  api: [
    {
      name: "Message",
      text: "A `<div>` that lays out the avatar and the content in a row. The parts inside read its `data-align`.",
      props: [["align", `"start" | "end"`, `"start"`]],
    },
    {
      name: "MessageAvatar",
      text: "A round holder at the foot of the row, lifted clear of `MessageFooter` when there is one.",
    },
    {
      name: "MessageHeader",
      text: "A line in `text-label-12` above the content, inset to the bubble's padding unless the bubble is `ghost`.",
    },
    {
      name: "MessageFooter",
      text: "The same line below the content, aligned to the end on an end-aligned row.",
    },
  ],
} satisfies Doc;
