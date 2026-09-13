import * as React from "react";
import { Button, Slider, Spinner } from "@ovadev-gmbh/ui-januna";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@ovadev-gmbh/ui-januna";

const toArray = (value: number | readonly number[]) => (typeof value === "number" ? [value] : [...value]);

export default function DrawerControlled() {
  const [open, setOpen] = React.useState(false);
  const [covers, setCovers] = React.useState([40]);
  const [applied, setApplied] = React.useState(40);
  const [saving, setSaving] = React.useState(false);
  const count = covers[0] ?? 0;

  function save() {
    setSaving(true);
    // Stands in for the request: the drawer closes when it has been saved.
    setTimeout(() => {
      setApplied(count);
      setSaving(false);
      setOpen(false);
    }, 900);
  }

  return (
    <div className="flex items-center gap-3">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger render={<Button variant="outline" />}>Limit online covers</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Online covers for dinner</DrawerTitle>
            <DrawerDescription>Guests book online until this many covers are taken. Phone bookings and walk-ins do not count.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
              <span id="drawer-controlled-covers" className="text-label-14">Covers</span>
              <span className="text-label-14-mono">{count}</span>
            </div>
            <Slider value={covers} onValueChange={(v) => setCovers(toArray(v))} min={0} max={80} aria-labelledby="drawer-controlled-covers" />
          </div>
          <DrawerFooter>
            <Button onClick={save} disabled={saving}>
              {saving ? <Spinner data-icon="inline-start" /> : null}
              Save limit
            </Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <span className="text-label-14 text-content-secondary">
        <span className="text-label-14-mono">{applied}</span> covers online
      </span>
    </div>
  );
}
