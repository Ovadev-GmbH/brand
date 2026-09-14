import type { Doc } from "../../types";

export default {
  description:
    "What a view shows when it has nothing to show: it says what is empty and offers the one action that fills it. No illustration.",
  usage: `<Empty>
  <EmptyHeader>
    <EmptyTitle>No posts</EmptyTitle>
    <EmptyDescription>The blog has nothing published yet.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button size="sm">Write a post</Button>
  </EmptyContent>
</Empty>`,
  composition: `Empty
├── EmptyHeader
│   ├── EmptyMedia
│   ├── EmptyTitle
│   └── EmptyDescription
└── EmptyContent`,
  sections: [
    {
      title: "Outline",
      text: "`Empty` has no edge of its own. Add `border` and it draws a dashed one, for an empty area among other content on the page.",
      example: "outline",
    },
    {
      title: "Icon",
      text: '`variant="icon"` on `EmptyMedia` sets a 16px icon in a 32px grey square. One icon, naming what is missing.',
      example: "icon",
    },
    {
      title: "Without Media",
      text: "Title and description alone, for a small panel where an icon would be the largest thing in it. A link in `EmptyDescription` is underlined.",
      example: "without-media",
    },
    {
      title: "In a Table",
      text: "When a filter leaves no rows, keep the header and put `Empty` in one cell spanning every column. Say what was filtered and offer to clear it.",
      example: "table",
    },
    {
      title: "With Input",
      text: "`EmptyContent` holds a field as well as buttons: a search, when the record someone asked for does not exist.",
      example: "with-input",
    },
    {
      title: "Error",
      text: "When loading failed, the same parts say so. The icon takes the danger colour beside the words, and the action is to try again.",
      example: "error",
    },
  ],
  api: [
    {
      name: "Empty",
      text: "A centred column with room around it, and a dashed edge once `border` is added. Every part takes its element's props.",
    },
    {
      name: "EmptyMedia",
      text: "The icon above the title.",
      props: [["variant", `"default" | "icon"`, `"default"`]],
    },
    {
      name: "EmptyContent",
      text: "The actions or a field below the header, at most 384px wide.",
    },
  ],
} satisfies Doc;
