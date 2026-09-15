import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-ticketova";

export default function CardForm() {
  return (
    <Card className="w-full max-w-md">
      <form onSubmit={(e) => e.preventDefault()} className="contents">
        <CardHeader>
          <CardTitle>Billing contact</CardTitle>
          <CardDescription>Where invoices for acme-logistics are sent.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-form-name">Name</FieldLabel>
              <Input id="card-form-name" defaultValue="Accounts payable" />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-form-email">E-mail</FieldLabel>
              <Input id="card-form-email" type="email" defaultValue="billing@acme-logistics.ch" required />
              <FieldDescription>INV-2026-0143 and later go to this address.</FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Save contact</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
