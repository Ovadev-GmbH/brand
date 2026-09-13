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

const guests = ["Amir Haddad", "Nora Keller", "Lina Brunner", "Jonas Meier", "Sofia Rossi", "Luca Weber"];

const bookings = Array.from({ length: 24 }, (_, i) => {
  const minutes = 18 * 60 + i * 10;
  return {
    time: `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`,
    guest: guests[i % guests.length],
    party: 2 + (i % 5),
    table: `T${((i * 7) % 20) + 1}`,
  };
});

export default function DrawerScrollableContent() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Run sheet</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Run sheet</DrawerTitle>
          <DrawerDescription>Dinner shift, 24 bookings from 18:00.</DrawerDescription>
        </DrawerHeader>
        <ol className="m-0 my-4 min-h-0 flex-1 list-none overflow-y-auto border-y border-divider px-4 py-0">
          {bookings.map((b) => (
            <li key={b.time} className="flex items-center gap-3 border-b border-divider py-2.5 last:border-b-0">
              <span className="text-label-13-mono text-content-tertiary">{b.time}</span>
              <span className="text-label-14">{b.guest}</span>
              <span className="ml-auto text-label-13 text-content-secondary">
                {b.table} · {b.party} guests
              </span>
            </li>
          ))}
        </ol>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
