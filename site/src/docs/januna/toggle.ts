import type { Doc } from "../../types";

export default {
  description:
    "A button that stays pressed until it is pressed again: take walk-ins, show table numbers on the floor plan, watch the waitlist. Pressed is shade, never green. For one choice among several, use [Toggle Group](/januna/toggle-group).",
  usage: `<Toggle variant="outline">Show cancelled</Toggle>`,
  sections: [
    {
      title: "Outline",
      text: '`variant="outline"` draws a hairline in the divider colour, so the toggle reads as a control beside inputs and outline buttons. The default has no edge; both show pressed as the ink at 8%.',
      example: "outline",
    },
    {
      title: "Size",
      text: "`size` sets the height: `sm` (32px) for dense rows and toolbars, the default 40px, `lg` (48px) beside a large button.",
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
      text: "`pressed` and `onPressedChange` when the state lives outside the toggle, such as whether the lectern takes walk-ins tonight.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Toggle",
      text: "Base UI's Toggle with Januna's variants. Every other prop is Base UI's.",
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
