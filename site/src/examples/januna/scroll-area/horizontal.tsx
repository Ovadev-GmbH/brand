import { ScrollArea, ScrollBar } from "@ovadev-gmbh/ui-januna";

const slots = [
  { time: "17:30", booked: 6 },
  { time: "18:00", booked: 14 },
  { time: "18:30", booked: 22 },
  { time: "19:00", booked: 31 },
  { time: "19:30", booked: 38 },
  { time: "20:00", booked: 40 },
  { time: "20:30", booked: 29 },
  { time: "21:00", booked: 17 },
  { time: "21:30", booked: 8 },
];

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-full max-w-xl material-base">
      <ol aria-label="Covers by arrival time, Friday dinner" className="flex w-max">
        {slots.map((slot) => (
          <li key={slot.time} className="flex w-32 flex-col gap-1 border-r border-divider px-3 pt-3 pb-4 last:border-r-0">
            <span className="text-label-14">{slot.time}</span>
            <span className="text-label-12 text-content-secondary">{slot.booked} of 40 covers</span>
          </li>
        ))}
      </ol>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
