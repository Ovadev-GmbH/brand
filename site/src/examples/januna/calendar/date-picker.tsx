import * as React from "react";
import { Button, Calendar, Field, FieldLabel, Popover, PopoverContent, PopoverTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatDay = (date: Date) => `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

export default function CalendarDatePicker() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <Field className="w-64">
      <FieldLabel htmlFor="calendar-date-picker">Booking date</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button id="calendar-date-picker" variant="outline" className="justify-between" />}>
          {date ? formatDay(date) : <span className="text-content-tertiary">Pick an evening</span>}
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} data-icon="inline-end" />
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            weekStartsOn={1}
            defaultMonth={new Date(2026, 8)}
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
