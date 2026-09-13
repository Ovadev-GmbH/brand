import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-januna";

type Period = { from: Date | undefined; to?: Date | undefined };

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatDay = (date?: Date) =>
  date ? `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` : "not set";

export default function CalendarRange() {
  const [closure, setClosure] = React.useState<Period | undefined>({
    from: new Date(2026, 11, 24),
    to: new Date(2027, 0, 6),
  });

  return (
    <div className="flex flex-col items-start gap-3">
      <Calendar
        mode="range"
        numberOfMonths={2}
        defaultMonth={new Date(2026, 11)}
        weekStartsOn={1}
        selected={closure}
        onSelect={setClosure}
        className="material-base"
      />
      <p className="m-0 text-label-14 text-content-secondary">
        Closed for the holidays from <span className="text-content-primary">{formatDay(closure?.from)}</span> to{" "}
        <span className="text-content-primary">{formatDay(closure?.to)}</span>
      </p>
    </div>
  );
}
