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

const lines = [
  "Rendering the September issue in DE and EN",
  "Inlining 4 images, 312 KB",
  "Personalising 1'204 e-mails",
  "Checking 1'204 addresses against the unsubscribe list",
  "Signing with DKIM for ova.dev",
  "Opening 3 connections to the mail provider",
  ...Array.from({ length: 12 }, (_, i) => `Sent batch ${String(i + 1).padStart(2, "0")} of 12, 100 e-mails`),
  "Sent 1'204 e-mails",
  "Delivered 1'198",
  "Bounced 6, addresses marked",
  "Recording the send in the archive",
  "Updating the newsletter page on ova.dev",
  "Closing connections",
  "Issue sent",
];

export default function DrawerScrollableContent() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Show send log</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Send log</DrawerTitle>
          <DrawerDescription>The September issue, 2026-09-13.</DrawerDescription>
        </DrawerHeader>
        <ol className="m-0 my-4 min-h-0 flex-1 list-none overflow-y-auto border-y border-divider px-4 py-2">
          {lines.map((line, i) => (
            <li key={line} className="flex gap-3 py-0.5 text-label-12-mono">
              <span className="text-content-tertiary">08:00:{String(i * 2).padStart(2, "0")}</span>
              <span>{line}</span>
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
