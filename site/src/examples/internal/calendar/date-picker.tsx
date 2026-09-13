import * as React from "react";
import { Button, Calendar, Field, FieldLabel, Popover, PopoverContent, PopoverTrigger } from "@ovadev-gmbh/ui-internal";
import { CalendarIcon } from "lucide-react";

function formatDate(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function CalendarDatePicker() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <Field className="w-56">
      <FieldLabel htmlFor="calendar-date-picker">Contract end</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button id="calendar-date-picker" variant="outline" className="justify-between" />}>
          {date ? (
            <span className="text-label-13-mono">{formatDate(date)}</span>
          ) : (
            <span className="text-content-tertiary">Pick a date</span>
          )}
          <CalendarIcon data-icon="inline-end" />
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            weekStartsOn={1}
            selected={date}
            onSelect={(day) => {
              setDate(day);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
