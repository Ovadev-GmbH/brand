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
} from "@ovadev-gmbh/ui-januna";

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

      <QuestionnaireItem name="party" required>
        <QuestionnaireTitle>How many guests are joining?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Larger parties are seated on the terrace when the weather allows.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="2">Two</QuestionnaireChoice>
          <QuestionnaireChoice value="4">Up to four</QuestionnaireChoice>
          <QuestionnaireChoice value="8">
            Up to eight
            <QuestionnaireChoiceDescription>A deposit may apply.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick a party size to continue.</QuestionnaireError>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
        </QuestionnaireActions>
      </QuestionnaireItem>

      <QuestionnaireItem name="occasion" multiple>
        <QuestionnaireTitle>Anything we should know?</QuestionnaireTitle>
        <QuestionnaireDescription>Pick all that apply.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="birthday">Birthday</QuestionnaireChoice>
          <QuestionnaireChoice value="allergy">Allergies at the table</QuestionnaireChoice>
          <QuestionnaireChoice value="highchair">We need a high chair</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
        </QuestionnaireActions>
      </QuestionnaireItem>

      <QuestionnaireItem name="email" required>
        <QuestionnaireTitle>Where should the confirmation go?</QuestionnaireTitle>
        <QuestionnaireInput type="email" placeholder="guest@example.com" />
        <QuestionnaireError>We need an email address to confirm the booking.</QuestionnaireError>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSubmit>Book table</QuestionnaireSubmit>
        </QuestionnaireActions>
      </QuestionnaireItem>
    </Questionnaire>
  );
}
