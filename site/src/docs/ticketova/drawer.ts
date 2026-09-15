import type { Doc } from "../../types";

export default {
  description:
    "A panel that slides in from an edge and is swiped away, made for touch: a confirmation on a phone, a filter panel, a build log. On a screen used with a mouse, [Sheet](/ticketova/sheet) or [Dialog](/ticketova/dialog) is simpler.",
  usage: `<Drawer>
  <DrawerTrigger render={<Button variant="outline" />}>Roll back</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Roll back to dpl_7c21?</DrawerTitle>
      <DrawerDescription>Production returns to the build from 2026-09-11.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
  composition: `Drawer
├── DrawerTrigger
└── DrawerContent
    ├── DrawerHeader
    │   ├── DrawerTitle
    │   └── DrawerDescription
    └── DrawerFooter
        └── DrawerClose`,
  sections: [
    {
      title: "Position",
      text: "`swipeDirection` on `Drawer` is both the edge the drawer sits on and the way it is swiped shut: `down` for the bottom by default, `up`, `left` or `right`. A side drawer is 75% of the screen wide, 384px from `sm` up.",
      example: "position",
    },
    {
      title: "Swipe Handle",
      text: "`showSwipeHandle` on `Drawer` draws a grab bar on the drawer's inner edge, a cue that it can be dragged.",
      example: "swipe-handle",
    },
    {
      title: "Snap Points",
      text: "`snapPoints` lets the drawer rest part-way open. Give fractions of the viewport height, pixels, or `px` and `rem` strings; swiping moves between them.",
      example: "snap-points",
    },
    {
      title: "Scrollable Content",
      text: "A bottom drawer grows with its content up to the viewport less 6rem. Give the part between header and footer `min-h-0 flex-1 overflow-y-auto` and it scrolls there.",
      example: "scrollable-content",
    },
    {
      title: "Non Modal",
      text: "`modal={false}` drops the backdrop and leaves the page usable behind the drawer; `disablePointerDismissal` keeps it open while the operator clicks elsewhere.",
      example: "non-modal",
    },
    {
      title: "Nested",
      text: "A `Drawer` inside another's content opens in front of it. The one behind shrinks back and dims until the front one closes.",
      example: "nested",
    },
    {
      title: "Responsive",
      text: "Render a `Dialog` from `md` up and a `Drawer` below, sharing one `open` state: a phone gets the swipe, a desktop the centred window.",
      example: "responsive",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` hand the state to you, so the drawer closes when the change has gone through rather than on the click.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Drawer",
      text: "Base UI's Drawer root. It also tells `DrawerContent` which edge to draw on and whether to draw the backdrop and the handle.",
      props: [
        ["modal", `boolean | "trap-focus"`, "true"],
        ["swipeDirection", `"down" | "up" | "left" | "right"`, `"down"`],
        ["showSwipeHandle", "boolean", "false"],
      ],
    },
    {
      name: "DrawerContent",
      text: "The portal, the backdrop when `modal` is `true`, and the panel. Takes Base UI's Popup props.",
    },
    { name: "DrawerSwipeHandle", text: "The grab bar that `showSwipeHandle` renders." },
  ],
  links: { doc: "https://base-ui.com/react/components/drawer", api: "https://base-ui.com/react/components/drawer#api-reference" },
} satisfies Doc;
