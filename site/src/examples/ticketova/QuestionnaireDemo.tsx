import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-ticketova";

export default function QuestionnaireDemo() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="severity" required>
        <QuestionnaireTitle>How severe is the incident?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="p1">
            P1
            <QuestionnaireChoiceDescription>Tenants cannot log in or pay.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="p2">
            P2
            <QuestionnaireChoiceDescription>Degraded, with a workaround.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a severity.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="region" required>
        <QuestionnaireTitle>Which region is affected?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="ch-zrh-1">
            <span className="text-label-13-mono">ch-zrh-1</span>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="eu-central-1">
            <span className="text-label-13-mono">eu-central-1</span>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a region.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Open incident</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
