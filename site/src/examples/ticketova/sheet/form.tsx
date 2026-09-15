import * as React from "react";
import {
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  NativeSelect,
  NativeSelectOption,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ovadev-gmbh/ui-ticketova";

export default function SheetForm() {
  const [open, setOpen] = React.useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>Edit tenant</SheetTrigger>
      <SheetContent>
        <form onSubmit={save} className="flex flex-1 flex-col">
          <SheetHeader>
            <SheetTitle>Edit tenant</SheetTitle>
            <SheetDescription>Changes apply to helvetia-labs from the next invoice.</SheetDescription>
          </SheetHeader>
          <FieldGroup className="px-4">
            <Field>
              <FieldLabel htmlFor="sheet-form-name">Display name</FieldLabel>
              <Input id="sheet-form-name" defaultValue="Helvetia Labs AG" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-form-billing">Billing e-mail</FieldLabel>
              <Input id="sheet-form-billing" type="email" defaultValue="billing@helvetia-labs.ch" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-form-plan">Plan</FieldLabel>
              <NativeSelect id="sheet-form-plan" className="w-full" defaultValue="starter">
                <NativeSelectOption value="starter">Starter</NativeSelectOption>
                <NativeSelectOption value="team">Team</NativeSelectOption>
                <NativeSelectOption value="scale">Scale</NativeSelectOption>
              </NativeSelect>
            </Field>
          </FieldGroup>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
