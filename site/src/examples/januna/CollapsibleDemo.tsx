import { useState } from "react";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";

export default function CollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-2">
        <h4 className="text-sm font-medium">Tonight's dinner shift has 3 bookings</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="Toggle bookings" />}
        >
          <HugeiconsIcon icon={open ? ArrowUp01Icon : ArrowDown01Icon} strokeWidth={2} />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-2xl border px-3 py-2 text-sm">
        18:30 · Table 4 · 2 guests
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-2xl border px-3 py-2 text-sm">
          19:00 · Table 7 · 4 guests
        </div>
        <div className="rounded-2xl border px-3 py-2 text-sm">
          20:15 · Patio 2 · 6 guests
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
