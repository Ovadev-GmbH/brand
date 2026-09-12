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
} from "@ovadev-gmbh/ui-internal";

export default function DrawerDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Drawer showSwipeHandle>
        <DrawerTrigger render={<Button variant="outline" />}>
          Rollback deployment
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Roll back to dpl_7c21?</DrawerTitle>
            <DrawerDescription>
              Production for acme-logistics returns to the build from
              2026-09-11 14:02. Traffic switches over in about 20 seconds.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Roll back</Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
