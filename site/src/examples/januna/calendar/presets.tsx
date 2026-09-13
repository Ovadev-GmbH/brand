import * as React from "react";
import { Button, Calendar } from "@ovadev-gmbh/ui-januna";

const presets = [
  { label: "Tonight", date: new Date(2026, 8, 13) },
  { label: "Tomorrow", date: new Date(2026, 8, 14) },
  { label: "Saturday", date: new Date(2026, 8, 19) },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatDay = (date?: Date) => (date ? `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}` : "not set");

export default function CalendarPresets() {
  const [date, setDate] = React.useState<Date | undefined>(presets[0]?.date);
  const [month, setMonth] = React.useState(new Date(2026, 8));

  function apply(next: Date) {
    setDate(next);
    setMonth(next);
  }

  return (
    <div className="flex w-fit flex-col material-base">
      <Calendar mode="single" weekStartsOn={1} selected={date} onSelect={setDate} month={month} onMonthChange={setMonth} />
      <div className="flex flex-col gap-3 border-t border-divider p-3">
        <div className="flex gap-2">
          {presets.map((preset) => (
            <Button key={preset.label} variant="outline" size="sm" className="flex-1" onClick={() => apply(preset.date)}>
              {preset.label}
            </Button>
          ))}
        </div>
        <p className="m-0 text-label-14 text-content-secondary">
          Party of 6 on <span className="text-content-primary">{formatDay(date)}</span>
        </p>
      </div>
    </div>
  );
}
