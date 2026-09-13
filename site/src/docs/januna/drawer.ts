import type { Doc } from "../../types";

export default {
  description:
    "A panel that slides in from an edge and is swiped away, made for touch: the waitlist on the host's tablet, a booking on the guest's phone. On the manager's laptop, [Sheet](/januna/sheet) or [Dialog](/januna/dialog) is simpler.",
  usage: `<Drawer>
  <DrawerTrigger render={<Button variant="outline" />}>Mark as no-show</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Mark Nora Keller as a no-show?</DrawerTitle>
      <DrawerDescription>Table 12 is released for the rest of the evening.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose render={<Button variant="outline" />}>Keep waiting</DrawerClose>
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
      text: "`swipeDirection` on `Drawer` is both the edge the drawer sits on and the way it is swiped shut: `down` for the bottom by default, `up`, `left` or `right`. A side drawer is 75% of the screen wide, 384px from `sm` up. On a top or bottom drawer the header is centred until `md`.",
      example: "position",
    },
    {
      title: "Swipe Handle",
      text: "`showSwipeHandle` on `Drawer` draws a grab bar on the drawer's inner edge, a cue that it can be dragged.",
      example: "swipe-handle",
    },
    {
      title: "Snap Points",
      text: "`snapPoints` lets the drawer rest part-way open. Give fractions of the viewport height, pixels, or `px` and `rem` strings; swiping moves between them, and the scrim stays at half strength.",
      example: "snap-points",
    },
    {
      title: "Scrollable Content",
      text: "A bottom drawer grows with its content up to the viewport less 6rem. Give the part between header and footer `min-h-0 flex-1 overflow-y-auto` and it scrolls there.",
      example: "scrollable-content",
    },
    {
      title: "Non Modal",
      text: "`modal={false}` drops the scrim and leaves the page usable behind the drawer; `disablePointerDismissal` keeps it open while the host taps the floor plan.",
      example: "non-modal",
    },
    {
      title: "Nested",
      text: "A `Drawer` inside another's content opens in front of it. The one behind shrinks back and dims until the front one closes.",
      example: "nested",
    },
    {
      title: "Responsive",
      text: "`useIsMobile` from the package is `true` below 768px. Render a `Drawer` there and a `Dialog` above, sharing one `open` state: the phone gets the swipe, the laptop the centred window.",
      example: "responsive",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` hand the state to you, so the drawer closes when the change has been saved rather than on the tap.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Drawer",
      text: "Base UI's Drawer root. It also tells `DrawerContent` which edge to draw on and whether to draw the scrim and the handle.",
      props: [
        ["modal", `boolean | "trap-focus"`, "true"],
        ["swipeDirection", `"down" | "up" | "left" | "right"`, `"down"`],
        ["showSwipeHandle", "boolean", "false"],
      ],
    },
    {
      name: "DrawerContent",
      text: "The portal, the scrim when `modal` is `true`, and the panel on the modal material. Takes Base UI's Popup props.",
    },
    { name: "DrawerSwipeHandle", text: "The pill-shaped grab bar that `showSwipeHandle` renders." },
    { name: "useIsMobile", text: "A hook: `true` below 768px. It reads `false` on the first render, before the window has been measured." },
  ],
  links: { doc: "https://base-ui.com/react/components/drawer", api: "https://base-ui.com/react/components/drawer#api-reference" },
} satisfies Doc;
