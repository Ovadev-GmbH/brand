import type { Doc } from "../../types";

export default {
  description:
    "A note in the flow of the page that stays until its cause is gone: a declined deposit, a shift close to full, bookings paused while the floor plan changes. For news about something the host just did, use a [Toast](/januna/toast).",
  usage: `<Alert>
  <AlertTitle>Terrace closed tonight</AlertTitle>
  <AlertDescription>Rain from 18:00. Terrace bookings move inside.</AlertDescription>
</Alert>`,
  composition: `Alert
├── AlertTitle
├── AlertDescription
└── AlertAction`,
  sections: [
    {
      title: "Info",
      text: '`variant="info"` on the info fill with a faint blue edge, for something worth knowing that asks nothing of the reader. An icon as the first child gets a column of its own and takes the variant\'s colour.',
      example: "info",
    },
    {
      title: "Success",
      text: '`variant="success"`, for a state that is now confirmed and stays true, such as a payment account that was connected.',
      example: "success",
    },
    {
      title: "Warning",
      text: '`variant="warning"`, for what needs attention before it becomes a problem: a shift close to full, a guest running late.',
      example: "warning",
    },
    {
      title: "Destructive",
      text: '`variant="destructive"` sets the title and the description in the danger colour as well as the fill, for what has failed or is blocked.',
      example: "destructive",
    },
    {
      title: "Small",
      text: '`size="sm"` is the inline note: icon, words and an optional action on one row in Label 13, beside the field or section it is about.',
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
      text: 'A `<div>` with `role="alert"` and 12px corners, so a screen reader announces it when it appears. Takes every div prop.',
      props: [
        ["variant", `"default" | "info" | "success" | "warning" | "destructive"`, `"default"`],
        ["size", `"default" | "sm"`, `"default"`],
      ],
    },
    {
      name: "AlertTitle",
      text: "The first line, in Heading 14.",
    },
    {
      name: "AlertDescription",
      text: "The explanation, in Copy 14 and the secondary colour.",
    },
    {
      name: "AlertAction",
      text: 'Sits in the top-right corner; with `size="sm"` it ends the row instead.',
    },
  ],
} satisfies Doc;
