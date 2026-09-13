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
} from "@ovadev-gmbh/ui-januna";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Edit booking</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit booking</DialogTitle>
          <DialogDescription>Nora Keller, tonight on T12. She gets a text with the new details.</DialogDescription>
        </DialogHeader>
        <FieldGroup className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="dialog-party">Guests</FieldLabel>
            <Input id="dialog-party" type="number" min={1} defaultValue="6" />
          </Field>
          <Field>
            <FieldLabel htmlFor="dialog-time">Time</FieldLabel>
            <Input id="dialog-time" type="time" defaultValue="19:30" />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Save changes</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
