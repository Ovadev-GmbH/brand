import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-internal";

export default function CalendarDemo() {
  const [dueDate, setDueDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={dueDate}
      onSelect={setDueDate}
      className="border"
    />
  );
}
