import type { Doc } from "../../types";

export default {
  description:
    "A region with a scroll position of its own and a thin grey scrollbar, for a long list inside a panel of fixed height. For a conversation that should follow new messages, use [Message Scroller](/ticketova/message-scroller).",
  usage: `<ScrollArea className="h-48 w-72">
  {events.map((event) => (
    <div key={event.id} className="px-3 py-2 text-label-13">
      {event.action}
    </div>
  ))}
</ScrollArea>`,
  sections: [
    {
      title: "Horizontal",
      text: 'Add a `ScrollBar` with `orientation="horizontal"` among the children, and give the content `w-max` so it runs past the edge instead of wrapping.',
      example: "horizontal",
    },
    {
      title: "Both Directions",
      text: "The vertical bar comes with `ScrollArea`; with the horizontal one added, a log with long lines scrolls both ways.",
      example: "both-directions",
    },
    {
      title: "Sticky Header",
      text: "A heading inside the content with `sticky top-0` stays in view while its rows scroll under it. Give it a surface, or the rows show through.",
      example: "sticky-header",
    },
  ],
  api: [
    {
      name: "ScrollArea",
      text: "Base UI's Root with the Viewport, a vertical `ScrollBar` and the Corner already inside. Its children go into the viewport, which takes focus when it can scroll; set the size on `ScrollArea` itself.",
    },
    {
      name: "ScrollBar",
      text: "A scrollbar with a grey thumb, for the direction `ScrollArea` does not add. Place it among the children.",
      props: [["orientation", `"vertical" | "horizontal"`, `"vertical"`]],
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/scroll-area",
    api: "https://base-ui.com/react/components/scroll-area#api-reference",
  },
} satisfies Doc;
