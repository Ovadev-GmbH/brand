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
} from "@ovadev-gmbh/ui-ovadev";

export default function QuestionnaireSkipExample() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="product" required>
        <QuestionnaireTitle>Which product is the quote for?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="ticketova">TICKETOVA</QuestionnaireChoice>
          <QuestionnaireChoice value="januna">JANUNA</QuestionnaireChoice>
          <QuestionnaireChoice value="both">Both</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a product.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="reference">
        <QuestionnaireTitle>Should the quote carry a reference number?</QuestionnaireTitle>
        <QuestionnaireDescription>Only if your purchasing office issued one.</QuestionnaireDescription>
        <QuestionnaireInput aria-label="Reference number" placeholder="PO-2026-118" autoComplete="off" />
      </QuestionnaireItem>
      <QuestionnaireItem name="email" required>
        <QuestionnaireTitle>Where does the quote go?</QuestionnaireTitle>
        <QuestionnaireInput type="email" aria-label="E-mail for the quote" placeholder="gemeinde@hausen.ch" />
        <QuestionnaireError>Enter the e-mail address for the quote.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Request quote</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
