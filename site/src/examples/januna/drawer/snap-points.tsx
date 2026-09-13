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

const snapPoints = ["18rem", 1];

const waitlist = [
  { name: "Keller", party: 2, quoted: "15 min", added: "19:42" },
  { name: "Brunner", party: 4, quoted: "25 min", added: "19:48" },
  { name: "Haddad", party: 3, quoted: "30 min", added: "19:55" },
  { name: "Meier", party: 6, quoted: "45 min", added: "19:58" },
];

export default function DrawerSnapPoints() {
  return (
    <Drawer snapPoints={snapPoints} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Waitlist</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Waitlist</DrawerTitle>
          <DrawerDescription>4 parties, 15 guests. Drag up for the whole list.</DrawerDescription>
        </DrawerHeader>
        <ol className="m-0 min-h-0 flex-1 list-none overflow-y-auto p-4">
          {waitlist.map((party) => (
            <li key={party.name} className="flex items-center justify-between gap-4 border-b border-divider py-3 last:border-b-0">
              <span className="flex flex-col gap-0.5">
                <span className="text-label-14">
                  {party.name}, party of {party.party}
                </span>
                <span className="text-label-12 text-content-tertiary">Quoted {party.quoted}</span>
              </span>
              <span className="text-label-13-mono text-content-secondary">{party.added}</span>
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
