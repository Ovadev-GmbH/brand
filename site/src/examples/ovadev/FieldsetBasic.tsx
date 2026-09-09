import { Field, Fieldset } from "@ovadev-gmbh/ui-ovadev";

export default function FieldsetBasic() {
  return (
    <Fieldset.Root>
      <Fieldset.Legend>Billing details</Fieldset.Legend>

      <Field.Root>
        <Field.Label>Company</Field.Label>
        <Field.Control placeholder="Enter company name" />
      </Field.Root>

      <Field.Root>
        <Field.Label>Tax ID</Field.Label>
        <Field.Control placeholder="Enter fiscal number" />
      </Field.Root>
    </Fieldset.Root>
  );
}
