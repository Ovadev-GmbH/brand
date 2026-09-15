import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-ticketova";

function formatDate(date?: Date) {
  if (!date) return "not set";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function CalendarMonthYear() {
  const [start, setStart] = React.useState<Date | undefined>(new Date(2024, 2, 1));

  return (
    <div className="flex flex-col items-start gap-3">
      <Calendar
        mode="single"
        captionLayout="dropdown"
        startMonth={new Date(2020, 0)}
        endMonth={new Date(2027, 11)}
        defaultMonth={new Date(2024, 2)}
        weekStartsOn={1}
        selected={start}
        onSelect={setStart}
        className="material-base"
      />
      <p className="m-0 text-label-13 text-content-secondary">
        Contract start for bergwerk-ag:{" "}
        <span className="text-label-13-mono text-content-primary">{formatDate(start)}</span>
      </p>
    </div>
  );
}
