import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-januna";

export default function QuestionnaireFreeform() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="occasion" required>
        <QuestionnaireTitle>What is the occasion?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="birthday">Birthday</QuestionnaireChoice>
          <QuestionnaireChoice value="anniversary">Anniversary</QuestionnaireChoice>
          <QuestionnaireChoice value="business">Business dinner</QuestionnaireChoice>
          <QuestionnaireInput aria-label="Another occasion" placeholder="Another occasion" />
        </QuestionnaireChoices>
        <QuestionnaireError>Choose an occasion or write one.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="name" required>
        <QuestionnaireTitle>Whose name is the booking under?</QuestionnaireTitle>
        <QuestionnaireInput aria-label="Name for the booking" placeholder="Nora Keller" autoComplete="name" />
        <QuestionnaireError>The host needs a name to greet you at the door.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Book table</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
