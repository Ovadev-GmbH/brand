import * as React from "react";
import { Checkbox, Field, FieldGroup, FieldLabel } from "@ovadev-gmbh/ui-januna";

const tables = ["Terrace 1", "Terrace 2", "Terrace 3"];

export default function CheckboxIndeterminate() {
  const [closed, setClosed] = React.useState<string[]>(["Terrace 3"]);
  const all = closed.length === tables.length;

  const toggle = (table: string, on: boolean) =>
    setClosed((prev) => (on ? [...prev, table] : prev.filter((t) => t !== table)));

  return (
    <FieldGroup data-slot="checkbox-group" className="w-72">
      <Field orientation="horizontal">
        <Checkbox
          id="checkbox-indeterminate-all"
          checked={all}
          indeterminate={closed.length > 0 && !all}
          onCheckedChange={(on) => setClosed(on ? [...tables] : [])}
        />
        <FieldLabel htmlFor="checkbox-indeterminate-all">Close the terrace tonight</FieldLabel>
      </Field>
      <FieldGroup data-slot="checkbox-group" className="pl-8">
        {tables.map((table) => {
          const id = `checkbox-indeterminate-${table.toLowerCase().replace(" ", "-")}`;
          return (
            <Field key={table} orientation="horizontal">
              <Checkbox id={id} checked={closed.includes(table)} onCheckedChange={(on) => toggle(table, on)} />
              <FieldLabel htmlFor={id}>{table}</FieldLabel>
            </Field>
          );
        })}
      </FieldGroup>
    </FieldGroup>
  );
}
