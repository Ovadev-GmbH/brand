import * as React from "react";
import {
  Field,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@ovadev-gmbh/ui-ovadev";

const limit = 280;

export default function InputGroupWithTextarea() {
  const [note, setNote] = React.useState("TICKETOVA now runs admission control at Strandbad Türlersee. Season opens 2026-05-09.");

  return (
    <Field className="w-96">
      <FieldLabel htmlFor="input-group-textarea-note">Summary for the post list</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="input-group-textarea-note"
          value={note}
          onChange={(e) => setNote(e.target.value.slice(0, limit))}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-label-12-mono">
            {note.length} / {limit}
          </InputGroupText>
          <InputGroupButton variant="default" className="ml-auto">
            Save summary
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
