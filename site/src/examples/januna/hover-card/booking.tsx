import { HoverCard, HoverCardContent, HoverCardTrigger, StatusDot } from "@ovadev-gmbh/ui-januna";

const facts = [
  ["Time", "20:15"],
  ["Party", "6 guests"],
  ["Table", "T9"],
  ["Deposit", "CHF 240.00"],
  ["Booked", "2026-09-02 11:04"],
];

export default function HoverCardBooking() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-14 text-content-secondary">Next arrival</span>
      <HoverCard>
        <HoverCardTrigger
          href="#bookings/BK-4821"
          className="text-label-14-mono text-content-brand underline-offset-4 hover:underline"
        >
          BK-4821
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <span className="text-heading-14">Lina Brunner</span>
              <StatusDot state="pending" label />
            </div>
            <dl className="m-0 flex flex-col gap-1.5">
              {facts.map(([term, value]) => (
                <div key={term} className="flex items-center justify-between gap-4">
                  <dt className="text-label-13 text-content-secondary">{term}</dt>
                  <dd className="m-0 text-label-13-mono">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
