import type { Doc } from "../../types";

export default {
  description:
    "A small secondary line that annotates what sits around it: a sync time under a table, a day between audit events, a deployment that is still rolling out. A state of its own belongs in a [Status Dot](/internal/status-dot).",
  usage: `<Marker>
  <MarkerContent>Last synced 2026-09-13 14:02 UTC</MarkerContent>
</Marker>`,
  composition: `Marker
├── MarkerIcon
└── MarkerContent`,
  sections: [
    {
      title: "Default",
      text: "An inline line in `text-label-12` and the secondary ink, for a note beside a table or a form. Put timestamps and IDs inside it in `text-label-12-mono`.",
      example: "default",
    },
    {
      title: "Separator",
      text: '`variant="separator"` draws a rule on each side of the content and centres it, for a date between groups of events.',
      example: "separator",
    },
    {
      title: "Border",
      text: '`variant="border"` keeps the line left-aligned and rules it off from what follows, as the heading of a short list.',
      example: "border",
    },
    {
      title: "Icon",
      text: "`MarkerIcon` holds one Lucide icon before the content. It is hidden from assistive technology, so the words in `MarkerContent` have to carry the meaning.",
      example: "icon",
    },
    {
      title: "Status",
      text: 'For something still in progress, give the marker `role="status"` so the change is announced, and put a `Spinner` in the `MarkerIcon`.',
      example: "status",
    },
    {
      title: "Link",
      text: "`render` turns the marker into a real `<a>` or `<button>`, so it is focusable and has the right role. An anchor is underlined.",
      example: "link",
    },
  ],
  api: [
    {
      name: "Marker",
      text: "A `<div>` by default. Every other prop goes to the element it renders.",
      props: [
        ["variant", `"default" | "separator" | "border"`, `"default"`],
        ["render", "React.ReactElement | ((props, state) => React.ReactElement)", "–"],
      ],
    },
    { name: "MarkerIcon", text: "A `<span>` for the icon, `aria-hidden`, sized to 14px." },
    { name: "MarkerContent", text: "A `<span>` for the text. It wraps rather than overflows, and underlines any link inside it." },
  ],
} satisfies Doc;
