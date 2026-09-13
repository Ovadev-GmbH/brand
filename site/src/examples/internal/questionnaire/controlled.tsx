import * as React from "react";
import {
  Button,
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-internal";

const labels: Record<string, string> = { plan: "Plan", region: "Region", owner: "Owner" };

export default function QuestionnaireControlled() {
  const [item, setItem] = React.useState("plan");

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex h-7 items-center justify-between">
        <span className="text-label-13 text-content-secondary" role="status">
          Answering: {labels[item]}
        </span>
        {item !== "plan" ? (
          <Button variant="ghost" size="sm" onClick={() => setItem("plan")}>
            Change plan
          </Button>
        ) : null}
      </div>
      <Questionnaire item={item} onItemChange={setItem} onSubmit={(event) => event.preventDefault()}>
        <QuestionnaireItem name="plan" required>
          <QuestionnaireTitle>Which plan is the new tenant on?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="starter">Starter</QuestionnaireChoice>
            <QuestionnaireChoice value="team">Team</QuestionnaireChoice>
            <QuestionnaireChoice value="scale">Scale</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Choose a plan.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="region" required>
          <QuestionnaireTitle>Where does its data live?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="ch-zrh-1">
              <span className="text-label-13-mono">ch-zrh-1</span>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="ch-gva-1">
              <span className="text-label-13-mono">ch-gva-1</span>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="eu-central-1">
              <span className="text-label-13-mono">eu-central-1</span>
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Choose a region.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="owner" required>
          <QuestionnaireTitle>Who at Ovadev owns the account?</QuestionnaireTitle>
          <QuestionnaireInput type="email" aria-label="Account owner" placeholder="lena@ova.dev" />
          <QuestionnaireError>Enter the owner's e-mail address.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Create tenant</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
}
