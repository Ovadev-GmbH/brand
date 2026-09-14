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
      <DrawerTrigger render={<Button variant="outline" />}>Review deployment</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Deployment dpl_8a4f</DrawerTitle>
          <DrawerDescription>Production for acme-logistics since 2026-09-13 09:12. Error rate 4.2%.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-4">
          <Drawer>
            <DrawerTrigger render={<Button variant="destructive" />}>Roll back</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Roll back to dpl_7c21?</DrawerTitle>
                <DrawerDescription>Traffic moves to the build from 2026-09-11 14:02 in about 20 seconds.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="pt-4">
                <DrawerClose render={<Button variant="destructive" />}>Roll back now</DrawerClose>
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
