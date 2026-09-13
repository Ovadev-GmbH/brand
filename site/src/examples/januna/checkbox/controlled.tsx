import * as React from "react";
import { Button, Checkbox, Field, FieldLabel } from "@ovadev-gmbh/ui-januna";

export default function CheckboxControlled() {
  const [called, setCalled] = React.useState(false);

  return (
    <div className="flex w-96 flex-col items-start gap-4">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-controlled-called" checked={called} onCheckedChange={setCalled} />
        <FieldLabel htmlFor="checkbox-controlled-called">I called Nora Keller about her booking at 19:30</FieldLabel>
      </Field>
      <Button variant="destructive" disabled={!called}>
        Cancel booking
      </Button>
    </div>
  );
}
