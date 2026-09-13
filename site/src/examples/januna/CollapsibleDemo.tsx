import { useState } from "react";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";

type Booking = { time: string; table: string; guests: number };

const first: Booking = { time: "18:30", table: "Table 4", guests: 2 };
const rest: Booking[] = [
  { time: "19:00", table: "Table 7", guests: 4 },
  { time: "20:15", table: "Patio 2", guests: 6 },
];

function BookingRow({ booking }: { booking: Booking }) {
  return (
    <div className="flex items-center gap-3 material-small px-3 py-2 text-label-14">
      <span className="text-label-13-mono text-content-secondary">{booking.time}</span>
      <span>
        {booking.table}, {booking.guests} guests
      </span>
    </div>
  );
}

export default function CollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-2">
        <span className="text-heading-14">Tonight's dinner shift has 3 bookings</span>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="Show all bookings" />}
        >
          <HugeiconsIcon icon={open ? ArrowUp01Icon : ArrowDown01Icon} strokeWidth={2} />
        </CollapsibleTrigger>
      </div>
      <BookingRow booking={first} />
      <CollapsibleContent className="flex flex-col gap-2">
        {rest.map((booking) => (
          <BookingRow key={booking.time} booking={booking} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
