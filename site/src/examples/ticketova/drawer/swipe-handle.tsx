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
} from "@ovadev-gmbh/ui-ticketova";

export default function DrawerSwipeHandleExample() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Create key</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Key created</DrawerTitle>
          <DrawerDescription>Copy it now. It is shown only once.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Input className="text-label-13-mono" defaultValue="sk_live_9c2e41b7f0a3d85e" aria-label="New API key" readOnly />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Done</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
