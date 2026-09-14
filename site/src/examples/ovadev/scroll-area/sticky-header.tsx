import { ScrollArea } from "@ovadev-gmbh/ui-ovadev";

const days = [
  {
    day: "2026-09-12",
    events: [
      { time: "14:03", actor: "robin", action: "post.published", target: "season-2026-in-numbers" },
      { time: "11:47", actor: "philip", action: "contact.replied", target: "gemeinde-cham" },
      { time: "10:22", actor: "system", action: "newsletter.sent", target: "2026-09" },
      { time: "09:05", actor: "beni", action: "page.updated", target: "/about" },
    ],
  },
  {
    day: "2026-09-11",
    events: [
      { time: "17:52", actor: "robin", action: "post.drafted", target: "why-a-till-of-our-own" },
      { time: "16:10", actor: "system", action: "contact.received", target: "gemeinde-cham" },
      { time: "12:31", actor: "philip", action: "press-kit.updated", target: "ticketova" },
    ],
  },
  {
    day: "2026-09-10",
    events: [
      { time: "15:44", actor: "system", action: "job.expired", target: "engineer-baar" },
      { time: "09:31", actor: "beni", action: "page.updated", target: "/de/impressum" },
      { time: "08:02", actor: "robin", action: "brand.published", target: "ovadev/colour" },
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
