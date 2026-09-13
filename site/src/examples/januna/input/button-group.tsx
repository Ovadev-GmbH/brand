import { Button, ButtonGroup, Field, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function InputWithButtonGroup() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="input-button-group-voucher">Gift voucher</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group-voucher" placeholder="GV-2026-0418" />
        <Button variant="outline">Redeem</Button>
      </ButtonGroup>
    </Field>
  );
}
