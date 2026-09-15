import type { Doc } from "../../types";

export default {
  description:
    "A box whose height follows its width at a fixed ratio, for screenshots, previews and charts that must not jump as the column changes.",
  usage: `<AspectRatio ratio={16 / 9} className="bg-surface-secondary">
  <img src={preview} alt="Deployment d-8f3a21c" className="size-full object-cover" />
</AspectRatio>`,
  sections: [
    {
      title: "Square",
      text: "`ratio={1}` for a tenant's logo or an avatar upload, at whatever width the column gives it.",
      example: "square",
    },
    {
      title: "Portrait",
      text: "A ratio under 1 is taller than wide: `ratio={9 / 16}` for a screenshot a customer sent from their phone.",
      example: "portrait",
    },
    {
      title: "Filling the Box",
      text: "`AspectRatio` is `relative`, so a child with `absolute inset-0` takes the whole box. An `<img>` wants `size-full object-cover`; an `<svg>` wants `preserveAspectRatio` set to how it may stretch.",
      example: "fill",
    },
    {
      title: "In a Grid",
      text: "In a grid the columns set each width and the ratio sets every height, so the rows line up whatever the content.",
      example: "grid",
    },
  ],
  api: [
    {
      name: "AspectRatio",
      text: "A `<div>` that takes every `<div>` prop. `ratio` is required: the width divided by the height.",
      props: [["ratio", "number", "–"]],
    },
  ],
} satisfies Doc;
