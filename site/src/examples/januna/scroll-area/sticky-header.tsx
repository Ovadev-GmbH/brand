import { ScrollArea } from "@ovadev-gmbh/ui-januna";

const slots = [
  {
    time: "18:00",
    bookings: [
      { name: "Brunner", party: 2, table: "T4" },
      { name: "Okafor", party: 4, table: "T7" },
    ],
  },
  {
    time: "18:30",
    bookings: [
      { name: "Meier", party: 2, table: "Bar 2" },
      { name: "Santos", party: 3, table: "T9" },
      { name: "Huber", party: 2, table: "T2" },
    ],
  },
  {
    time: "19:00",
    bookings: [
      { name: "Rossi", party: 6, table: "T12" },
      { name: "Nguyen", party: 2, table: "T3" },
    ],
  },
  {
    time: "19:30",
    bookings: [
      { name: "Keller", party: 6, table: "Terrace 3" },
      { name: "Weber", party: 4, table: "T8" },
      { name: "Laurent", party: 2, table: "T1" },
    ],
  },
];

export default function ScrollAreaStickyHeader() {
  return (
    <ScrollArea className="h-64 w-full max-w-md material-base">
      {slots.map(({ time, bookings }) => (
        <section key={time} aria-labelledby={`scroll-area-slot-${time.replace(":", "")}`}>
          <h3
            id={`scroll-area-slot-${time.replace(":", "")}`}
            className="sticky top-0 border-b border-divider bg-surface-secondary px-3 py-1.5 text-label-12 text-content-secondary"
          >
            {time}
          </h3>
          <ul>
            {bookings.map((booking) => (
              <li key={booking.name} className="flex items-center gap-3 border-b border-divider px-3 py-2 text-label-14 last:border-b-0">
                <span className="flex-1 truncate">{booking.name}</span>
                <span className="w-20 text-content-secondary">party of {booking.party}</span>
                <span className="w-20 text-right">{booking.table}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </ScrollArea>
  );
}
