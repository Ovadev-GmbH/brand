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
} from "@ovadev-gmbh/ui-ovadev";

const snapPoints = ["18rem", 1];

const updates = [
  { at: "09:41", status: "Resolved", text: "Checkout error rate is back under 0.1%." },
  { at: "09:28", status: "Monitoring", text: "Rolled production back to dpl_7c21." },
  { at: "09:17", status: "Identified", text: "dpl_8a4f returns 502 on /checkout." },
  { at: "09:12", status: "Investigating", text: "acme-logistics reports failed payments." },
];

export default function DrawerSnapPoints() {
  return (
    <Drawer snapPoints={snapPoints} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>View incident</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>INC-2026-031</DrawerTitle>
          <DrawerDescription>Drag up for the whole timeline.</DrawerDescription>
        </DrawerHeader>
        <ol className="m-0 min-h-0 flex-1 list-none overflow-y-auto p-4">
          {updates.map((update) => (
            <li key={update.at} className="flex flex-col gap-0.5 border-b border-divider py-2.5 last:border-b-0">
              <span className="text-label-13">
                {update.status}. {update.text}
              </span>
              <span className="text-label-12-mono text-content-tertiary">2026-09-13 {update.at} UTC</span>
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
