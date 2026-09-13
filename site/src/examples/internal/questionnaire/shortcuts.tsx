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
} from "@ovadev-gmbh/ui-internal";

export default function QuestionnaireShortcuts() {
  return (
    <Questionnaire className="w-full max-w-md" shortcuts="numbers" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireItem name="environment" required>
        <QuestionnaireTitle>Where should dpl_8a4f go?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="production">
            Production
            <QuestionnaireChoiceDescription>acme.ova.dev, 3 replicas in ch-zrh-1</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="staging">
            Staging
            <QuestionnaireChoiceDescription>acme.staging.ova.dev</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="preview">
            Preview
            <QuestionnaireChoiceDescription>A new URL on preview.ova.dev</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose an environment.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit>Deploy</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
