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
} from "@ovadev-gmbh/ui-ovadev";

export default function QuestionnaireFreeform() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="reason" required>
        <QuestionnaireTitle>Why are you leaving the newsletter?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="frequency">Too many e-mails</QuestionnaireChoice>
          <QuestionnaireChoice value="relevance">Not relevant to my work</QuestionnaireChoice>
          <QuestionnaireChoice value="unknown">I never signed up</QuestionnaireChoice>
          <QuestionnaireInput aria-label="Another reason" placeholder="Another reason" />
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a reason or write one.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="email" required>
        <QuestionnaireTitle>Which address was subscribed?</QuestionnaireTitle>
        <QuestionnaireInput type="email" aria-label="Subscribed e-mail" placeholder="name@example.ch" autoComplete="off" />
        <QuestionnaireError>Enter the address so it is removed everywhere.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Unsubscribe</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
