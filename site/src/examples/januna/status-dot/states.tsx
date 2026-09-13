import { StatusDot } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { state: "pending", note: "Deposit not paid yet" },
  { state: "active", note: "Seated at T12 since 19:05" },
  { state: "ready", note: "Confirmed for 19:30" },
  { state: "error", note: "Card declined at 17:31" },
  { state: "canceled", note: "Cancelled by the guest" },
  { state: "archived", note: "Dinner on 2026-09-06" },
] as const;

export default function StatusDotStates() {
  return (
    <ul className="flex w-80 flex-col gap-2">
      {bookings.map((booking) => (
        <li key={booking.state} className="flex items-center justify-between gap-4">
          <StatusDot state={booking.state} label />
          <span className="text-label-13 text-content-secondary">{booking.note}</span>
        </li>
      ))}
    </ul>
  );
}
