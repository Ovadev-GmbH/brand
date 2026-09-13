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

const facts = [
  ["Time", "19:30"],
  ["Table", "T12"],
  ["Party", "6"],
  ["Deposit", "CHF 120.00"],
] as const;

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open booking</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Nora Keller, party of 6</SheetTitle>
          <SheetDescription>Tonight on the terrace. A birthday, and one guest has a nut allergy.</SheetDescription>
        </SheetHeader>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 px-8">
          {facts.map(([term, value]) => (
            <div key={term} className="contents">
              <dt className="text-label-14 text-content-secondary">{term}</dt>
              <dd className="m-0 text-label-14-mono">{value}</dd>
            </div>
          ))}
        </dl>
        <SheetFooter>
          <Button>Seat guests</Button>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
