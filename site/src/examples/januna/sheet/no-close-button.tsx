import * as React from "react";
import {
  Button,
  Description,
  DescriptionList,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ovadev-gmbh/ui-januna";

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
        <DescriptionList className="px-8">
          <Description title="Guest" content="Lina Brunner" />
          <Description title="Party" content="6 guests" />
          <Description title="Time" content="Tonight, 20:15" />
          <Description title="Deposit" content={<span className="text-label-14-mono">CHF 240.00</span>} />
        </DescriptionList>
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
