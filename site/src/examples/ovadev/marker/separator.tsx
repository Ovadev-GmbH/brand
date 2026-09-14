import { Marker, MarkerContent } from "@ovadev-gmbh/ui-ovadev";

const days = [
  {
    date: "2026-09-13",
    events: [
      { at: "14:02", text: "robin@ova.dev published Admission control at the turnstile" },
      { at: "09:41", text: "Press kit updated with the 2026 logo files" },
    ],
  },
  {
    date: "2026-09-12",
    events: [{ at: "17:15", text: "Quote request from Seebad Zug answered by philip@ova.dev" }],
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
