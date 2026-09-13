import * as React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-internal";

export default function QuestionnaireInDialog() {
  const [open, setOpen] = React.useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>Request rollback</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request rollback</DialogTitle>
          <DialogDescription>Production for acme-logistics. On-call approves the request.</DialogDescription>
        </DialogHeader>
        <Questionnaire onSubmit={submit}>
          <QuestionnaireProgress />
          <QuestionnaireItem name="target" required>
            <QuestionnaireTitle>Which deployment should production return to?</QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="dpl_7c21">
                <span className="text-label-13-mono">dpl_7c21</span>
                <QuestionnaireChoiceDescription>2026-09-11 14:02, robin@ova.dev</QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="dpl_66b0">
                <span className="text-label-13-mono">dpl_66b0</span>
                <QuestionnaireChoiceDescription>2026-09-08 16:45, philip@ova.dev</QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>Choose a deployment.</QuestionnaireError>
          </QuestionnaireItem>
          <QuestionnaireItem name="reason" required>
            <QuestionnaireTitle>Why roll back?</QuestionnaireTitle>
            <QuestionnaireInput aria-label="Reason" placeholder="Checkout returns 502 since dpl_8a4f" autoComplete="off" />
            <QuestionnaireError>Write a reason for the audit log.</QuestionnaireError>
          </QuestionnaireItem>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireNext />
            <QuestionnaireSubmit>Send request</QuestionnaireSubmit>
          </QuestionnaireActions>
        </Questionnaire>
      </DialogContent>
    </Dialog>
  );
}
