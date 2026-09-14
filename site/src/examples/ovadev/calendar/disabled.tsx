import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-ovadev";

const firstDay = new Date(2026, 8, 14);
const booked = [new Date(2026, 8, 17), new Date(2026, 8, 24)];

function formatDate(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function CalendarDisabled() {
  const [day, setDay] = React.useState<Date | undefined>();

  return (
    <div className="flex w-fit flex-col gap-3">
      <Calendar
        mode="single"
        defaultMonth={firstDay}
        weekStartsOn={1}
        selected={day}
        onSelect={setDay}
        disabled={[{ before: firstDay }, { dayOfWeek: [0, 6] }, ...booked]}
        className="material-base"
      />
      <p className="m-0 text-label-13 text-content-secondary">
        {day ? (
          <>
            Maintenance for ch-zrh-1 on <span className="text-label-13-mono text-content-primary">{formatDate(day)}</span>
          </>
        ) : (
          "Weekdays from tomorrow; two days are already booked."
        )}
      </p>
    </div>
  );
}
