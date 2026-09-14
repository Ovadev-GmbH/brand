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
  Input,
} from "@ovadev-gmbh/ui-ovadev";

export default function DrawerSwipeHandleExample() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Get press kit</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your download link</DrawerTitle>
          <DrawerDescription>Copy it now. It works for 24 hours.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Input className="text-label-13-mono" defaultValue="https://ova.dev/press/kit-2026-09.zip?t=9c2e41b7" aria-label="Press kit link" readOnly />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Done</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
