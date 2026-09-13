import type { Doc } from "../../types";

export default {
  description:
    "One entry in a conversation between a guest and the restaurant: who wrote it, what they wrote and when. It places the avatar, a header, the content and a footer on the sender's side; the content is usually a [Bubble](/januna/bubble).",
  usage: `<Message>
  <MessageContent>
    <MessageHeader>Lea Brunner, booking at 19:30</MessageHeader>
    <Bubble variant="muted">
      <BubbleContent>Could we sit outside if it stays dry?</BubbleContent>
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
      text: '`MessageAvatar` holds an `Avatar`, or an icon for what Januna itself reports, at the foot of the row. `align="end"` on `Message` moves the whole row to the other side, where the restaurant\'s own messages sit.',
      example: "avatar",
    },
    {
      title: "Group",
      text: "`MessageGroup` stacks consecutive messages from one sender 8px apart. Give the earlier ones an empty `MessageAvatar` so their bubbles line up with the last.",
      example: "group",
    },
    {
      title: "Header and Footer",
      text: "`MessageHeader` names the sender; `MessageFooter` carries the time and the delivery state in words, and follows the row to its side. Put the exact time in a `<time>`.",
      example: "header-footer",
    },
    {
      title: "Plain Text",
      text: "With a `ghost` bubble the text runs unframed across the row, and the header and footer drop their 12px inset to line up with it: for the host's notes to the team and longer answers.",
      example: "plain-text",
    },
    {
      title: "Actions",
      text: "Ghost icon buttons in `MessageFooter` act on the message. Each needs an `aria-label` that names what it does.",
      example: "actions",
    },
    {
      title: "Failed",
      text: "A message that did not reach the guest takes a `destructive` bubble, and its footer says why in words, beside the action that retries it.",
      example: "failed",
    },
    {
      title: "Attachment",
      text: "An [Attachment](/januna/attachment) goes in `MessageContent` next to the bubble and keeps to the row's side.",
      example: "attachment",
    },
  ],
  api: [
    {
      name: "Message",
      text: "A `<div>` in `text-copy-14` that lays out the avatar and the content in a row, 8px apart. The parts inside read its `data-align`.",
      props: [["align", `"start" | "end"`, `"start"`]],
    },
    {
      name: "MessageAvatar",
      text: "A round holder on `surface-secondary` at the foot of the row, lifted clear of `MessageFooter` when there is one. Size it, or the `Avatar` inside does.",
    },
    {
      name: "MessageHeader",
      text: "A line in `text-label-12` and `content-secondary` above the content, inset 12px to the bubble's padding unless the bubble is `ghost`.",
    },
    {
      name: "MessageFooter",
      text: "The same line below the content, aligned to the end on an end-aligned row.",
    },
    {
      name: "MessageGroup",
      text: "A column of messages with an 8px gap.",
    },
  ],
} satisfies Doc;
