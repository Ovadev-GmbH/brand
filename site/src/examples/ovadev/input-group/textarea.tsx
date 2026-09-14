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
  const [note, setNote] = React.useState("Paid by bank transfer on 2026-09-11, reference 7741-0142.");

  return (
    <Field className="w-96">
      <FieldLabel htmlFor="input-group-textarea-note">Note on INV-2026-0142</FieldLabel>
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
            Save note
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
