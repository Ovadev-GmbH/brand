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
      <QuestionnaireItem name="plan" required>
        <QuestionnaireTitle>Which plan does helvetia-labs start on?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="starter">Starter</QuestionnaireChoice>
          <QuestionnaireChoice value="team">Team</QuestionnaireChoice>
          <QuestionnaireChoice value="scale">Scale</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a plan.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="purchase-order">
        <QuestionnaireTitle>Should invoices carry a purchase order number?</QuestionnaireTitle>
        <QuestionnaireDescription>Only if their accounts team asked for one.</QuestionnaireDescription>
        <QuestionnaireInput aria-label="Purchase order number" placeholder="PO-2026-118" autoComplete="off" />
      </QuestionnaireItem>
      <QuestionnaireItem name="billing-email" required>
        <QuestionnaireTitle>Where do invoices go?</QuestionnaireTitle>
        <QuestionnaireInput type="email" aria-label="Billing e-mail" placeholder="billing@helvetia-labs.ch" />
        <QuestionnaireError>Enter the billing e-mail address.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Create tenant</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
