import type { Doc } from "../../types";

export default {
  description:
    "A value someone will copy, with the button that copies it: a command, a booking reference, a voucher code. `SecretValue` beside it shows a key only when asked.",
  usage: `<Snippet text="bunx januna bookings export --shift tonight" />`,
  composition: `Snippet
├── lines
│   └── line
└── copy button

SecretValue
├── value
└── reveal button`,
  sections: [
    {
      title: "Status",
      text: '`variant` tints the snippet `"success"`, `"warning"` or `"error"` with the matching callout fill, for the output of a command. The words say what happened; the fill only repeats it.',
      example: "status",
    },
    {
      title: "Multiple Lines",
      text: "Pass `text` an array and each entry becomes a line with its own prompt. The copy button writes the lines joined by newlines.",
      example: "multiple-lines",
    },
    {
      title: "Without Prompt",
      text: "`prompt={false}` removes the `$` for a value that is not a command: a restaurant ID, a booking reference, a voucher code. The prompt is never part of what is copied either way.",
      example: "without-prompt",
    },
    {
      title: "Copy Text",
      text: "`copyText` sets what the button writes when it should differ from what is shown, such as steps shown one per line but copied as a single command.",
      example: "copy-text",
    },
    {
      title: "Empty",
      text: "With empty `text` the snippet shows `placeholder` in the tertiary ink and disables the copy button. Put the action that fills it beside it.",
      example: "empty",
    },
    {
      title: "Secret Value",
      text: '`SecretValue` masks `value` until the eye button is pressed. `label` names the value for screen readers ("Reveal API key"); `defaultRevealed` starts it shown.',
      example: "secret-value",
    },
    {
      title: "Controlled",
      text: "`onCopy` runs after the clipboard write succeeds, and `copied` takes over the check mark, here so it stays on the code copied last.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Snippet",
      text: "A `<div>` on `material-base` in `text-label-13-mono`, with the lines and a ghost copy button. Without `copied`, the check mark shows in the success colour for 1.2 seconds after a copy.",
      props: [
        ["text", "string | string[]", "–"],
        ["variant", `"default" | "success" | "warning" | "error"`, `"default"`],
        ["prompt", "boolean", "true"],
        ["copyText", "string", "–"],
        ["onCopy", "() => void", "–"],
        ["copied", "boolean", "–"],
        ["placeholder", "string", "–"],
      ],
    },
    {
      name: "SecretValue",
      text: "A 32px `<span>` on `bg-surface-secondary` with 8px corners, holding the masked value and the button that reveals it. It does not copy; put the revealed value in a `Snippet` when it must be copied.",
      props: [
        ["value", "string", "–"],
        ["label", "string", `"secret"`],
        ["defaultRevealed", "boolean", "false"],
      ],
    },
    {
      name: "snippetVariants",
      text: "The classes as a function of `{ variant, prompt, className }`, for an element that is not a `Snippet`.",
    },
  ],
} satisfies Doc;
