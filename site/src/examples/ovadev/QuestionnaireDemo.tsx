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
} from "@ovadev-gmbh/ui-ovadev";

export default function QuestionnaireDemo() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="reason" required>
        <QuestionnaireTitle>What is the message about?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="quote">
            Quote
            <QuestionnaireChoiceDescription>For a pool, a venue or a restaurant.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="support">
            Support
            <QuestionnaireChoiceDescription>For a running installation.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a reason.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="product" required>
        <QuestionnaireTitle>Which product is it about?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="ticketova.ch">
            <span className="text-label-13-mono">ticketova.ch</span>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="januna.ch">
            <span className="text-label-13-mono">januna.ch</span>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a product.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Send message</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
