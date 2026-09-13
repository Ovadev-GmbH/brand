import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-januna";

export default function QuestionnaireDemo() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="party" required>
        <QuestionnaireTitle>How many guests are joining?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="2">Two</QuestionnaireChoice>
          <QuestionnaireChoice value="4">Up to four</QuestionnaireChoice>
          <QuestionnaireChoice value="6">Up to six</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick a party size to continue.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="time" required>
        <QuestionnaireTitle>What time would you like to arrive?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="19:00">19:00</QuestionnaireChoice>
          <QuestionnaireChoice value="19:30">19:30</QuestionnaireChoice>
          <QuestionnaireChoice value="20:00">20:00</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick a time and we will hold the table.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Book table</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
