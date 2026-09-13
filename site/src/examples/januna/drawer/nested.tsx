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

export default function DrawerNested() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Booking at 19:30</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nora Keller, party of 4</DrawerTitle>
          <DrawerDescription>Table 12 at 19:30. Not arrived yet, 25 minutes late.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-4">
          <Drawer>
            <DrawerTrigger render={<Button variant="destructive" />}>Mark as no-show</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Mark Nora Keller as a no-show?</DrawerTitle>
                <DrawerDescription>Table 12 is released and the no-show fee of CHF 80.00 is charged to the card on file.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="pt-4">
                <DrawerClose render={<Button variant="destructive" />}>Mark as no-show</DrawerClose>
                <DrawerClose render={<Button variant="outline" />}>Keep waiting</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
