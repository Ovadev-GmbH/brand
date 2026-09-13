import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-januna";

const firstBookable = new Date(2026, 8, 14);
const fullyBooked = [new Date(2026, 8, 19), new Date(2026, 8, 26)];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatDay = (date: Date) => `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

export default function CalendarDisabled() {
  const [day, setDay] = React.useState<Date | undefined>();

  return (
    <div className="flex w-fit flex-col gap-3">
      <Calendar
        mode="single"
        defaultMonth={firstBookable}
        weekStartsOn={1}
        selected={day}
        onSelect={setDay}
        disabled={[{ before: firstBookable }, { dayOfWeek: [1] }, ...fullyBooked]}
        className="material-base"
      />
      <p className="m-0 max-w-72 text-label-14 text-content-secondary">
        {day ? (
          <>
            Dinner for 6 on <span className="text-content-primary">{formatDay(day)}</span>
          </>
        ) : (
          "Closed on Mondays. Both Saturdays are fully booked."
        )}
      </p>
    </div>
  );
}
