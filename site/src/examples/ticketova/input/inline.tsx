import { Button, Field, Input } from "@ovadev-gmbh/ui-ticketova";

export default function InputInline() {
  return (
    <Field orientation="horizontal" className="w-96">
      <Input type="search" placeholder="Invoice number or tenant" aria-label="Search invoices" />
      <Button variant="outline">Search</Button>
    </Field>
  );
}
