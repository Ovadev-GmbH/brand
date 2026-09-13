import { StatusDot } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "18:30", guest: "Rossi", state: "active", word: "Seated" },
  { time: "19:30", guest: "Keller", state: "ready", word: "Confirmed" },
  { time: "19:45", guest: "Huber", state: "error", word: "No-show" },
  { time: "20:15", guest: "Brunner", state: "canceled", word: "Cancelled" },
] as const;

export default function StatusDotOwnWords() {
  return (
    <ul className="flex w-72 flex-col gap-2">
      {bookings.map((b) => (
        <li key={b.time} className="flex items-center gap-2 text-label-14">
          <StatusDot state={b.state} titlePrefix={`Booking of ${b.guest}`} />
          <span className="w-20">{b.word}</span>
          <span className="text-label-13-mono text-content-secondary">{b.time}</span>
          <span>{b.guest}</span>
        </li>
      ))}
    </ul>
  );
}
