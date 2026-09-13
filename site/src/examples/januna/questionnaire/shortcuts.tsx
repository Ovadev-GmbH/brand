import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-januna";

export default function QuestionnaireShortcuts() {
  return (
    <Questionnaire className="w-full max-w-md" shortcuts="numbers" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireItem name="area" required>
        <QuestionnaireTitle>Where would you like to sit?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="inside">
            Inside
            <QuestionnaireChoiceDescription>Beside the open kitchen</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="terrace">
            Terrace
            <QuestionnaireChoiceDescription>Heated, open until 22:00</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="bar">
            Bar
            <QuestionnaireChoiceDescription>For parties of 2</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose where to sit.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
