import { ScrollArea } from "@ovadev-gmbh/ui-ticketova";

const days = [
  {
    day: "2026-09-12",
    events: [
      { time: "14:03", actor: "r.markant", action: "deployment.promoted", target: "d-8f3a21c" },
      { time: "11:47", actor: "l.keller", action: "invoice.voided", target: "INV-2026-0139" },
      { time: "10:22", actor: "system", action: "api_key.rotated", target: "bergwerk-ag" },
      { time: "09:05", actor: "l.keller", action: "plan.changed", target: "helvetia-labs" },
    ],
  },
  {
    day: "2026-09-11",
    events: [
      { time: "17:52", actor: "r.markant", action: "deployment.promoted", target: "d-41e9f02" },
      { time: "16:10", actor: "system", action: "invoice.issued", target: "INV-2026-0142" },
      { time: "12:31", actor: "a.brunner", action: "tenant.created", target: "acme-logistics" },
    ],
  },
  {
    day: "2026-09-10",
    events: [
      { time: "15:44", actor: "system", action: "invoice.overdue", target: "INV-2026-0131" },
      { time: "09:31", actor: "r.markant", action: "deployment.promoted", target: "d-2b8d9e4" },
      { time: "08:02", actor: "a.brunner", action: "member.invited", target: "s.frei@ova.dev" },
    ],
  },
];

export default function ScrollAreaStickyHeader() {
  return (
    <ScrollArea className="h-64 w-full max-w-xl material-base">
      {days.map(({ day, events }) => (
        <section key={day} aria-labelledby={`scroll-area-day-${day}`}>
          <h3
            id={`scroll-area-day-${day}`}
            className="sticky top-0 border-b border-divider bg-surface-secondary px-3 py-1.5 text-label-12-mono text-content-secondary"
          >
            {day}
          </h3>
          <ul>
            {events.map((event) => (
              <li
                key={`${event.time}-${event.action}`}
                className="flex items-center gap-3 border-b border-divider px-3 py-2 text-label-13 last:border-b-0"
              >
                <span className="w-10 text-label-13-mono text-content-secondary">{event.time}</span>
                <span className="w-20 truncate">{event.actor}</span>
                <span className="flex-1 truncate text-label-13-mono">{event.action}</span>
                <span className="text-label-13-mono text-content-secondary">{event.target}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </ScrollArea>
  );
}
