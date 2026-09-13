import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Mark as no-show</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
          <DrawerHeader>
            <DrawerTitle>Mark Nora Keller as a no-show?</DrawerTitle>
            <DrawerDescription>
              Her party of 6 was due at 19:30. Table 12 is released for the rest of the evening, and the deposit of
              CHF 120.00 is kept.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Mark as no-show</Button>
            <DrawerClose render={<Button variant="outline" />}>Keep waiting</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
