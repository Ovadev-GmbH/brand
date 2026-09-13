import type { Doc } from "../../types";

export default {
  description:
    "A state as one coloured dot: pending, active, ready, error. It always stands beside the state's word, which `label` writes for it. For how much of a limit is used, use [Gauge](/internal/gauge).",
  usage: `<StatusDot state="ready" label />`,
  sections: [
    {
      title: "States",
      text: "`state` picks one of six. Yellow is pending, blue and pulsing is active, green is ready, red is error, and the two greys are canceled and archived. The pulse stops when reduced motion is asked for.",
      example: "states",
    },
    {
      title: "Size",
      text: '`size="sm"` draws a 6px dot for dense rows and lists; the default is 8px.',
      example: "size",
    },
    {
      title: "Label",
      text: "`label` writes the state's word after the dot. The title, shown on hover, reads \"This item is ready\" until `titlePrefix` names the subject.",
      example: "label",
    },
    {
      title: "Own Words",
      text: "When a record has words of its own, such as live and failed for a deployment, map them onto `state`, leave out `label` and write the word beside the dot. Without a label the dot is an image named by its title, so set `titlePrefix`.",
      example: "own-words",
    },
    {
      title: "In a Table",
      text: "In a status column the labelled dot is the whole cell, and the column scans by colour and reads by word.",
      example: "table",
    },
  ],
  api: [
    {
      name: "StatusDot",
      text: "A `<span>` holding the dot and, with `label`, its word. Takes every span prop but `children`.",
      props: [
        ["state", `"pending" | "active" | "ready" | "error" | "canceled" | "archived"`, "–"],
        ["size", `"default" | "sm"`, `"default"`],
        ["label", "boolean", "false"],
        ["titlePrefix", "string", `"This item"`],
      ],
    },
    {
      name: "statusDotVariants",
      text: "The dot's classes as a function of `{ state, size }`, for a dot drawn inside another component.",
    },
  ],
} satisfies Doc;
