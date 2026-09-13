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
} from "@ovadev-gmbh/ui-januna";

export default function CardForm() {
  return (
    <Card className="w-full max-w-md">
      <form onSubmit={(event) => event.preventDefault()} className="contents">
        <CardHeader>
          <CardTitle>Deposit for large parties</CardTitle>
          <CardDescription>Asked for when a guest books online.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-form-party">From a party of</FieldLabel>
              <Input id="card-form-party" type="number" min={2} defaultValue={8} required />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-form-deposit">Deposit per guest, CHF</FieldLabel>
              <Input id="card-form-deposit" inputMode="decimal" defaultValue="20.00" required />
              <FieldDescription>A party of 8 pays CHF 160.00 when booking.</FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Save deposit</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
