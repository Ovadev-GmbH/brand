import * as React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-januna";

export default function QuestionnaireMultiple() {
  const [notes, setNotes] = React.useState<string[]>([]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotes(new FormData(event.currentTarget).getAll("dietary").map(String));
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire onSubmit={submit}>
        <QuestionnaireItem name="dietary" multiple required>
          <QuestionnaireTitle>Anything the kitchen should know?</QuestionnaireTitle>
          <QuestionnaireDescription>Pick all that apply. The kitchen sees them on the booking.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="vegetarian">Vegetarian</QuestionnaireChoice>
            <QuestionnaireChoice value="vegan">Vegan</QuestionnaireChoice>
            <QuestionnaireChoice value="gluten">Gluten-free</QuestionnaireChoice>
            <QuestionnaireChoice value="nuts">Nut allergy</QuestionnaireChoice>
            <QuestionnaireChoice value="none">Nothing to note</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Pick at least one, or Nothing to note.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Save notes</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {notes.length ? (
        <p className="m-0 text-label-14 text-content-secondary">
          Saved: <span className="text-content-primary">{notes.join(", ")}</span>
        </p>
      ) : null}
    </div>
  );
}
