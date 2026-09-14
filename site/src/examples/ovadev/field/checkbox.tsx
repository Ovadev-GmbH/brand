import {
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@ovadev-gmbh/ui-ovadev";

const services = [
  { name: "shop.ticketova.ch", on: true },
  { name: "admission.ticketova.ch", on: true },
  { name: "api.januna.ch", on: false },
  { name: "ova.dev", on: false },
];

export default function FieldCheckbox() {
  return (
    <FieldSet className="w-80">
      <FieldLegend>Status notifications</FieldLegend>
      <FieldDescription>Sent to it@tuerlersee.ch when a service changes state.</FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        {services.map((service) => (
          <Field key={service.name} orientation="horizontal">
            <Checkbox id={`field-checkbox-${service.name}`} defaultChecked={service.on} />
            <FieldLabel htmlFor={`field-checkbox-${service.name}`} className="text-label-13-mono">
              {service.name}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
