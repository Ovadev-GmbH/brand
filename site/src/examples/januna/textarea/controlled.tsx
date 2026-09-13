import * as React from "react";
import { Field, FieldDescription, FieldLabel, Textarea } from "@ovadev-gmbh/ui-januna";

const limit = 160;

export default function TextareaControlled() {
  const [message, setMessage] = React.useState(
    "Your table for 6 at 19:30 is ready. Please come to the host at the entrance.",
  );
  const over = message.length > limit;

  return (
    <Field data-invalid={over} className="w-96">
      <FieldLabel htmlFor="textarea-controlled-message">Text message to the guest</FieldLabel>
      <Textarea
        id="textarea-controlled-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-invalid={over}
      />
      <FieldDescription className="text-right text-label-13-mono">
        {message.length} / {limit}
      </FieldDescription>
    </Field>
  );
}
