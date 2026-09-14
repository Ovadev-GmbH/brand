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
} from "@ovadev-gmbh/ui-ovadev";

export default function QuestionnaireInDialog() {
  const [open, setOpen] = React.useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>Request a demo</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a demo</DialogTitle>
          <DialogDescription>At your venue or over a call. Philip confirms within a working day.</DialogDescription>
        </DialogHeader>
        <Questionnaire onSubmit={submit}>
          <QuestionnaireProgress />
          <QuestionnaireItem name="product" required>
            <QuestionnaireTitle>Which product should the demo show?</QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="ticketova.ch">
                <span className="text-label-13-mono">ticketova.ch</span>
                <QuestionnaireChoiceDescription>Shop, admission control, real-time reporting</QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="januna.ch">
                <span className="text-label-13-mono">januna.ch</span>
                <QuestionnaireChoiceDescription>Till, kitchen displays, orders; early access</QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>Choose a product.</QuestionnaireError>
          </QuestionnaireItem>
          <QuestionnaireItem name="focus" required>
            <QuestionnaireTitle>What should the demo cover?</QuestionnaireTitle>
            <QuestionnaireInput aria-label="Focus" placeholder="Season passes and admission at two entrances" autoComplete="off" />
            <QuestionnaireError>Write one line so the demo fits.</QuestionnaireError>
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
