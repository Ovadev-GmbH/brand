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
} from "@ovadev-gmbh/ui-januna";

const shifts = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Late night", value: "late" },
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
      <Select items={shifts} defaultValue="dinner">
        <SelectTrigger className="w-full" aria-label="Shift">
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={aligned}>
          {shifts.map((shift) => (
            <SelectItem key={shift.value} value={shift.value}>
              {shift.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldGroup>
  );
}
