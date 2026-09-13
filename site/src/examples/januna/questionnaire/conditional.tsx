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
} from "@ovadev-gmbh/ui-januna";

export default function QuestionnaireConditional() {
  const [party, setParty] = React.useState("small");

  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="party" required>
        <QuestionnaireTitle>How many guests are joining?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="small" checked={party === "small"} onChange={() => setParty("small")}>
            2 to 7 guests
          </QuestionnaireChoice>
          <QuestionnaireChoice value="large" checked={party === "large"} onChange={() => setParty("large")}>
            8 guests or more
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick a party size to continue.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="deposit" required disabled={party !== "large"}>
        <QuestionnaireTitle>Parties of 8 or more pay CHF 50.00 per guest to hold the table.</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="agreed">I agree to the deposit</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>The table is only held with a deposit.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="email" required>
        <QuestionnaireTitle>Where should the confirmation go?</QuestionnaireTitle>
        <QuestionnaireInput type="email" aria-label="E-mail" placeholder="nora.keller@example.ch" autoComplete="email" />
        <QuestionnaireError>We need an e-mail address to confirm the booking.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Book table</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
