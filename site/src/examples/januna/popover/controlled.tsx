import * as React from "react";
import { Button, Field, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "@ovadev-gmbh/ui-januna";

export default function PopoverControlled() {
  const [open, setOpen] = React.useState(false);
  const [covers, setCovers] = React.useState(40);
  const [draft, setDraft] = React.useState("40");

  function openChange(next: boolean) {
    // Start from the saved value each time the popover opens.
    if (next) setDraft(String(covers));
    setOpen(next);
  }

  function apply(e: React.FormEvent) {
    e.preventDefault();
    setCovers(Number(draft));
    setOpen(false);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-label-14">
        Lunch <span className="text-label-14-mono text-content-secondary">{covers} covers</span>
      </span>
      <Popover open={open} onOpenChange={openChange}>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>Change</PopoverTrigger>
        <PopoverContent align="start" className="w-60">
          <form onSubmit={apply} className="flex flex-col gap-4">
            <PopoverHeader>
              <PopoverTitle>Covers for lunch</PopoverTitle>
            </PopoverHeader>
            <Field>
              <FieldLabel htmlFor="popover-controlled-covers">Covers</FieldLabel>
              <Input
                id="popover-controlled-covers"
                type="number"
                min={1}
                className="text-label-14-mono"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
            </Field>
            <Button type="submit" size="sm" className="self-end">
              Save limit
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
