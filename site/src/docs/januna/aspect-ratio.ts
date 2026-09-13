import type { Doc } from "../../types";

export default {
  description:
    "A box whose height follows its width at a fixed ratio, for a floor plan, a photo of a table and a chart of the evening that must not jump as the column changes.",
  usage: `<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-regular bg-surface-secondary">
  <img src={terrace} alt="Terrace 3, set for dinner" className="size-full object-cover" />
</AspectRatio>`,
  sections: [
    {
      title: "Square",
      text: "`ratio={1}` for the restaurant's logo or a guest's profile photo, at whatever width the column gives it.",
      example: "square",
    },
    {
      title: "Portrait",
      text: "A ratio under 1 is taller than wide: `ratio={9 / 16}` for a photo a guest sent from their phone.",
      example: "portrait",
    },
    {
      title: "Filling the Box",
      text: "`AspectRatio` is `relative`, so a child with `absolute inset-0` takes the whole box. An `<img>` wants `size-full object-cover`; an `<svg>` wants `preserveAspectRatio` set to how it may stretch. Round the box with `rounded-regular` and `overflow-hidden`, not the child.",
      example: "fill",
    },
    {
      title: "In a Grid",
      text: "In a grid the columns set each width and the ratio sets every height, so the floor sections line up whatever they hold.",
      example: "grid",
    },
  ],
  api: [
    {
      name: "AspectRatio",
      text: "A `<div>` that takes every `<div>` prop and draws nothing of its own. `ratio` is required: the width divided by the height.",
      props: [["ratio", "number", "–"]],
    },
  ],
} satisfies Doc;
