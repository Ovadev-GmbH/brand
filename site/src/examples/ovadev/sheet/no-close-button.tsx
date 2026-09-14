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
} from "@ovadev-gmbh/ui-ovadev";

const rows = [
  ["Issue", "2026-09"],
  ["Recipients", "1'204 subscribers"],
  ["Subject", "One season on TICKETOVA"],
  ["Scheduled", "2026-09-15 08:00"],
] as const;

export default function SheetNoCloseButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>Preview issue</SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Send the September issue?</SheetTitle>
          <SheetDescription>Check the details. Once sent, an issue cannot be recalled.</SheetDescription>
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
          <Button onClick={() => setOpen(false)}>Send issue</Button>
          <SheetClose render={<Button variant="outline" />}>Back to editing</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
