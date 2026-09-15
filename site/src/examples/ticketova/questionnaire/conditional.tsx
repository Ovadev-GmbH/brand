import * as React from "react";
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
} from "@ovadev-gmbh/ui-ticketova";

export default function QuestionnaireConditional() {
  const [method, setMethod] = React.useState("card");

  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="method" required>
        <QuestionnaireTitle>How does helvetia-labs pay?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="card" checked={method === "card"} onChange={() => setMethod("card")}>
            Credit card, charged monthly
          </QuestionnaireChoice>
          <QuestionnaireChoice value="invoice" checked={method === "invoice"} onChange={() => setMethod("invoice")}>
            Invoice, 30 days net
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a payment method.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="purchase-order" required disabled={method !== "invoice"}>
        <QuestionnaireTitle>Which purchase order goes on the invoices?</QuestionnaireTitle>
        <QuestionnaireInput aria-label="Purchase order number" placeholder="PO-2026-118" autoComplete="off" />
        <QuestionnaireError>Invoices to helvetia-labs need a purchase order number.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="reminders" required>
        <QuestionnaireTitle>Who receives payment reminders?</QuestionnaireTitle>
        <QuestionnaireInput type="email" aria-label="Reminder e-mail" placeholder="billing@helvetia-labs.ch" />
        <QuestionnaireError>Enter an e-mail address for reminders.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Save billing</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
