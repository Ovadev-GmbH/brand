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
              <SheetTitle>One season on TICKETOVA</SheetTitle>
              <SheetDescription>Blog post, published 2026-09-13 09:12 by robin@ova.dev. 6 min read.</SheetDescription>
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
