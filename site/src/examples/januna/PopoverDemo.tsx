import * as React from "react";
import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Settings01Icon } from "@hugeicons/core-free-icons";

export default function PopoverDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button variant="outline" />}>
        <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
        Table settings
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Table 12</PopoverTitle>
          <PopoverDescription>
            Seats and section decide which bookings Januna can place here.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-3">
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="popover-name">Name</Label>
            <Input
              id="popover-name"
              defaultValue="Window 12"
              className="col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="popover-seats">Seats</Label>
            <Input
              id="popover-seats"
              type="number"
              defaultValue="4"
              className="col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="popover-section">Section</Label>
            <Input
              id="popover-section"
              defaultValue="Terrace"
              className="col-span-2"
            />
          </div>
        </div>
        <Button size="sm" onClick={() => setOpen(false)}>
          Done
        </Button>
      </PopoverContent>
    </Popover>
  );
}
