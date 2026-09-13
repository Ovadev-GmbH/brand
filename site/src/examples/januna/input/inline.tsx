import { Button, Field, Input } from "@ovadev-gmbh/ui-januna";

export default function InputInline() {
  return (
    <Field orientation="horizontal" className="w-96">
      <Input type="search" aria-label="Find a booking" placeholder="Guest name or table" />
      <Button variant="outline">Find</Button>
    </Field>
  );
}
