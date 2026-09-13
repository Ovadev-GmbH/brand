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
import { HugeiconsIcon } from "@hugeicons/react";
import { UserAdd01Icon } from "@hugeicons/core-free-icons";

export default function QuestionnaireInDialog() {
  const [open, setOpen] = React.useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>
        <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={2} data-icon="inline-start" />
        Add to waitlist
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add to waitlist</DialogTitle>
          <DialogDescription>Dinner tonight. The wait for a table is about 25 minutes.</DialogDescription>
        </DialogHeader>
        <Questionnaire onSubmit={submit}>
          <QuestionnaireProgress />
          <QuestionnaireItem name="party" required>
            <QuestionnaireTitle>How many are waiting?</QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="2">2 guests</QuestionnaireChoice>
              <QuestionnaireChoice value="4">3 to 4 guests</QuestionnaireChoice>
              <QuestionnaireChoice value="6">5 to 6 guests</QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>Pick a party size.</QuestionnaireError>
          </QuestionnaireItem>
          <QuestionnaireItem name="name" required>
            <QuestionnaireTitle>Which name do we call?</QuestionnaireTitle>
            <QuestionnaireInput aria-label="Name to call" placeholder="Anna Meier" autoComplete="off" />
            <QuestionnaireError>Write the name the host calls when the table is ready.</QuestionnaireError>
          </QuestionnaireItem>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireNext />
            <QuestionnaireSubmit>Add to waitlist</QuestionnaireSubmit>
          </QuestionnaireActions>
        </Questionnaire>
      </DialogContent>
    </Dialog>
  );
}
