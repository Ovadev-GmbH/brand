import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";

const bookings = [
  { table: "Table 4", guest: "Amir Haddad", guests: 2, time: "18:00" },
  { table: "Table 12", guest: "Nora Keller", guests: 4, time: "19:30" },
  { table: "Table 9", guest: "Lina Brunner", guests: 6, time: "20:15" },
];

export default function DrawerDemo() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
        Tonight&apos;s shift
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Dinner shift</DrawerTitle>
            <DrawerDescription>
              Thursday, 18:00 to 23:00. Three servers on the floor, 22 covers
              booked so far.
            </DrawerDescription>
          </DrawerHeader>
          <ul className="grid gap-1 p-4">
            {bookings.map((booking) => (
              <li
                key={booking.table}
                className="flex items-center justify-between rounded-2xl bg-muted px-3 py-2"
              >
                <div className="grid">
                  <span className="font-medium">{booking.guest}</span>
                  <span className="text-xs text-muted-foreground">
                    {booking.table} · {booking.guests} guests
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {booking.time}
                </span>
              </li>
            ))}
          </ul>
          <DrawerFooter>
            <Button>Open floor plan</Button>
            <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
