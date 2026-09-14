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
  const [modules, setModules] = React.useState<string[]>([]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setModules(new FormData(event.currentTarget).getAll("modules").map(String));
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire onSubmit={submit}>
        <QuestionnaireItem name="modules" multiple required>
          <QuestionnaireTitle>Which modules should bergwerk-ag get?</QuestionnaireTitle>
          <QuestionnaireDescription>Pick all that apply. Each one is added to the next invoice.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="billing">Billing</QuestionnaireChoice>
            <QuestionnaireChoice value="deployments">Deployments</QuestionnaireChoice>
            <QuestionnaireChoice value="audit-log">Audit log</QuestionnaireChoice>
            <QuestionnaireChoice value="sso">Single sign-on</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Pick at least one module.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Save modules</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {modules.length ? (
        <p className="m-0 text-label-13 text-content-secondary">
          Saved: <span className="text-label-13-mono text-content-primary">{modules.join(", ")}</span>
        </p>
      ) : null}
    </div>
  );
}
