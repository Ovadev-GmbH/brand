import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { PrinterIcon } from "@hugeicons/core-free-icons";

const names = [
  "Anna Meier",
  "Samuel Frei",
  "Elif Yilmaz",
  "Jonas Weber",
  "Lea Brunner",
  "David Huber",
  "Mia Schmid",
  "Noah Graf",
  "Laura Steiner",
  "Tim Baumann",
  "Sofia Rossi",
  "Leon Moser",
  "Emma Fischer",
  "Luca Bernasconi",
];

const waitlist = names.map((name, i) => ({
  name,
  party: [2, 4, 3, 6, 2, 5, 4][i % 7],
  since: `19:${String(2 + i * 4).padStart(2, "0")}`,
}));

export default function DialogStickyFooter() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Tonight&rsquo;s waitlist</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Waitlist</DialogTitle>
          <DialogDescription>14 parties waiting for dinner, in the order they arrived.</DialogDescription>
        </DialogHeader>
        <ul className="-mx-8 m-0 max-h-[50vh] list-none overflow-y-auto border-y border-divider p-0 px-8">
          {waitlist.map((entry) => (
            <li key={entry.since} className="flex items-baseline justify-between border-b border-divider py-3 last:border-b-0">
              <span className="text-label-14">
                {entry.name} <span className="text-content-secondary">· {entry.party} guests</span>
              </span>
              <span className="text-label-13-mono text-content-tertiary">since {entry.since}</span>
            </li>
          ))}
        </ul>
        <DialogFooter>
          <Button variant="outline">
            <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} data-icon="inline-start" />
            Print list
          </Button>
          <DialogClose render={<Button />}>Done</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
