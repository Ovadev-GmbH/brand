import type { Doc } from "../../types";

export default {
  description:
    "The scrolling frame of a conversation with a guest. It opens at the latest message, keeps the host in place while messages arrive or history loads above, and offers the way back to the end. For a list that only needs a scrollbar, use [Scroll Area](/januna/scroll-area).",
  usage: `<MessageScrollerProvider>
  <MessageScroller className="h-80 material-base">
    <MessageScrollerViewport>
      <MessageScrollerContent>
        {messages.map((message) => (
          <MessageScrollerItem key={message.id} messageId={message.id}>
            {message.text}
          </MessageScrollerItem>
        ))}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`,
  composition: `MessageScrollerProvider
└── MessageScroller
    ├── MessageScrollerViewport
    │   └── MessageScrollerContent
    │       └── MessageScrollerItem
    └── MessageScrollerButton`,
  sections: [
    {
      title: "Scroll Anchors",
      text: "`scrollAnchor` on an item marks where a turn begins. When an anchored item is added, the view brings it near the top with a slice of the previous item above it (`scrollPreviousItemPeek` on the provider), and the guest's answer arrives below.",
      example: "scroll-anchors",
    },
    {
      title: "Opening Position",
      text: '`defaultScrollPosition` on the provider decides where a saved conversation opens: `"end"`, `"start"`, or `"last-anchor"`, the start of the latest turn. It applies when the scroller mounts.',
      example: "opening-position",
    },
    {
      title: "Loading Earlier Messages",
      text: "Rows added above the reader do not move what they are reading: `preserveScrollOnPrepend` on the viewport is on unless turned off. Give every item a stable `messageId`.",
      example: "loading-earlier",
    },
    {
      title: "Following New Messages",
      text: "With `autoScroll` on the provider, a message that grows keeps its end in view while the reader is at the bottom. Scrolling up lets go of it; `MessageScrollerButton` picks it up again.",
      example: "following-new-messages",
    },
    {
      title: "Scroll Buttons",
      text: '`MessageScrollerButton` shows only when there is somewhere to go. `direction="start"` puts one at the top; children replace the arrow, and `variant` and `size` are the Button\'s.',
      example: "scroll-buttons",
    },
    {
      title: "Jump to a Message",
      text: "`useMessageScroller` returns `scrollToMessage`, `scrollToStart` and `scrollToEnd`, for controls anywhere inside the provider, such as the bookings a conversation mentions.",
      example: "jump-to-message",
    },
    {
      title: "Reading Position",
      text: "`useMessageScrollerVisibility` returns `currentAnchorId`, the turn being read, and `visibleMessageIds`, the rows on screen. Any row can anchor a turn, here a `Marker`.",
      example: "reading-position",
    },
    {
      title: "Scroll State",
      text: "`useMessageScrollerScrollable` returns `start` and `end`: whether the view can still scroll that way, for a status line or a control of your own.",
      example: "scroll-state",
    },
  ],
  api: [
    {
      name: "MessageScrollerProvider",
      text: 'Holds the state the parts and hooks share. Its props are the primitive\'s: `autoScroll` (off), `defaultScrollPosition` (`"end"`), `scrollPreviousItemPeek`, `scrollEdgeThreshold` and `scrollMargin`.',
    },
    {
      name: "MessageScroller",
      text: "The frame, a column that fills its box and clips. Give it a height, and a material such as `material-base` for an edge.",
    },
    {
      name: "MessageScrollerViewport",
      text: "The element that scrolls, with a thin scrollbar and a fade at its foot. It stays hidden until its opening position is applied, so the conversation never jumps into place.",
    },
    {
      name: "MessageScrollerContent",
      text: "The column of items, 32px apart unless its `className` sets a smaller gap.",
    },
    {
      name: "MessageScrollerItem",
      text: "One row. It renders off screen lazily, so give long conversations nothing to measure but the row itself.",
      props: [["scrollAnchor", "boolean", "false"]],
    },
    {
      name: "MessageScrollerButton",
      text: "A `Button` laid over the frame on `surface-primary` with a small lift, centred at its top or foot. Without children it is an arrow with a screen-reader label.",
      props: [
        ["direction", `"start" | "end"`, `"end"`],
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"secondary"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"icon-sm"`],
      ],
    },
    {
      name: "useMessageScroller",
      text: "Returns `scrollToStart`, `scrollToEnd` and `scrollToMessage(id)`, each taking `{ align, behavior, scrollMargin }` and returning whether the scroll ran or was queued.",
    },
  ],
  links: {
    lib: "@shadcn/react",
    doc: "https://ui.shadcn.com/docs/components/base/message-scroller",
    api: "https://ui.shadcn.com/docs/components/base/message-scroller#api-reference",
  },
} satisfies Doc;
