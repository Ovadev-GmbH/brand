import { Gauge } from "@ovadev-gmbh/ui-januna";

// For the kitchen more is worse: success while there is room, warning from 75, danger from 90.
const load = {
  "0": "var(--jan-status-success)",
  "75": "var(--jan-status-warning)",
  "90": "var(--jan-status-danger)",
};

const slots = [
  { time: "19:00", covers: 18, used: 41 },
  { time: "19:30", covers: 34, used: 78 },
  { time: "20:00", covers: 41, used: 94 },
];

function word(used: number) {
  if (used >= 90) return "At the limit";
  if (used >= 75) return "Busy";
  return "Room to spare";
}

export default function GaugeThresholds() {
  return (
    <ul className="flex w-80 flex-col gap-3">
      {slots.map((slot) => (
        <li key={slot.time} className="flex items-center gap-3">
          <Gauge value={slot.used} size="sm" colors={load} aria-label={`Kitchen load at ${slot.time}`} />
          <div className="flex flex-1 flex-col">
            <span className="text-label-14">
              <span className="text-label-13-mono">{slot.time}</span>, {slot.covers} covers
            </span>
            <span className="text-label-12 text-content-secondary">{word(slot.used)}</span>
          </div>
          <span className="text-label-13-mono">{slot.used}%</span>
        </li>
      ))}
    </ul>
  );
}
