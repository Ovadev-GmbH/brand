import type { Doc } from "../../types";

export default {
  description:
    "A button that stays pressed until it is pressed again: follow a log, watch a thread, show archived rows. For one choice among several, use [Toggle Group](/ovadev/toggle-group).",
  usage: `<Toggle variant="outline">Archived</Toggle>`,
  sections: [
    {
      title: "Outline",
      text: '`variant="outline"` gives the toggle a hairline, so it reads as a control next to inputs and outline buttons. The default has no edge until it is hovered or pressed.',
      example: "outline",
    },
    {
      title: "Size",
      text: "`size` sets the height: `sm` (28px) for dense toolbars, the default 32px, `lg` (40px) beside a large button.",
      example: "size",
    },
    {
      title: "With Icon",
      text: 'Mark the icon `data-icon="inline-start"` or `data-icon="inline-end"`; the toggle trims its padding on that side.',
      example: "with-icon",
    },
    {
      title: "Icon",
      text: "A toggle with only an icon needs an `aria-label`. Whether it is pressed reaches a screen reader through `aria-pressed`.",
      example: "icon",
    },
    { title: "Disabled", text: "`disabled` dims the toggle and keeps it in the state it was in.", example: "disabled" },
    {
      title: "Controlled",
      text: "`pressed` and `onPressedChange` when the state lives outside the toggle, such as whether a log follows its newest lines.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Toggle",
      text: "Base UI's Toggle with the system's variants. Every other prop is Base UI's.",
      props: [
        ["variant", `"default" | "outline"`, `"default"`],
        ["size", `"default" | "sm" | "lg"`, `"default"`],
      ],
    },
    {
      name: "toggleVariants",
      text: "The same classes as a function of `{ variant, size, className }`, for an element that is not a `Toggle`.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/toggle", api: "https://base-ui.com/react/components/toggle#api-reference" },
} satisfies Doc;
