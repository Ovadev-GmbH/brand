import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-internal";

export default function QuestionnaireDemo() {
  return (
    <Questionnaire
      className="w-full max-w-xl"
      shortcuts="letters"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="severity" required>
        <QuestionnaireTitle>How severe is the incident?</QuestionnaireTitle>
        <QuestionnaireDescription>
          P1 pages the on-call engineer immediately.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="p1">
            P1
            <QuestionnaireChoiceDescription>Tenants cannot log in or pay.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="p2">
            P2
            <QuestionnaireChoiceDescription>Degraded, with a workaround.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="p3">P3</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick a severity to continue.</QuestionnaireError>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
        </QuestionnaireActions>
      </QuestionnaireItem>

      <QuestionnaireItem name="affected" multiple>
        <QuestionnaireTitle>Which systems are affected?</QuestionnaireTitle>
        <QuestionnaireDescription>Pick all that apply.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="api">Public API</QuestionnaireChoice>
          <QuestionnaireChoice value="billing">Billing and invoices</QuestionnaireChoice>
          <QuestionnaireChoice value="deploys">Deployments</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
        </QuestionnaireActions>
      </QuestionnaireItem>

      <QuestionnaireItem name="tenant" required>
        <QuestionnaireTitle>Which tenant reported it?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="acme-gmbh" autoComplete="off" />
        <QuestionnaireError>Name the tenant so support can follow up.</QuestionnaireError>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSubmit>Open incident</QuestionnaireSubmit>
        </QuestionnaireActions>
      </QuestionnaireItem>
    </Questionnaire>
  );
}
