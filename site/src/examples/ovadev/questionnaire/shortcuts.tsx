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
} from "@ovadev-gmbh/ui-ovadev";

export default function QuestionnaireShortcuts() {
  return (
    <Questionnaire className="w-full max-w-md" shortcuts="numbers" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireItem name="product" required>
        <QuestionnaireTitle>What is the question about?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="ticketova">
            TICKETOVA
            <QuestionnaireChoiceDescription>Ticketing for pools and venues</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="januna">
            JANUNA
            <QuestionnaireChoiceDescription>Restaurant operations, coming soon</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="ovadev">
            Ovadev
            <QuestionnaireChoiceDescription>The company, jobs, press</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a topic.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
