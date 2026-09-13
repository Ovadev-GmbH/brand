import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-januna";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function CalendarMonthYear() {
  const [birthday, setBirthday] = React.useState<Date | undefined>(new Date(1988, 4, 14));

  return (
    <div className="flex flex-col items-start gap-3">
      <Calendar
        mode="single"
        captionLayout="dropdown"
        startMonth={new Date(1930, 0)}
        endMonth={new Date(2026, 11)}
        defaultMonth={new Date(1988, 4)}
        weekStartsOn={1}
        selected={birthday}
        onSelect={setBirthday}
        className="material-base"
      />
      <p className="m-0 text-label-14 text-content-secondary">
        Nora Keller&rsquo;s birthday:{" "}
        <span className="text-content-primary">
          {birthday ? `${birthday.getDate()} ${months[birthday.getMonth()]}` : "not set"}
        </span>
      </p>
    </div>
  );
}
