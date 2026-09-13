import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
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
} from "@ovadev-gmbh/ui-januna";

export default function QuestionnaireSkipExample() {
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
      <QuestionnaireItem name="note">
        <QuestionnaireTitle>Anything we should know?</QuestionnaireTitle>
        <QuestionnaireDescription>A high chair, an allergy, a surprise. Skip it if not.</QuestionnaireDescription>
        <QuestionnaireInput aria-label="Note for the restaurant" placeholder="A high chair, please" autoComplete="off" />
      </QuestionnaireItem>
      <QuestionnaireItem name="phone" required>
        <QuestionnaireTitle>Which number can we text?</QuestionnaireTitle>
        <QuestionnaireInput type="tel" aria-label="Phone number" placeholder="+41 79 412 88 10" autoComplete="tel" />
        <QuestionnaireError>We text the confirmation and a reminder the day before.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Book table</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
