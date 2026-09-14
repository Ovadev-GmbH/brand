import * as React from "react";
import { Calendar } from "@ovadev-gmbh/ui-ovadev";

type Period = { from: Date | undefined; to?: Date | undefined };

function formatDate(date?: Date) {
  if (!date) return "not set";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function CalendarRange() {
  const [period, setPeriod] = React.useState<Period | undefined>({
    from: new Date(2026, 7, 1),
    to: new Date(2026, 7, 31),
  });

  return (
    <div className="flex flex-col items-start gap-3">
      <Calendar
        mode="range"
        numberOfMonths={2}
        defaultMonth={new Date(2026, 7, 1)}
        weekStartsOn={1}
        selected={period}
        onSelect={setPeriod}
        className="material-base"
      />
      <p className="m-0 text-label-13 text-content-secondary">
        Usage report from <span className="text-label-13-mono text-content-primary">{formatDate(period?.from)}</span> to{" "}
        <span className="text-label-13-mono text-content-primary">{formatDate(period?.to)}</span>
      </p>
    </div>
  );
}
