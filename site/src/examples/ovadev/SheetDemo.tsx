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

const facts = [
  ["Tenant", "acme-logistics"],
  ["Amount", "CHF 1'240.00"],
  ["Period", "2026-08"],
  ["Due", "2026-10-01"],
] as const;

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open invoice</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>INV-2026-0142</SheetTitle>
          <SheetDescription>Issued 2026-09-01 to acme-logistics. Not paid yet.</SheetDescription>
        </SheetHeader>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 px-4">
          {facts.map(([term, value]) => (
            <div key={term} className="contents">
              <dt className="text-label-13 text-content-secondary">{term}</dt>
              <dd className="m-0 text-label-13-mono">{value}</dd>
            </div>
          ))}
        </dl>
        <SheetFooter>
          <Button>Mark as paid</Button>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
