import * as React from "react";
import {
  Button,
  Checkbox,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Label,
} from "@ovadev-gmbh/ui-januna";

const steps = [
  "Turn on the terrace heaters",
  "Print the run sheet",
  "Confirm the 20:15 party of 6",
  "Brief the servers on tonight's specials",
];

export default function DrawerNonModal() {
  const [done, setDone] = React.useState<string[]>([]);

  return (
    /* Not modal: the floor plan stays usable while the checklist is open beside it. */
    <Drawer swipeDirection="right" modal={false} disablePointerDismissal>
      <DrawerTrigger render={<Button variant="outline" />}>Before service</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Before service</DrawerTitle>
          <DrawerDescription>
            {done.length} of {steps.length} done. Doors open at 18:00.
          </DrawerDescription>
        </DrawerHeader>
        <ul className="m-0 flex list-none flex-col gap-3 p-4">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <Checkbox
                id={`drawer-non-modal-step-${i}`}
                checked={done.includes(step)}
                onCheckedChange={(on) => setDone((d) => (on ? [...d, step] : d.filter((s) => s !== step)))}
              />
              <Label htmlFor={`drawer-non-modal-step-${i}`}>{step}</Label>
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
