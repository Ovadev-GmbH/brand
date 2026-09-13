import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-januna";

export default function CalendarDemo() {
  const [evening, setEvening] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      weekStartsOn={1}
      selected={evening}
      onSelect={setEvening}
      className="material-base"
    />
  );
}
