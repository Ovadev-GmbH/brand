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
} from "@ovadev-gmbh/ui-ovadev";

export default function QuestionnaireConditional() {
  const [method, setMethod] = React.useState("email");

  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="method" required>
        <QuestionnaireTitle>How should we reply?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="email" checked={method === "email"} onChange={() => setMethod("email")}>
            By e-mail, within a working day
          </QuestionnaireChoice>
          <QuestionnaireChoice value="call" checked={method === "call"} onChange={() => setMethod("call")}>
            Phone call from Philip
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose how we reply.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="phone" required disabled={method !== "call"}>
        <QuestionnaireTitle>Which number should Philip call?</QuestionnaireTitle>
        <QuestionnaireInput type="tel" aria-label="Phone number" placeholder="+41 41 000 00 00" autoComplete="off" />
        <QuestionnaireError>A call needs a number.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="summary" required>
        <QuestionnaireTitle>Where does the written summary go?</QuestionnaireTitle>
        <QuestionnaireInput type="email" aria-label="E-mail for the summary" placeholder="gemeinde@hausen.ch" />
        <QuestionnaireError>Enter an e-mail address for the summary.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Send request</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
