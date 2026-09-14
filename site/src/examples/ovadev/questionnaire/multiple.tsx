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
} from "@ovadev-gmbh/ui-ovadev";

export default function QuestionnaireMultiple() {
  const [topics, setTopics] = React.useState<string[]>([]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTopics(new FormData(event.currentTarget).getAll("topics").map(String));
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire onSubmit={submit}>
        <QuestionnaireItem name="topics" multiple required>
          <QuestionnaireTitle>Which topics should the newsletter cover?</QuestionnaireTitle>
          <QuestionnaireDescription>Pick all that apply. The footer of every e-mail changes it later.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="ticketova">TICKETOVA</QuestionnaireChoice>
            <QuestionnaireChoice value="januna">JANUNA</QuestionnaireChoice>
            <QuestionnaireChoice value="blog">Blog posts</QuestionnaireChoice>
            <QuestionnaireChoice value="jobs">Jobs at Ovadev</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Pick at least one topic.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Save topics</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {topics.length ? (
        <p className="m-0 text-label-13 text-content-secondary">
          Saved: <span className="text-label-13-mono text-content-primary">{topics.join(", ")}</span>
        </p>
      ) : null}
    </div>
  );
}
