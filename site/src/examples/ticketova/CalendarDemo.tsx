import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-ticketova";

export default function CalendarDemo() {
  const [dueDate, setDueDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      weekStartsOn={1}
      selected={dueDate}
      onSelect={setDueDate}
      className="material-base"
    />
  );
}
