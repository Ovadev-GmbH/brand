import type { Doc } from "../../types";

export default {
  description:
    "A secondary line that annotates what sits around it: when a count was last updated, the shift between two groups of bookings, reminders still being sent. A state of its own belongs in a [Badge](/januna/badge) with its word.",
  usage: `<Marker>
  <MarkerContent>Updated at 18:42</MarkerContent>
</Marker>`,
  composition: `Marker
├── MarkerIcon
└── MarkerContent`,
  sections: [
    {
      title: "Default",
      text: "A line in `text-label-14` and the secondary ink, for a note under a figure or beside a form. Put times and references inside it in `text-label-13-mono`.",
      example: "default",
    },
    {
      title: "Separator",
      text: '`variant="separator"` draws a `border-divider` rule on each side of the content and centres it, for the shift between two groups of bookings.',
      example: "separator",
    },
    {
      title: "Border",
      text: '`variant="border"` keeps the line left-aligned and rules it off from what follows, as the heading of a short list.',
      example: "border",
    },
    {
      title: "Icon",
      text: "`MarkerIcon` holds one Hugeicons icon at 16px, stroke 2, before the content. It is hidden from assistive technology, so the words in `MarkerContent` carry the meaning.",
      example: "icon",
    },
    {
      title: "Status",
      text: 'For something still under way, give the marker `role="status"` so the change is announced, and put a `Spinner` in `MarkerIcon`. Nothing else on the line moves.',
      example: "status",
    },
    {
      title: "Link",
      text: "`render` turns the marker into a real `<a>` or `<button>`, so it is focusable and has the right role. An anchor is underlined and darkens under the pointer; a button needs `hover:text-content-primary` of its own.",
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
    { name: "MarkerIcon", text: "A `<span>` for the icon, `aria-hidden`, sized to 16px." },
    { name: "MarkerContent", text: "A `<span>` for the text. It wraps rather than overflows, and underlines a link inside it." },
  ],
} satisfies Doc;
