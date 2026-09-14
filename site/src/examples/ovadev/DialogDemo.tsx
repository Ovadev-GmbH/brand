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
} from "@ovadev-gmbh/ui-ovadev";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Edit press contact</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit press contact</DialogTitle>
          <DialogDescription>
            Press requests from <span className="text-label-13-mono">ova.dev/contact</span> go to this person.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="dialog-contact-name">Name</FieldLabel>
            <Input id="dialog-contact-name" defaultValue="Philip" />
          </Field>
          <Field>
            <FieldLabel htmlFor="dialog-contact-email">E-mail</FieldLabel>
            <Input id="dialog-contact-email" type="email" defaultValue="press@ova.dev" />
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
