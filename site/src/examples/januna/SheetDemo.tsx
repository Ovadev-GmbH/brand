import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Textarea,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon } from "@hugeicons/core-free-icons";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
        Edit guest
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Guest profile</SheetTitle>
          <SheetDescription>
            Details, preferences and allergies travel with every booking this
            guest makes.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-5 px-6">
          <div className="grid gap-2">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Nora Keller" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-email">Email</Label>
            <Input
              id="sheet-email"
              type="email"
              defaultValue="nora.keller@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-notes">Notes for the floor</Label>
            <Textarea
              id="sheet-notes"
              defaultValue="Prefers the window tables. Nut allergy."
            />
          </div>
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
