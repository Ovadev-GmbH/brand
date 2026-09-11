import * as React from "react";
import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@ovadev-gmbh/ui-januna";

export default function FieldDemo() {
  const [partySize, setPartySize] = React.useState("14");
  const tooLarge = Number(partySize) > 12;

  return (
    <form
      className="w-full max-w-xl"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <FieldGroup>
        <FieldSet>
          <FieldLegend>New booking</FieldLegend>
          <FieldDescription>Reserve a table for tonight's dinner shift.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="field-name">Guest name</FieldLabel>
              <Input id="field-name" placeholder="Ada Lovelace" autoComplete="off" />
              <FieldDescription>Shown on the floor plan and the door list.</FieldDescription>
            </Field>
            <Field data-invalid={tooLarge}>
              <FieldLabel htmlFor="field-party">Party size</FieldLabel>
              <Input
                id="field-party"
                type="number"
                min={1}
                aria-invalid={tooLarge}
                value={partySize}
                onChange={(event) => setPartySize(event.target.value)}
              />
              {tooLarge ? (
                <FieldError>Parties above 12 guests need a private-dining request.</FieldError>
              ) : (
                <FieldDescription>Up to 12 guests per table.</FieldDescription>
              )}
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Checkbox id="field-sms" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="field-sms">Text the guest</FieldLabel>
            <FieldDescription>A reminder goes out two hours before the booking.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Book table</Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
