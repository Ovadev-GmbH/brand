import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-januna";

export default function CalendarDemo() {
  const [booking, setBooking] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={booking}
      onSelect={setBooking}
      className="rounded-2xl border"
    />
  );
}
