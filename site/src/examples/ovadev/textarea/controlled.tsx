import * as React from "react";
import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-ovadev";

const limit = 160;

export default function TextareaControlled() {
  const [note, setNote] = React.useState("TICKETOVA now runs admission control at Strandbad Türlersee. Season opens 2026-05-09.");
  const over = note.length > limit;

  return (
    <Field data-invalid={over} className="w-96">
      <FieldLabel htmlFor="textarea-controlled-note">Post summary</FieldLabel>
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
