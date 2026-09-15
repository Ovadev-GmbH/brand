import * as React from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@ovadev-gmbh/ui-ticketova";

const plans = [
  { label: "Starter", value: "starter" },
  { label: "Team", value: "team" },
  { label: "Scale", value: "scale" },
  { label: "Enterprise", value: "enterprise" },
];

export default function SelectAlignItem() {
  const [aligned, setAligned] = React.useState(true);

  return (
    <FieldGroup className="w-72">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="select-align-switch">Align item with trigger</FieldLabel>
          <FieldDescription>Off opens the list below the trigger.</FieldDescription>
        </FieldContent>
        <Switch id="select-align-switch" checked={aligned} onCheckedChange={setAligned} />
      </Field>
      <Select items={plans} defaultValue="scale">
        <SelectTrigger className="w-full" aria-label="Plan">
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={aligned}>
          {plans.map((plan) => (
            <SelectItem key={plan.value} value={plan.value}>
              {plan.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldGroup>
  );
}
