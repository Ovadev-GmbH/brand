import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

type Booking = { time: string; guest: string; covers: number; table: string };

const next: Booking = { time: "19:00", guest: "Brunner", covers: 4, table: "T7" };
const later: Booking[] = [
  { time: "19:15", guest: "Keller", covers: 6, table: "T12" },
  { time: "19:30", guest: "Moreau", covers: 2, table: "T3" },
];

function Arrival({ arrival }: { arrival: Booking }) {
  return (
    <div className="material-small flex items-center gap-3 px-3 py-2 text-label-14">
      <span className="text-label-13-mono text-content-secondary">{arrival.time}</span>
      <span className="flex-1">
        {arrival.guest}, {arrival.covers} guests
      </span>
      <span className="text-label-13-mono text-content-secondary">{arrival.table}</span>
    </div>
  );
}

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-heading-14">Arriving in the next hour</span>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Show all arrivals"
              className="data-panel-open:[&_svg]:rotate-180"
            />
          }
        >
          <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} className="transition-transform duration-fast ease-brand" />
        </CollapsibleTrigger>
      </div>
      <Arrival arrival={next} />
      <CollapsibleContent className="flex flex-col gap-2">
        {later.map((arrival) => (
          <Arrival key={arrival.time} arrival={arrival} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
