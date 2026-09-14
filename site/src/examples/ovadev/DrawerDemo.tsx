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
      <DrawerTrigger render={<Button variant="outline" />}>Roll back</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
          <DrawerHeader>
            <DrawerTitle>Roll back to dpl_7c21?</DrawerTitle>
            <DrawerDescription>
              Production for acme-logistics in ch-zrh-1 returns to the build from 2026-09-11 14:02 CEST.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Roll back</Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
