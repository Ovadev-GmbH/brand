import type { Doc } from "../../types";

export default {
  description:
    "A file on a form, a contact request or a message: its type, name and size, how far its upload has got, and what can be done with it.",
  usage: `<Attachment>
  <AttachmentMedia>
    <FileTextIcon />
  </AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>ovadev-press-kit.zip</AttachmentTitle>
    <AttachmentDescription>12.4 MB</AttachmentDescription>
  </AttachmentContent>
</Attachment>`,
  composition: `AttachmentGroup
└── Attachment
    ├── AttachmentMedia
    ├── AttachmentContent
    │   ├── AttachmentTitle
    │   └── AttachmentDescription
    ├── AttachmentActions
    │   └── AttachmentAction
    └── AttachmentTrigger`,
  sections: [
    {
      title: "Size",
      text: '`size` on `Attachment`: `"default"` in a form, `"sm"` in a message, `"xs"` where a row of files has to stay one line.',
      example: "size",
    },
    {
      title: "Image",
      text: '`variant="image"` on `AttachmentMedia` crops an `<img>` to a square. `orientation="vertical"` on `Attachment` puts the image above the name, for screenshots worth seeing before opening.',
      example: "image",
    },
    {
      title: "States",
      text: '`state` follows the upload: `"idle"` is dashed, `"uploading"` and `"processing"` shimmer the title, `"error"` turns red. Say what happened in `AttachmentDescription`, so the colour is never the only sign.',
      example: "states",
    },
    {
      title: "Actions",
      text: "`AttachmentActions` holds ghost icon buttons made with `AttachmentAction`. Name the file in each `aria-label`, since a row of files has many buttons called Remove.",
      example: "actions",
    },
    {
      title: "Group",
      text: "`AttachmentGroup` lays files out in one row that scrolls sideways and snaps to each file. When nothing in it is focusable, give the group `tabIndex={0}` and a label so the keyboard can scroll it.",
      example: "group",
    },
    {
      title: "Trigger",
      text: "`AttachmentTrigger` covers the whole card with a button, here the trigger of a `Dialog` that previews the file. The actions sit above it and stay separately clickable.",
      example: "trigger",
    },
    {
      title: "Upload Progress",
      text: "Drive `state` and the description from the upload itself, from choosing the file to the moment it is stored.",
      example: "upload-progress",
    },
  ],
  api: [
    {
      name: "Attachment",
      text: "The card, a `<div>` with the hairline edge.",
      props: [
        ["state", `"idle" | "uploading" | "processing" | "error" | "done"`, `"done"`],
        ["size", `"default" | "sm" | "xs"`, `"default"`],
        ["orientation", `"horizontal" | "vertical"`, `"horizontal"`],
      ],
    },
    {
      name: "AttachmentMedia",
      text: "The square before the name, for a file-type icon, a `Spinner` or an image.",
      props: [["variant", `"icon" | "image"`, `"icon"`]],
    },
    {
      name: "AttachmentAction",
      text: "A `Button` with the attachment's defaults. Every other prop is the Button's.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"ghost"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"icon-xs"`],
      ],
    },
    {
      name: "AttachmentTrigger",
      text: 'A `<button type="button">` laid over the card behind the actions. `render` swaps the element, for a link or another component\'s trigger.',
    },
    {
      name: "AttachmentGroup",
      text: "A row that scrolls sideways, snaps to each attachment and fades at its edges.",
    },
  ],
} satisfies Doc;
