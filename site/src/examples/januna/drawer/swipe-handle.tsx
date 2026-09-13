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

export default function DrawerSwipeHandleExample() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Seat walk-in</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Walk-in seated at T4</DrawerTitle>
          <DrawerDescription>Party of 2. The table is needed again at 20:00 for the next booking.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-4">
          <DrawerClose render={<Button />}>Done</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
