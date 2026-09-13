import type { Doc } from "../../types";

export default {
  description:
    "A question that has to be answered before anything else happens, for an action that cannot be undone: revoking a key, voiding an invoice, deleting a tenant. For a task with fields, use [Dialog](/internal/dialog).",
  usage: `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>Void invoice</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Void INV-2026-0142?</AlertDialogTitle>
      <AlertDialogDescription>The invoice stays in the ledger, marked void.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep invoice</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Void invoice</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  composition: `AlertDialog
├── AlertDialogTrigger
└── AlertDialogContent
    ├── AlertDialogHeader
    │   ├── AlertDialogMedia
    │   ├── AlertDialogTitle
    │   └── AlertDialogDescription
    └── AlertDialogFooter
        ├── AlertDialogCancel
        └── AlertDialogAction`,
  sections: [
    {
      title: "Closing",
      text: "`AlertDialogCancel` and `AlertDialogAction` both close the dialog: the action runs its `onClick`, then the dialog goes. When the answer depends on a request, hold `open` yourself and use a plain `Button`, so the dialog stays until the request has gone through, as the examples below do.",
    },
    {
      title: "Small",
      text: '`size="sm"` on `AlertDialogContent` centres the text and splits the footer into two equal buttons, for a question short enough to read at a glance.',
      example: "small",
    },
    {
      title: "Media",
      text: "`AlertDialogMedia` at the top of the header holds one icon on a grey square. From `sm` up it sits beside the title and description.",
      example: "media",
    },
    {
      title: "Small With Media",
      text: 'With `size="sm"` the media stays above the title, centred with it.',
      example: "small-media",
    },
    {
      title: "Type to Confirm",
      text: "For the worst case, put a `Field` between header and footer and keep the destructive `AlertDialogAction` disabled until the typed name matches.",
      example: "type-to-confirm",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` hand the state to you: disable both buttons while the request runs, and close when it has gone through.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "AlertDialogContent",
      text: "The window, with its backdrop and portal. Takes Base UI's Popup props.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
    {
      name: "AlertDialogCancel",
      text: "Base UI's Close, rendered as a `Button`.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"outline"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    {
      name: "AlertDialogAction",
      text: "Base UI's Close, rendered as a `Button`, like `AlertDialogCancel`: it closes the dialog.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"default"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    { name: "AlertDialogMedia", text: "A 40px grey square in the header, for one icon." },
  ],
  links: {
    doc: "https://base-ui.com/react/components/alert-dialog",
    api: "https://base-ui.com/react/components/alert-dialog#api-reference",
  },
} satisfies Doc;
