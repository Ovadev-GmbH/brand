import { ScrollArea, Separator } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { time: "17:30", guest: "Keller", party: 2 },
  { time: "17:45", guest: "Okafor", party: 4 },
  { time: "18:00", guest: "Lindqvist", party: 2 },
  { time: "18:00", guest: "Meier-Rossi", party: 6 },
  { time: "18:15", guest: "Brunner", party: 3 },
  { time: "18:30", guest: "Huber", party: 2 },
  { time: "18:45", guest: "Moreau", party: 5 },
  { time: "19:00", guest: "Baumann", party: 4 },
  { time: "19:00", guest: "Nakamura", party: 2 },
  { time: "19:15", guest: "Gerber", party: 8 },
  { time: "19:30", guest: "Haddad", party: 2 },
  { time: "19:45", guest: "Da Silva", party: 4 },
  { time: "20:00", guest: "Fischer", party: 3 },
  { time: "20:15", guest: "Weber", party: 2 },
  { time: "20:30", guest: "Schneider", party: 6 },
  { time: "21:00", guest: "Rossi", party: 2 },
];

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-60 w-72 material-base">
      <div className="p-4">
        <p className="mb-3 text-heading-14">Tonight's bookings</p>
        {bookings.map((booking, index) => (
          <div key={`${booking.time}-${booking.guest}`}>
            {index > 0 ? <Separator className="my-2" /> : null}
            <div className="flex items-center gap-3 text-label-14">
              <span className="text-label-13-mono text-content-secondary">{booking.time}</span>
              <span className="min-w-0 flex-1 truncate">{booking.guest}</span>
              <span className="text-label-13-mono text-content-secondary">
                {booking.party} guests
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
