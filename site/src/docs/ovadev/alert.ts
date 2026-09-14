import type { Doc } from "../../types";

export default {
  description:
    "A note in the flow of the page that stays until its cause is gone: a maintenance window, a contact form that stopped sending, a domain about to expire. For news about something the editor just did, use a [Toast](/ovadev/toast).",
  usage: `<Alert>
  <AlertTitle>Maintenance on 2026-09-21</AlertTitle>
  <AlertDescription>ova.dev is read-only from 02:00 to 02:30 CEST while the host moves it.</AlertDescription>
</Alert>`,
  composition: `Alert
├── AlertTitle
├── AlertDescription
└── AlertAction`,
  sections: [
    {
      title: "Info",
      text: '`variant="info"` on a blue fill, for something worth knowing that asks nothing of the reader. An icon as the first child gets a column of its own and takes the variant\'s colour.',
      example: "info",
    },
    {
      title: "Success",
      text: '`variant="success"`, for a state that is now confirmed and stays true, such as a certificate that was issued.',
      example: "success",
    },
    {
      title: "Warning",
      text: '`variant="warning"`, for what needs attention before it becomes a problem: a mailbox close to its limit, a domain about to expire.',
      example: "warning",
    },
    {
      title: "Destructive",
      text: '`variant="destructive"` sets the text in red as well as the fill, for what has failed or is blocked.',
      example: "destructive",
    },
    {
      title: "Small",
      text: '`size="sm"` is the inline note: icon, words and an optional action on one row, beside the field or section it is about.',
      example: "small",
    },
    {
      title: "Action",
      text: "`AlertAction` pins a small button to the top-right corner and keeps the text clear of it. It holds the action that resolves the alert; an alert has no dismiss button.",
      example: "action",
    },
    {
      title: "Link",
      text: "A link inside `AlertTitle` or `AlertDescription` is underlined, for when the fix lives on another page.",
      example: "link",
    },
    {
      title: "In a Form",
      text: "Above a form, an alert says why the last submit failed when the reason belongs to no single field. A reason that does belong to a field goes in that field's `FieldError`.",
      example: "in-form",
    },
  ],
  api: [
    {
      name: "Alert",
      text: 'A `<div>` with `role="alert"`, so a screen reader announces it when it appears. Takes every div prop.',
      props: [
        ["variant", `"default" | "info" | "success" | "warning" | "destructive"`, `"default"`],
        ["size", `"default" | "sm"`, `"default"`],
      ],
    },
    {
      name: "AlertAction",
      text: 'Sits in the top-right corner; with `size="sm"` it ends the row instead.',
    },
  ],
} satisfies Doc;
