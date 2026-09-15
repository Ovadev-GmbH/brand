import * as React from "react";
import { Button, Checkbox, Field, FieldLabel } from "@ovadev-gmbh/ui-ticketova";

export default function CheckboxControlled() {
  const [exported, setExported] = React.useState(false);

  return (
    <div className="flex w-96 flex-col items-start gap-4">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-controlled-export" checked={exported} onCheckedChange={setExported} />
        <FieldLabel htmlFor="checkbox-controlled-export">I have exported the audit log of bergwerk-ag</FieldLabel>
      </Field>
      <Button variant="destructive" disabled={!exported}>
        Delete tenant
      </Button>
    </div>
  );
}
