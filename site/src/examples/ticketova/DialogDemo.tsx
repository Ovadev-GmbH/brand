import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-ticketova";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Edit billing contact</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit billing contact</DialogTitle>
          <DialogDescription>
            Invoices for <span className="text-label-13-mono">acme-logistics</span> go to this person.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="dialog-contact-name">Name</FieldLabel>
            <Input id="dialog-contact-name" defaultValue="Mara Keller" />
          </Field>
          <Field>
            <FieldLabel htmlFor="dialog-contact-email">E-mail</FieldLabel>
            <Input id="dialog-contact-email" type="email" defaultValue="billing@acme-logistics.ch" />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Save contact</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
