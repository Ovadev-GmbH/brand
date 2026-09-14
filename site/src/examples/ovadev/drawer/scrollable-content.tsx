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

const lines = [
  "Cloning ovadev/acme-logistics at 4f2c9e1",
  "Restoring build cache, 412 MB",
  "Installing 1'284 packages",
  "Running 3 database migrations",
  "Building server bundle",
  "Building client bundle",
  ...Array.from({ length: 12 }, (_, i) => `Uploaded assets/chunk-${String(i + 1).padStart(2, "0")}.js`),
  "Starting 3 replicas in ch-zrh-1",
  "Replica 1 passed its health check",
  "Replica 2 passed its health check",
  "Replica 3 passed its health check",
  "Moving traffic to dpl_8a4f",
  "Draining dpl_7c21",
  "Deployment ready",
];

export default function DrawerScrollableContent() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Show build log</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Build log</DrawerTitle>
          <DrawerDescription>dpl_8a4f for acme-logistics, 2026-09-13.</DrawerDescription>
        </DrawerHeader>
        <ol className="m-0 my-4 min-h-0 flex-1 list-none overflow-y-auto border-y border-divider px-4 py-2">
          {lines.map((line, i) => (
            <li key={line} className="flex gap-3 py-0.5 text-label-12-mono">
              <span className="text-content-tertiary">09:12:{String(i * 2).padStart(2, "0")}</span>
              <span>{line}</span>
            </li>
          ))}
        </ol>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
