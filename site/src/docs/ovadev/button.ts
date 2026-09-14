import type { Doc } from "../../types";

export default {
  description:
    "The control that acts. Ink for the one action a view exists for, quieter variants for everything beside it.",
  usage: `<Button variant="outline">Export CSV</Button>`,
  sections: [
    {
      title: "Size",
      text: "`size` sets the height: `xs` (24px) and `sm` (28px) for table rows and toolbars, the default 32px for forms, `lg` (40px) for the single action on an empty page. Each has a square `icon-` twin.",
      example: "size",
    },
    { title: "Default", text: "Ink carrying paper. Once per view, for the action the view is for.", example: "default" },
    {
      title: "Outline",
      text: "The resting control, with a hairline one step stronger than the page's. Most buttons on a screen are this one.",
      example: "outline",
    },
    { title: "Secondary", text: "A grey fill, for an action next to the primary one that should not compete with it.", example: "secondary" },
    { title: "Ghost", text: "No fill until the pointer is on it: toolbars, table rows, dismissals.", example: "ghost" },
    {
      title: "Destructive",
      text: "Red on a faint red fill, for what cannot be undone. Confirm it in an [Alert Dialog](/ovadev/alert-dialog) before it runs.",
      example: "destructive",
    },
    { title: "Link", text: "A button dressed as a link, for an action inside a sentence.", example: "link" },
    {
      title: "Icon",
      text: "An icon alone says nothing to a screen reader: give the button an `aria-label`. The `icon` sizes keep it square.",
      example: "icon",
    },
    {
      title: "With Icon",
      text: 'Mark the icon `data-icon="inline-start"` or `data-icon="inline-end"`; the button trims its padding on that side so the label stays centred.',
      example: "with-icon",
    },
    {
      title: "Spinner",
      text: "While the action runs, disable the button and put a `Spinner` where its icon would be, marked the same way.",
      example: "spinner",
    },
    {
      title: "Button Group",
      text: "Buttons that act on the same thing sit in a `ButtonGroup`, which joins their edges. See [Button Group](/ovadev/button-group).",
      example: "group",
    },
    {
      title: "As Link",
      text: "For navigation, put `buttonVariants` on an `<a>`. Rendering `Button` as an anchor does not work: Base UI's Button always sets `role=\"button\"`, and the link loses its role.",
      example: "as-link",
    },
  ],
  api: [
    {
      name: "Button",
      text: "Base UI's Button with the system's variants. Every other prop is Base UI's.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"default"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    {
      name: "buttonVariants",
      text: "The same classes as a function of `{ variant, size, className }`, for an element that is not a `Button`.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/button", api: "https://base-ui.com/react/components/button#api-reference" },
} satisfies Doc;
