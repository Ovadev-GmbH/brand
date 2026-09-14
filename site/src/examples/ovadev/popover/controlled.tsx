import * as React from "react";
import {
  Button,
  Field,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function PopoverControlled() {
  const [open, setOpen] = React.useState(false);
  const [seats, setSeats] = React.useState(60);
  const [draft, setDraft] = React.useState("60");

  function openChange(next: boolean) {
    // Start from the saved value each time the popover opens.
    if (next) setDraft(String(seats));
    setOpen(next);
  }

  function apply(e: React.FormEvent) {
    e.preventDefault();
    setSeats(Number(draft));
    setOpen(false);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-label-13">
        Restaurant Linde <span className="text-label-13-mono text-content-secondary">{seats} seats</span>
      </span>
      <Popover open={open} onOpenChange={openChange}>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>Change</PopoverTrigger>
        <PopoverContent align="start" className="w-60">
          <form onSubmit={apply} className="flex flex-col gap-3">
            <PopoverHeader>
              <PopoverTitle>Seats in JANUNA</PopoverTitle>
            </PopoverHeader>
            <Field>
              <FieldLabel htmlFor="popover-controlled-seats">Seats</FieldLabel>
              <Input
                id="popover-controlled-seats"
                type="number"
                min={1}
                className="text-label-13-mono"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
            </Field>
            <Button type="submit" size="sm" className="self-end">
              Save seats
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
