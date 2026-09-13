import * as React from "react";
import { Button, Field, FieldGroup, FieldLabel, Input, NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-januna";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@ovadev-gmbh/ui-januna";

export default function SheetForm() {
  const [open, setOpen] = React.useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>Edit booking</SheetTrigger>
      <SheetContent>
        <form onSubmit={save} className="flex flex-1 flex-col">
          <SheetHeader>
            <SheetTitle>Edit booking</SheetTitle>
            <SheetDescription>Nora Keller gets an SMS with the new details.</SheetDescription>
          </SheetHeader>
          <FieldGroup className="px-8">
            <Field>
              <FieldLabel htmlFor="sheet-form-guest">Guest</FieldLabel>
              <Input id="sheet-form-guest" defaultValue="Nora Keller" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-form-time">Time</FieldLabel>
              <NativeSelect id="sheet-form-time" className="w-full" defaultValue="19:30">
                <NativeSelectOption value="19:00">19:00</NativeSelectOption>
                <NativeSelectOption value="19:30">19:30</NativeSelectOption>
                <NativeSelectOption value="20:00">20:00</NativeSelectOption>
              </NativeSelect>
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-form-party">Party size</FieldLabel>
              <Input id="sheet-form-party" type="number" min={1} max={12} defaultValue={4} />
            </Field>
          </FieldGroup>
          <SheetFooter>
            <Button type="submit">Save booking</Button>
            <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
