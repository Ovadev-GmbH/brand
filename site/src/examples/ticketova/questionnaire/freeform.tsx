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
} from "@ovadev-gmbh/ui-ticketova";

export default function QuestionnaireFreeform() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="reason" required>
        <QuestionnaireTitle>Why is acme-logistics cancelling?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="price">Too expensive for its usage</QuestionnaireChoice>
          <QuestionnaireChoice value="feature">Missing a feature</QuestionnaireChoice>
          <QuestionnaireChoice value="provider">Moving to another provider</QuestionnaireChoice>
          <QuestionnaireInput aria-label="Another reason" placeholder="Another reason" />
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a reason or write one.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="ticket" required>
        <QuestionnaireTitle>Which support ticket records the decision?</QuestionnaireTitle>
        <QuestionnaireInput aria-label="Support ticket" placeholder="SUP-4821" autoComplete="off" />
        <QuestionnaireError>Link the ticket so the decision can be traced.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Record cancellation</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
