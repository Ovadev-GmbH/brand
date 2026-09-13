import * as React from "react";
import {
  Field,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@ovadev-gmbh/ui-januna";

const limit = 160;

export default function InputGroupWithTextarea() {
  const [message, setMessage] = React.useState("Your table for 6 at 19:30 is ready. Please come to the host at the entrance.");

  return (
    <Field className="w-96">
      <FieldLabel htmlFor="input-group-textarea-message">Text message to the party of 6</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="input-group-textarea-message"
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, limit))}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-label-12-mono">
            {message.length} / {limit}
          </InputGroupText>
          <InputGroupButton variant="default" className="ml-auto">
            Send text
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
