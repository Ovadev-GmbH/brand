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
} from "@ovadev-gmbh/ui-ticketova";

const directions = [
  { value: "down", label: "Bottom" },
  { value: "up", label: "Top" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
] as const;

const rows = [
  ["Environment", "production"],
  ["Region", "ch-zrh-1"],
  ["Commit", "4f2c9e1"],
  ["Build time", "1m 42s"],
] as const;

export default function DrawerPosition() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {directions.map((direction) => (
        <Drawer key={direction.value} swipeDirection={direction.value}>
          <DrawerTrigger render={<Button variant="outline" />}>{direction.label}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Deployment dpl_8a4f</DrawerTitle>
              <DrawerDescription>acme-logistics, deployed 2026-09-13 09:12.</DrawerDescription>
            </DrawerHeader>
            <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 p-4">
              {rows.map(([term, value]) => (
                <div key={term} className="contents">
                  <dt className="text-label-13 text-content-secondary">{term}</dt>
                  <dd className="m-0 text-label-13-mono">{value}</dd>
                </div>
              ))}
            </dl>
            <DrawerFooter>
              <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
