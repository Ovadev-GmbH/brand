import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-januna";

type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

function format(date: Date | undefined) {
  return date
    ? date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
    : "—";
}

export default function CalendarDemo() {
  const [booking, setBooking] = React.useState<Date | undefined>(new Date());
  const [closure, setClosure] = React.useState<DateRange | undefined>(undefined);

  return (
    <div className="flex max-w-[640px] flex-wrap gap-6">
      <div className="grid gap-2">
        <Calendar
          mode="single"
          selected={booking}
          onSelect={setBooking}
          disabled={{ dayOfWeek: [1] }}
          className="rounded-2xl border"
        />
        <p className="text-sm text-muted-foreground">
          Booking on {format(booking)} · closed on Mondays
        </p>
      </div>

      <div className="grid gap-2">
        <Calendar
          mode="range"
          selected={closure}
          onSelect={setClosure}
          captionLayout="dropdown"
          numberOfMonths={1}
          className="rounded-2xl border"
        />
        <p className="text-sm text-muted-foreground">
          Seasonal closure: {format(closure?.from)} – {format(closure?.to)}
        </p>
      </div>
    </div>
  );
}
