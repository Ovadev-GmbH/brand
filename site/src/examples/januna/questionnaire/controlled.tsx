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
} from "@ovadev-gmbh/ui-januna";

const labels: Record<string, string> = { party: "Party size", time: "Time", name: "Name" };

export default function QuestionnaireControlled() {
  const [item, setItem] = React.useState("party");

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex h-8 items-center justify-between">
        <span className="text-label-14 text-content-secondary" role="status">
          Answering: {labels[item]}
        </span>
        {item !== "party" ? (
          <Button variant="ghost" size="sm" onClick={() => setItem("party")}>
            Change party size
          </Button>
        ) : null}
      </div>
      <Questionnaire item={item} onItemChange={setItem} onSubmit={(event) => event.preventDefault()}>
        <QuestionnaireItem name="party" required>
          <QuestionnaireTitle>How many guests are joining?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="2">Two</QuestionnaireChoice>
            <QuestionnaireChoice value="4">Up to four</QuestionnaireChoice>
            <QuestionnaireChoice value="6">Up to six</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Pick a party size to continue.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="time" required>
          <QuestionnaireTitle>What time tonight?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="19:00">19:00</QuestionnaireChoice>
            <QuestionnaireChoice value="19:30">19:30</QuestionnaireChoice>
            <QuestionnaireChoice value="21:15">21:15</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Pick a time to continue.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="name" required>
          <QuestionnaireTitle>Whose name is the booking under?</QuestionnaireTitle>
          <QuestionnaireInput aria-label="Name for the booking" placeholder="Nora Keller" autoComplete="name" />
          <QuestionnaireError>The host needs a name to greet you at the door.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Book table</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
}
