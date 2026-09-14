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
  ["From", "Gemeinde Hausen am Albis"],
  ["Product", "TICKETOVA"],
  ["Received", "2026-09-12"],
  ["Reply by", "2026-09-19"],
] as const;

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open request</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>REQ-2026-031</SheetTitle>
          <SheetDescription>Quote request from ova.dev/contact. Not answered yet.</SheetDescription>
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
          <Button>Mark as answered</Button>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
