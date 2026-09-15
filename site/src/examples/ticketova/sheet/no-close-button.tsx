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
} from "@ovadev-gmbh/ui-ticketova";

const rows = [
  ["Tenant", "acme-logistics"],
  ["Recipient", "billing@acme-logistics.ch"],
  ["Amount", "CHF 1'240.00"],
  ["Due", "2026-10-01"],
] as const;

export default function SheetNoCloseButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>Preview invoice</SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Send INV-2026-0142?</SheetTitle>
          <SheetDescription>Check the details. Once sent, the invoice can only be voided.</SheetDescription>
        </SheetHeader>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 px-4">
          {rows.map(([term, value]) => (
            <div key={term} className="contents">
              <dt className="text-label-13 text-content-secondary">{term}</dt>
              <dd className="m-0 text-right text-label-13-mono">{value}</dd>
            </div>
          ))}
        </dl>
        <SheetFooter>
          <Button onClick={() => setOpen(false)}>Send invoice</Button>
          <SheetClose render={<Button variant="outline" />}>Back to editing</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
