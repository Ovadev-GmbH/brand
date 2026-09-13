import type { Doc } from "../../types";

export default {
  description:
    "A panel that slides over the page from one edge, for a booking or a guest profile while tonight's list stays in view behind it. For a short decision in the middle of the screen, use [Dialog](/januna/dialog); on the guest's phone, [Drawer](/januna/drawer).",
  usage: `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>Open booking</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Nora Keller, party of 4</SheetTitle>
      <SheetDescription>Tonight at 19:30, Table 12.</SheetDescription>
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
      text: "`SheetHeader` and `SheetFooter` are padded 32px, so the fields between them take `px-8` to line up. Wrap all three in the `<form>` so the footer's button submits it.",
      example: "form",
    },
    {
      title: "Scrollable Content",
      text: "Give the part between header and footer `min-h-0 flex-1 overflow-y-auto`; it scrolls while the title and the footer's actions stay in view.",
      example: "scrollable-content",
    },
    {
      title: "No Close Button",
      text: "`showCloseButton={false}` on `SheetContent` removes the close button in the top corner, when the sheet should be left through its own buttons.",
      example: "no-close-button",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` hand the state to you, for a sheet opened from a row of tonight's bookings instead of a `SheetTrigger`.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "SheetContent",
      text: "The panel on the modal material, with its scrim and portal. Takes Base UI's Dialog Popup props.",
      props: [
        ["side", `"top" | "right" | "bottom" | "left"`, `"right"`],
        ["showCloseButton", "boolean", "true"],
      ],
    },
    { name: "SheetHeader", text: "The title over the description, padded 32px." },
    { name: "SheetFooter", text: "The actions, stacked, padded 32px and pushed to the bottom of the panel." },
  ],
  links: { doc: "https://base-ui.com/react/components/dialog", api: "https://base-ui.com/react/components/dialog#api-reference" },
} satisfies Doc;
