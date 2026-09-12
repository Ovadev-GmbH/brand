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
} from "@ovadev-gmbh/ui-internal";

const rows = [
  ["Tenant", "acme-logistics"],
  ["Plan", "Scale"],
  ["Amount", "CHF 1,240.00"],
  ["Due", "2026-09-30"],
  ["Status", "open"],
] as const;

export default function SheetDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          Invoice INV-2041
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>INV-2041</SheetTitle>
            <SheetDescription>
              Issued 2026-09-01 for the August billing period.
            </SheetDescription>
          </SheetHeader>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 px-4">
            {rows.map(([key, value]) => (
              <div key={key} className="contents">
                <dt className="text-label-13 text-content-secondary">{key}</dt>
                <dd className="text-label-13-mono">{value}</dd>
              </div>
            ))}
          </dl>
          <SheetFooter>
            <Button>Mark as paid</Button>
            <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
