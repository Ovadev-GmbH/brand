import * as React from "react";
import { Checkbox, Field, FieldGroup, FieldLabel } from "@ovadev-gmbh/ui-ovadev";

const services = ["shop.ticketova.ch", "admission.ticketova.ch", "api.januna.ch"];

export default function CheckboxIndeterminate() {
  const [selected, setSelected] = React.useState<string[]>(["shop.ticketova.ch"]);
  const all = selected.length === services.length;

  const toggle = (service: string, on: boolean) =>
    setSelected((prev) => (on ? [...prev, service] : prev.filter((s) => s !== service)));

  return (
    <FieldGroup data-slot="checkbox-group" className="w-64">
      <Field orientation="horizontal">
        <Checkbox
          id="checkbox-indeterminate-all"
          checked={all}
          indeterminate={selected.length > 0 && !all}
          onCheckedChange={(on) => setSelected(on ? [...services] : [])}
        />
        <FieldLabel htmlFor="checkbox-indeterminate-all">Status updates for all services</FieldLabel>
      </Field>
      <FieldGroup data-slot="checkbox-group" className="pl-6">
        {services.map((service) => (
          <Field key={service} orientation="horizontal">
            <Checkbox
              id={`checkbox-indeterminate-${service}`}
              checked={selected.includes(service)}
              onCheckedChange={(on) => toggle(service, on)}
            />
            <FieldLabel htmlFor={`checkbox-indeterminate-${service}`} className="text-label-13-mono">
              {service}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldGroup>
  );
}
