import * as React from "react";
import { Checkbox, Field, FieldGroup, FieldLabel } from "@ovadev-gmbh/ui-ticketova";

const regions = ["ch-zrh-1", "ch-gva-1", "eu-central-1"];

export default function CheckboxIndeterminate() {
  const [selected, setSelected] = React.useState<string[]>(["ch-zrh-1"]);
  const all = selected.length === regions.length;

  const toggle = (region: string, on: boolean) =>
    setSelected((prev) => (on ? [...prev, region] : prev.filter((r) => r !== region)));

  return (
    <FieldGroup data-slot="checkbox-group" className="w-64">
      <Field orientation="horizontal">
        <Checkbox
          id="checkbox-indeterminate-all"
          checked={all}
          indeterminate={selected.length > 0 && !all}
          onCheckedChange={(on) => setSelected(on ? [...regions] : [])}
        />
        <FieldLabel htmlFor="checkbox-indeterminate-all">Back up to all regions</FieldLabel>
      </Field>
      <FieldGroup data-slot="checkbox-group" className="pl-6">
        {regions.map((region) => (
          <Field key={region} orientation="horizontal">
            <Checkbox
              id={`checkbox-indeterminate-${region}`}
              checked={selected.includes(region)}
              onCheckedChange={(on) => toggle(region, on)}
            />
            <FieldLabel htmlFor={`checkbox-indeterminate-${region}`} className="text-label-13-mono">
              {region}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldGroup>
  );
}
