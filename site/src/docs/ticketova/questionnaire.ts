import type { Doc } from "../../types";

export default {
  description:
    "A form asked one question at a time, with progress and Back and Next: an incident intake, a tenant's onboarding, an offboarding checklist. For a form that is read at a glance, lay out [Field](/ticketova/field)s instead.",
  usage: `<Questionnaire onSubmit={(event) => event.preventDefault()}>
  <QuestionnaireProgress />
  <QuestionnaireItem name="plan" required>
    <QuestionnaireTitle>Which plan is the tenant on?</QuestionnaireTitle>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="starter">Starter</QuestionnaireChoice>
      <QuestionnaireChoice value="team">Team</QuestionnaireChoice>
      <QuestionnaireChoice value="scale">Scale</QuestionnaireChoice>
    </QuestionnaireChoices>
    <QuestionnaireError>Choose a plan.</QuestionnaireError>
  </QuestionnaireItem>
  <QuestionnaireActions>
    <QuestionnairePrevious />
    <QuestionnaireNext />
    <QuestionnaireSubmit>Create tenant</QuestionnaireSubmit>
  </QuestionnaireActions>
</Questionnaire>`,
  composition: `Questionnaire
├── QuestionnaireProgress
├── QuestionnaireItem
│   ├── QuestionnaireTitle
│   ├── QuestionnaireDescription
│   ├── QuestionnaireChoices
│   │   ├── QuestionnaireChoice
│   │   │   └── QuestionnaireChoiceDescription
│   │   └── QuestionnaireInput
│   └── QuestionnaireError
└── QuestionnaireActions
    ├── QuestionnairePrevious
    ├── QuestionnaireSkip
    ├── QuestionnaireNext
    └── QuestionnaireSubmit`,
  sections: [
    {
      title: "Answers",
      text: "`Questionnaire` renders a `<form>`, and each `QuestionnaireItem` sends its answer under its `name`. Read them from `FormData` in `onSubmit`: `get` for one answer, `getAll` for a `multiple` item. A skipped item sends nothing.",
      code: `function submit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const answers = new FormData(event.currentTarget);
  answers.get("plan"); // "team"
  answers.getAll("modules"); // ["billing", "audit-log"]
}`,
    },
    {
      title: "Multiple Selection",
      text: "`multiple` on `QuestionnaireItem` turns its choices into checkboxes, so more than one can be picked.",
      example: "multiple",
    },
    {
      title: "Freeform Answer",
      text: "`QuestionnaireInput` takes a typed answer: on its own, or after the choices for an answer they do not cover. Name it with `aria-label`; a placeholder is not a label.",
      example: "freeform",
    },
    {
      title: "Skip",
      text: "An item without `required` is optional. `QuestionnaireSkip` shows only on such an item, and moves on with the answer left out.",
      example: "skip",
    },
    {
      title: "Shortcuts",
      text: '`shortcuts="letters"` or `"numbers"` on `Questionnaire` puts a key beside each choice. The key answers, and Enter moves on.',
      example: "shortcuts",
    },
    {
      title: "Custom Progress",
      text: "`QuestionnaireProgress` reads Question 1 of 3 by default. Its `render` function receives `current` and `total`, to draw steps instead.",
      example: "progress",
    },
    {
      title: "Conditional Items",
      text: "`disabled` on a `QuestionnaireItem` takes it out of the sequence and the count, so an earlier answer can decide whether a question is asked.",
      example: "conditional",
    },
    {
      title: "Dialog",
      text: "Inside `DialogContent`, the questionnaire sits under the dialog's own header. `onSubmit` closes the dialog; the × and Escape leave it without answering. See [Dialog](/ticketova/dialog).",
      example: "dialog",
    },
    {
      title: "Controlled",
      text: "`item` and `onItemChange` hand the active question to you, to show where the operator is or to send them back to an earlier one.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "QuestionnaireActions",
      text: "A row for the navigation: Previous at the start, Skip and then Next or Submit at the end. Each button shows only when it applies.",
    },
    {
      name: "QuestionnairePrevious",
      text: "Goes back one item; hidden on the first. Labelled Previous unless given children.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"outline"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    {
      name: "QuestionnaireSkip",
      text: "Moves past an item that is not `required`; hidden on every other. Labelled Skip unless given children.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"outline"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    {
      name: "QuestionnaireNext",
      text: "Checks the active item and moves on; hidden on the last. Labelled Next unless given children.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"default"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    {
      name: "QuestionnaireSubmit",
      text: "Submits the form; shown only on the last item. Labelled Submit unless given children.",
      props: [
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"default"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    { name: "QuestionnaireChoiceDescription", text: "A secondary line inside a `QuestionnaireChoice`." },
  ],
  links: {
    lib: "@shadcn/react",
    doc: "https://ui.shadcn.com/docs/react/questionnaire",
    api: "https://ui.shadcn.com/docs/react/questionnaire#api-reference",
  },
} satisfies Doc;
