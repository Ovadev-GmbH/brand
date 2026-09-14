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
} from "@ovadev-gmbh/ui-ovadev";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Restore version</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
          <DrawerHeader>
            <DrawerTitle>Restore the version from 2026-09-11?</DrawerTitle>
            <DrawerDescription>
              The About us page on ova.dev returns to the version saved 2026-09-11 14:02 CEST, in DE and EN.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Restore</Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
