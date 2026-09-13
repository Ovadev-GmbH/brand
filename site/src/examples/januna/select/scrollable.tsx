import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-januna";

// Every quarter hour from 17:00 to 22:45, in three seatings.
const times = (from: number, to: number) =>
  Array.from({ length: (to - from) * 4 }, (_, i) => {
    const minutes = from * 60 + i * 15;
    return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  });

const seatings = [
  { name: "Early seating", times: times(17, 19) },
  { name: "Main seating", times: times(19, 21) },
  { name: "Late seating", times: times(21, 23) },
];

const items = seatings.flatMap((s) => s.times.map((t) => ({ label: t, value: t })));

export default function SelectScrollable() {
  return (
    <Select items={items} defaultValue="19:30">
      <SelectTrigger className="w-40 text-label-14-mono" aria-label="Arrival time">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {seatings.map((seating) => (
          <SelectGroup key={seating.name}>
            <SelectLabel>{seating.name}</SelectLabel>
            {seating.times.map((time) => (
              <SelectItem key={time} value={time}>
                <span className="text-label-14-mono">{time}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
