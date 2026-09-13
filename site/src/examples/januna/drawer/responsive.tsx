import * as React from "react";
import { Button, Field, FieldLabel, Input, useIsMobile } from "@ovadev-gmbh/ui-januna";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@ovadev-gmbh/ui-januna";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@ovadev-gmbh/ui-januna";

function WaitlistForm({ onDone }: { onDone: () => void }) {
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        onDone();
      }}
    >
      <Field>
        <FieldLabel htmlFor="drawer-responsive-party">Name and party size</FieldLabel>
        <Input id="drawer-responsive-party" placeholder="Keller, 2" required />
      </Field>
      <Button type="submit">Add to waitlist</Button>
    </form>
  );
}

export default function DrawerResponsive() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const title = "Add a party to the waitlist";
  const description = "They get an SMS when their table is ready.";
  const trigger = <Button variant="outline" />;

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={trigger}>Add party</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <WaitlistForm onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={trigger}>Add party</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <WaitlistForm onDone={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
