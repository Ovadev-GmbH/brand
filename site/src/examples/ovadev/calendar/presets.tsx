import * as React from "react";
import { Button, Calendar } from "@ovadev-gmbh/ui-ovadev";

const issued = new Date(2026, 8, 13);
const terms = [10, 30, 60];

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date?: Date) {
  if (!date) return "not set";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function CalendarPresets() {
  const [due, setDue] = React.useState<Date | undefined>(addDays(issued, 30));
  const [month, setMonth] = React.useState(addDays(issued, 30));

  function applyTerm(days: number) {
    const date = addDays(issued, days);
    setDue(date);
    setMonth(date);
  }

  return (
    <div className="flex w-fit flex-col material-base">
      <Calendar mode="single" weekStartsOn={1} selected={due} onSelect={setDue} month={month} onMonthChange={setMonth} />
      <div className="flex flex-col gap-3 border-t border-divider p-3">
        <div className="flex gap-2">
          {terms.map((days) => (
            <Button key={days} variant="outline" size="sm" className="flex-1" onClick={() => applyTerm(days)}>
              Net {days}
            </Button>
          ))}
        </div>
        <p className="m-0 text-label-13 text-content-secondary">
          INV-2026-0142 due <span className="text-label-13-mono text-content-primary">{formatDate(due)}</span>
        </p>
      </div>
    </div>
  );
}
