import {
  Button,
  Description,
  DescriptionList,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@ovadev-gmbh/ui-januna";

const directions = [
  { value: "down", label: "Bottom" },
  { value: "up", label: "Top" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
] as const;

export default function DrawerPosition() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {directions.map((direction) => (
        <Drawer key={direction.value} swipeDirection={direction.value}>
          <DrawerTrigger render={<Button variant="outline" />}>{direction.label}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Terrace 3</DrawerTitle>
              <DrawerDescription>Next booking tonight at 19:30.</DrawerDescription>
            </DrawerHeader>
            <DescriptionList className="p-4">
              <Description title="Seats" content="4" />
              <Description title="Section" content="Terrace" />
              <Description title="Server" content="Jonas Meier" />
              <Description title="Guest" content="Nora Keller" />
            </DescriptionList>
            <DrawerFooter>
              <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
