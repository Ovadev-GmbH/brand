import * as React from "react";
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ovadev-gmbh/ui-januna";

const fields = [
  { term: "Guest", value: "Lina Brunner" },
  { term: "Party", value: "6 guests" },
  { term: "Time", value: "Tonight, 20:15" },
  { term: "Deposit", value: "CHF 240.00", mono: true },
];

export default function SheetNoCloseButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>Cancel booking</SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Cancel this booking?</SheetTitle>
          <SheetDescription>The deposit goes back to the guest&apos;s card and Table 9 opens for online booking.</SheetDescription>
        </SheetHeader>
        <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-4 px-8">
          {fields.map((field) => (
            <div key={field.term} className="flex min-w-0 flex-col gap-1">
              <dt className="text-label-13 text-content-secondary">{field.term}</dt>
              <dd className={`m-0 text-content-primary ${field.mono ? "text-label-13-mono" : "text-label-14"}`}>
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
        <SheetFooter>
          <Button variant="destructive" onClick={() => setOpen(false)}>
            Cancel booking
          </Button>
          <SheetClose render={<Button variant="outline" />}>Keep booking</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
