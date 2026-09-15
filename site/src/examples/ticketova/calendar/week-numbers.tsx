import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-ticketova";

export default function CalendarWeekNumbers() {
  const [day, setDay] = React.useState<Date | undefined>(new Date(2026, 8, 21));

  return (
    <Calendar
      mode="single"
      showWeekNumber
      ISOWeek
      defaultMonth={new Date(2026, 8)}
      selected={day}
      onSelect={setDay}
      className="material-base"
    />
  );
}
