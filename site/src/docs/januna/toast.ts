import type { Doc } from "../../types";

export default {
  description:
    "A short message about something that happened out of view: reminders that went out, a report that is ready, a connection that dropped. What the screen already shows needs no toast; for something that needs an answer, use [Alert Dialog](/januna/alert-dialog).",
  usage: `<Button
  variant="outline"
  onClick={() =>
    toast.add({ title: "Booking confirmed", description: "Table 12 for Nora Keller, tonight at 19:30." })
  }
>
  Confirm booking
</Button>`,
  composition: `Toaster
└── ToastPortal
    └── ToastViewport
        └── Toast
            └── ToastContent
                ├── ToastTitle
                ├── ToastDescription
                ├── ToastAction
                └── ToastClose`,
  sections: [
    {
      title: "Toaster",
      text: "Render `Toaster` once, around the app. It draws the stack in the corner, and `toast` sends to it from anywhere, event handlers and code outside React included.",
      code: `<Toaster>
  <App />
</Toaster>`,
    },
    {
      title: "Types",
      text: "`type` picks the icon: `success`, `info` and `warning` in the ink, `error` in red, or `loading`, which turns. A toast without a type has no icon, so the title has to name the outcome either way.",
      example: "types",
    },
    {
      title: "Action",
      text: "`actionProps` adds a small outline button, for the one thing worth doing next, such as undoing what just happened.",
      example: "action",
    },
    {
      title: "Promise",
      text: "`toast.promise` shows a loading toast while the promise runs, and turns it into the success or the error message when it settles.",
      example: "promise",
    },
    {
      title: "Update",
      text: "`toast.add` returns an id, and `toast.update` with it changes that toast in place, so a task of several steps reports them in one toast.",
      example: "update",
    },
    {
      title: "Timeout",
      text: '`timeout: 0` keeps a toast until it is closed, instead of for 5 seconds; `priority: "high"` has screen readers announce it at once. Keep both for what must not be missed at 19:58.',
      example: "timeout",
    },
  ],
  api: [
    {
      name: "Toaster",
      text: "Base UI's Toast Provider with the stack drawn in: bottom right, 384px wide, on the menu material with 16px corners, and 16px from each edge on a phone. Takes the Provider's props, among them `limit` and `timeout`.",
      props: [["toastManager", "ToastManager", "toast"]],
    },
    {
      name: "toast",
      text: "The manager `Toaster` listens to unless it is given another: `add`, `update`, `close` and `promise`.",
    },
    {
      name: "ToastAction",
      text: "The button `Toaster` renders from `actionProps`.",
      props: [["render", "ReactElement", `<Button variant="outline" size="sm" />`]],
    },
    {
      name: "ToastClose",
      text: "The close button at the end of every toast, labelled for screen readers.",
      props: [["render", "ReactElement", `<Button variant="ghost" size="icon-sm" />`]],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/toast", api: "https://base-ui.com/react/components/toast#api-reference" },
} satisfies Doc;
