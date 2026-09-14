import type { Doc } from "../../types";

export default {
  description:
    "Work that has started and has no measurable end yet: a request, a refresh, a check. When the end is known, show [Progress](/ovadev/progress); when the shape of the content is known, a [Skeleton](/ovadev/skeleton).",
  usage: `<Spinner />`,
  sections: [
    {
      title: "Size",
      text: "16px by default, the size of an icon inside a control. Set another with a `size-*` class: `size-3` beside small text, `size-5` on its own.",
      example: "size",
    },
    {
      title: "With Text",
      text: 'The spinner takes the colour of the text around it. Beside visible words, give it `aria-hidden` and put `role="status"` on the wrapper, so the words are what gets announced.',
      example: "with-text",
    },
    {
      title: "Button",
      text: 'Disable the button while the action runs and put the spinner where its icon would be, marked `data-icon="inline-start"`. See [Button](/ovadev/button).',
      example: "button",
    },
    {
      title: "Badge",
      text: "Inside a `Badge` the spinner shrinks to 12px like any icon there, for a label whose work is still running.",
      example: "badge",
    },
    {
      title: "Input Group",
      text: "In an `InputGroupAddon` at the end of the field, while what was typed is being checked. Its `aria-label` says what is being checked.",
      example: "input-group",
    },
    {
      title: "Empty",
      text: "In `EmptyMedia`, for a panel whose content is on its way and has no shape to draw yet.",
      example: "empty",
    },
  ],
  api: [
    {
      name: "Spinner",
      text: 'Lucide\'s `Loader2` turning at 16px, with `role="status"` and `aria-label="Loading"`. Every SVG prop passes through, so both can be replaced.',
    },
  ],
} satisfies Doc;
