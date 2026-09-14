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
} from "@ovadev-gmbh/ui-ovadev";

export default function SheetForm() {
  const [open, setOpen] = React.useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>Edit customer</SheetTrigger>
      <SheetContent>
        <form onSubmit={save} className="flex flex-1 flex-col">
          <SheetHeader>
            <SheetTitle>Edit customer</SheetTitle>
            <SheetDescription>Changes apply to tuerlersee from the next season.</SheetDescription>
          </SheetHeader>
          <FieldGroup className="px-4">
            <Field>
              <FieldLabel htmlFor="sheet-form-name">Display name</FieldLabel>
              <Input id="sheet-form-name" defaultValue="Strandbad Türlersee" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-form-billing">Contact e-mail</FieldLabel>
              <Input id="sheet-form-billing" type="email" defaultValue="info@tuerlersee.ch" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-form-plan">Product</FieldLabel>
              <NativeSelect id="sheet-form-plan" className="w-full" defaultValue="ticketova">
                <NativeSelectOption value="ticketova">TICKETOVA</NativeSelectOption>
                <NativeSelectOption value="januna">JANUNA</NativeSelectOption>
                <NativeSelectOption value="both">TICKETOVA and JANUNA</NativeSelectOption>
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
