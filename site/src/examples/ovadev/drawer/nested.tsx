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

export default function DrawerNested() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Review draft</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>One season on TICKETOVA</DrawerTitle>
          <DrawerDescription>Draft since 2026-09-13 09:12. 2 open comments from Beni.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-4">
          <Drawer>
            <DrawerTrigger render={<Button variant="destructive" />}>Discard draft</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Discard the draft?</DrawerTitle>
                <DrawerDescription>The post goes back to the version published 2026-09-11 14:02. The comments are kept.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="pt-4">
                <DrawerClose render={<Button variant="destructive" />}>Discard now</DrawerClose>
                <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
