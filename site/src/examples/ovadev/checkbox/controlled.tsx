import * as React from "react";
import { Button, Checkbox, Field, FieldLabel } from "@ovadev-gmbh/ui-ovadev";

export default function CheckboxControlled() {
  const [confirmed, setConfirmed] = React.useState(false);

  return (
    <div className="flex w-96 flex-col items-start gap-4">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-controlled-export" checked={confirmed} onCheckedChange={setConfirmed} />
        <FieldLabel htmlFor="checkbox-controlled-export">I understand this removes me from every Ovadev mailing</FieldLabel>
      </Field>
      <Button variant="destructive" disabled={!confirmed}>
        Unsubscribe
      </Button>
    </div>
  );
}
