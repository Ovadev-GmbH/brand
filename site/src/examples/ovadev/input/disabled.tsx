import { Field, FieldDescription, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputDisabled() {
  return (
    <Field data-disabled className="w-72">
      <FieldLabel htmlFor="input-disabled-id">Tenant ID</FieldLabel>
      <Input id="input-disabled-id" className="text-label-13-mono" defaultValue="tnt_8f2k1q" disabled />
      <FieldDescription>Assigned when the tenant is created; it never changes.</FieldDescription>
    </Field>
  );
}
