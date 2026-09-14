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
} from "@ovadev-gmbh/ui-ovadev";

const steps = [
  "Publish the JANUNA product page",
  "Send the September issue",
  "Update the press kit with the JANUNA mark",
  "Post the launch on LinkedIn",
];

export default function DrawerNonModal() {
  const [done, setDone] = React.useState<string[]>([]);

  return (
    /* Not modal: the page stays usable while the checklist is open beside it. */
    <Drawer swipeDirection="right" modal={false} disablePointerDismissal>
      <DrawerTrigger render={<Button variant="outline" />}>Open checklist</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>JANUNA launch</DrawerTitle>
          <DrawerDescription>
            {done.length} of {steps.length} steps done. Work through them on the page.
          </DrawerDescription>
        </DrawerHeader>
        <ul className="m-0 flex list-none flex-col gap-3 px-4 py-2">
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
