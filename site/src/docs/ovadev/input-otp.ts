import type { Doc } from "../../types";

export default {
  description:
    "A short code typed one character per box: a sign-in code, a confirmation before the site is reset. One real input sits underneath, so a pasted code or the one the phone suggests fills every box at once.",
  usage: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
  composition: `InputOTP
├── InputOTPGroup
│   └── InputOTPSlot
├── InputOTPSeparator
└── InputOTPGroup
    └── InputOTPSlot`,
  sections: [
    {
      title: "Pattern",
      text: "`pattern` is a regular expression the code must match; a key or a paste that breaks it is refused. Without one, any character goes in. The keyboard on a phone is numeric unless `inputMode` says otherwise.",
      example: "pattern",
    },
    {
      title: "Separator",
      text: "`InputOTPSeparator` between two `InputOTPGroup`s splits a code into the halves people read it in.",
      example: "separator",
    },
    {
      title: "Four Digits",
      text: "`maxLength` is the length of the code. Render one `InputOTPSlot` per character, with `index` counting from 0.",
      example: "four-digits",
    },
    {
      title: "Alphanumeric",
      text: 'For a recovery code with letters, allow them in `pattern`, set `inputMode="text"`, and upper-case the value in `onChange`. Mono slots keep `0` and `O` apart.',
      example: "alphanumeric",
    },
    { title: "Disabled", text: "`disabled` on `InputOTP` dims every slot and takes no input.", example: "disabled" },
    {
      title: "Invalid",
      text: "`aria-invalid` on each `InputOTPSlot` turns its edge red and rings the group; a `FieldError` says what is wrong.",
      example: "invalid",
    },
    {
      title: "Field",
      text: "`id` on `InputOTP` lands on the input underneath, so a `FieldLabel` can point at it.",
      example: "field",
    },
    {
      title: "Controlled",
      text: "`value` and `onChange` hold the code as a string. `onComplete` fires once the last slot is filled, which is the moment to check it.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "InputOTP",
      text: "input-otp's `OTPInput`. `maxLength` is required; `containerClassName` styles the row of slots, `className` the input underneath.",
      props: [["spellCheck", "boolean", "false"]],
    },
    { name: "InputOTPGroup", text: "Slots that share their edges, ringed red when one of them is invalid." },
    {
      name: "InputOTPSlot",
      text: "One box: the character at `index`, and the caret while it is the next one to type. `index` is required.",
      props: [["index", "number", "–"]],
    },
    { name: "InputOTPSeparator", text: 'A `role="separator"` with a minus sign, between two groups.' },
  ],
  links: {
    lib: "input-otp",
    doc: "https://input-otp.rodz.dev",
    api: "https://github.com/guilhermerodz/input-otp#api-at-a-glance",
  },
} satisfies Doc;
