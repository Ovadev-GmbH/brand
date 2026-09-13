import type { Doc } from "../../types";

export default {
  description:
    "A window over the page for a task that needs full attention. The page behind it cannot be used until the dialog closes.",
  usage: `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>Rename tenant</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Rename tenant</DialogTitle>
      <DialogDescription>Only the display name changes.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  composition: `Dialog
├── DialogTrigger
└── DialogContent
    ├── DialogHeader
    │   ├── DialogTitle
    │   └── DialogDescription
    └── DialogFooter
        └── DialogClose`,
  sections: [
    {
      title: "Trigger",
      text: "`DialogTrigger` renders a plain button. Pass `render` to make it one of the system's buttons; the trigger's behaviour and the Button's look combine.",
      code: `<DialogTrigger render={<Button variant="outline" />}>Rename tenant</DialogTrigger>`,
    },
    {
      title: "Custom Close Button",
      text: "`DialogClose` closes the dialog from anywhere inside it. Give it `render` for the button it should look like.",
      example: "close-button",
    },
    {
      title: "Footer Close Button",
      text: "`showCloseButton` on `DialogFooter` adds an outline Close at the end of the footer, for a dialog that only informs.",
      example: "footer-close",
    },
    {
      title: "No Close Button",
      text: "`showCloseButton={false}` on `DialogContent` removes the × in the corner, when the dialog should only be left through its own action.",
      example: "no-close-button",
    },
    {
      title: "Sticky Footer",
      text: "Put the long part in its own scrolling container, and the footer's actions stay in view.",
      example: "sticky-footer",
    },
    { title: "Scrollable Content", text: "Without a footer, the same container scrolls under a header that stays put.", example: "scrollable-content" },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` hand the state to you, so the dialog can close when a save has gone through rather than on the click.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "DialogContent",
      text: "The window, with its backdrop and portal. Takes Base UI's Popup props.",
      props: [["showCloseButton", "boolean", "true"]],
    },
    {
      name: "DialogFooter",
      text: "The actions, right-aligned from `sm` up and stacked below it.",
      props: [["showCloseButton", "boolean", "false"]],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/dialog", api: "https://base-ui.com/react/components/dialog#api-reference" },
} satisfies Doc;
