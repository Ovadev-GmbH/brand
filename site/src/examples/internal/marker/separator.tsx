import { Marker, MarkerContent } from "@ovadev-gmbh/ui-internal";

const days = [
  {
    date: "2026-09-13",
    events: [
      { at: "14:02", text: "robin@ova.dev rotated sk_live_4f9a" },
      { at: "09:41", text: "Plan of bergwerk-ag changed to Scale" },
    ],
  },
  {
    date: "2026-09-12",
    events: [{ at: "17:15", text: "INV-2026-0142 sent to acme-logistics" }],
  },
];

export default function MarkerSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {days.map((day) => (
        <section key={day.date} className="flex flex-col gap-2">
          <Marker variant="separator">
            <MarkerContent className="text-label-12-mono">{day.date}</MarkerContent>
          </Marker>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {day.events.map((event) => (
              <li key={event.at} className="flex gap-3 text-label-13">
                <span className="text-label-13-mono text-content-tertiary">{event.at}</span>
                {event.text}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
