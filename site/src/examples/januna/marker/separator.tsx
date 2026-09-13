import { Marker, MarkerContent } from "@ovadev-gmbh/ui-januna";

const shifts = [
  {
    name: "Lunch, 11:30 to 14:30",
    bookings: [
      { time: "12:00", text: "M. Keller, party of 2, T4" },
      { time: "12:30", text: "Meier AG, party of 8, Terrace 3" },
    ],
  },
  {
    name: "Dinner, 18:00 to 23:00",
    bookings: [{ time: "19:30", text: "A. Rossi, party of 6, T12" }],
  },
];

export default function MarkerSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {shifts.map((shift) => (
        <section key={shift.name} className="flex flex-col gap-2">
          <Marker variant="separator">
            <MarkerContent>{shift.name}</MarkerContent>
          </Marker>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {shift.bookings.map((booking) => (
              <li key={booking.time} className="flex gap-3 text-label-14">
                <span className="text-label-13-mono text-content-tertiary">{booking.time}</span>
                {booking.text}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
