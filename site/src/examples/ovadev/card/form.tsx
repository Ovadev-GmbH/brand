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
} from "@ovadev-gmbh/ui-ovadev";

export default function CardForm() {
  return (
    <Card className="w-full max-w-md">
      <form onSubmit={(e) => e.preventDefault()} className="contents">
        <CardHeader>
          <CardTitle>Newsletter</CardTitle>
          <CardDescription>One e-mail when a post goes up, nothing else.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-form-name">Name</FieldLabel>
              <Input id="card-form-name" defaultValue="Anna Keller" />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-form-email">E-mail</FieldLabel>
              <Input id="card-form-email" type="email" defaultValue="anna.keller@hausen.ch" required />
              <FieldDescription>Every e-mail carries a link that unsubscribes you.</FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Subscribe</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
