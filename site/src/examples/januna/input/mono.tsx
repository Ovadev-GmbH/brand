import { Field, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputMono() {
  return (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="input-mono-voucher">Gift voucher</FieldLabel>
        <Input
          id="input-mono-voucher"
          className="text-label-14-mono md:text-label-14-mono"
          defaultValue="GV-2026-0418"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-mono-spend">Minimum spend in CHF</FieldLabel>
        <Input
          id="input-mono-spend"
          inputMode="decimal"
          className="text-right text-label-14-mono md:text-label-14-mono"
          defaultValue="1'240.00"
        />
      </Field>
    </FieldGroup>
  );
}
