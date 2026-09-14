import type { Doc } from "../../types";

export default {
  description:
    "A panel that slides over the page from one edge, for a record's details or an edit where the list behind should stay in mind. For a short task in the middle of the screen, use [Dialog](/internal/dialog); for touch, [Drawer](/internal/drawer).",
  usage: `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>Open invoice</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>INV-2026-0142</SheetTitle>
      <SheetDescription>Issued 2026-09-01 to acme-logistics.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  composition: `Sheet
├── SheetTrigger
└── SheetContent
    ├── SheetHeader
    │   ├── SheetTitle
    │   └── SheetDescription
    └── SheetFooter
        └── SheetClose`,
  sections: [
    {
      title: "Side",
      text: "`side` on `SheetContent` picks the edge: `right` by default, `left`, `top` or `bottom`. A left or right sheet is three quarters of the screen wide, and 384px at most from `sm` up.",
      example: "side",
    },
    {
      title: "Width",
      text: "The width limit is set per side, so a wider sheet names its side in the class: `data-[side=right]:sm:max-w-xl`.",
      example: "width",
    },
    {
      title: "Form",
      text: "Fields go between `SheetHeader` and `SheetFooter`, which sits at the bottom of the panel. Wrap all three in the `<form>` so the footer's button submits it.",
      example: "form",
    },
    {
      title: "Scrollable Content",
      text: "Give the part between header and footer `min-h-0 flex-1 overflow-y-auto`; it scrolls while the header and the footer's actions stay in view.",
      example: "scrollable-content",
    },
    {
      title: "No Close Button",
      text: "`showCloseButton={false}` on `SheetContent` removes the × in the corner, when the sheet should be left through its own buttons.",
      example: "no-close-button",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` hand the state to you, for a sheet opened from a table row instead of a `SheetTrigger`.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "SheetContent",
      text: "The panel, with its backdrop and portal. Takes Base UI's Dialog Popup props.",
      props: [
        ["side", `"top" | "right" | "bottom" | "left"`, `"right"`],
        ["showCloseButton", "boolean", "true"],
      ],
    },
    { name: "SheetFooter", text: "The actions, stacked and pushed to the bottom of the panel." },
  ],
  links: { doc: "https://base-ui.com/react/components/dialog", api: "https://base-ui.com/react/components/dialog#api-reference" },
} satisfies Doc;
