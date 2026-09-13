import * as React from "react";
import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-internal";

const limit = 160;

export default function TextareaControlled() {
  const [note, setNote] = React.useState("Your invoice INV-2026-0142 over CHF 1'240.00 is 14 days overdue.");
  const over = note.length > limit;

  return (
    <Field data-invalid={over} className="w-96">
      <FieldLabel htmlFor="textarea-controlled-note">Reminder text</FieldLabel>
      <Textarea
        id="textarea-controlled-note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        aria-invalid={over}
      />
      <FieldDescription className="text-right text-label-13-mono">
        {note.length} / {limit}
      </FieldDescription>
    </Field>
  );
}
