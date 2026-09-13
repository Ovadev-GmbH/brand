import type { Doc } from "../../types";

export default {
  description:
    "Work that has started and has no measurable end yet: a booking being saved, a deposit being charged, a lookup. When the end is known, show [Progress](/januna/progress); when the shape of the content is known, a [Skeleton](/januna/skeleton).",
  usage: `<Spinner />`,
  sections: [
    {
      title: "Size",
      text: "16px at stroke 2 by default, the size of an icon inside a control. Set another with a `size-*` class: `size-3` beside small text, `size-6` on its own with `strokeWidth={1.5}`, as for any standalone icon.",
      example: "size",
    },
    {
      title: "With Text",
      text: 'The spinner takes the colour of the text around it. Beside visible words, give it `aria-hidden` and put `role="status"` on the wrapper, so the words are what gets announced.',
      example: "with-text",
    },
    {
      title: "Button",
      text: 'Disable the button while the action runs and put the spinner where its icon would be, marked `data-icon="inline-start"`. The label says what is happening. See [Button](/januna/button).',
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
      text: 'Hugeicons\' `Loading03Icon` turning at 16px and stroke 2, with `role="status"` and `aria-label="Loading"`. Takes the props of `HugeiconsIcon` but `icon`, so all three can be replaced.',
    },
  ],
} satisfies Doc;
