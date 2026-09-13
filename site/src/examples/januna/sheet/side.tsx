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

const sides = [
  { side: "top", label: "Top" },
  { side: "right", label: "Right" },
  { side: "bottom", label: "Bottom" },
  { side: "left", label: "Left" },
] as const;

export default function SheetSide() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {sides.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>{label}</SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Terrace 3</SheetTitle>
              <SheetDescription>Four seats under the heaters. Booked tonight at 19:30 for Nora Keller, party of 4.</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
