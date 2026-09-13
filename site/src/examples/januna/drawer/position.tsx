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

const directions = [
  { value: "down", label: "Bottom" },
  { value: "up", label: "Top" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
] as const;

const fields = [
  { term: "Seats", value: "4", mono: true },
  { term: "Section", value: "Terrace" },
  { term: "Server", value: "Jonas Meier" },
  { term: "Guest", value: "Nora Keller" },
];

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
            <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-4 p-4">
              {fields.map((field) => (
                <div key={field.term} className="flex min-w-0 flex-col gap-1">
                  <dt className="text-label-13 text-content-secondary">{field.term}</dt>
                  <dd className={`m-0 text-content-primary ${field.mono ? "text-label-13-mono" : "text-label-14"}`}>
                    {field.value}
                  </dd>
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
