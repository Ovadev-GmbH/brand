import * as React from "react";
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
  Slider,
  Spinner,
} from "@ovadev-gmbh/ui-ticketova";

const toArray = (value: number | readonly number[]) => (typeof value === "number" ? [value] : [...value]);

export default function DrawerControlled() {
  const [open, setOpen] = React.useState(false);
  const [replicas, setReplicas] = React.useState([3]);
  const [applied, setApplied] = React.useState(3);
  const [saving, setSaving] = React.useState(false);
  const count = replicas[0] ?? 1;

  function scale() {
    setSaving(true);
    // Stands in for the request: the drawer closes when it has gone through.
    setTimeout(() => {
      setApplied(count);
      setSaving(false);
      setOpen(false);
    }, 900);
  }

  return (
    <div className="flex items-center gap-3">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger render={<Button variant="outline" />}>Scale production</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Scale acme-logistics</DrawerTitle>
            <DrawerDescription>Production in ch-zrh-1. Each replica adds CHF 45.00 a month.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
              <span id="drawer-controlled-replicas" className="text-label-13">
                Replicas
              </span>
              <span className="text-label-13-mono">{count}</span>
            </div>
            <Slider
              value={replicas}
              onValueChange={(value) => setReplicas(toArray(value))}
              min={1}
              max={12}
              aria-labelledby="drawer-controlled-replicas"
            />
          </div>
          <DrawerFooter>
            <Button onClick={scale} disabled={saving}>
              {saving ? <Spinner data-icon="inline-start" /> : null}
              Scale to {count}
            </Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <span className="text-label-13 text-content-secondary">
        <span className="text-label-13-mono">{applied}</span> replicas running
      </span>
    </div>
  );
}
