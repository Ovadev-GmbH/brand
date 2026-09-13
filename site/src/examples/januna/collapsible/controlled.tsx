import { useState } from "react";
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-januna";

const arrivals = [
  { time: "19:00", guest: "Brunner", party: 4, table: "T7" },
  { time: "19:15", guest: "Rossi", party: 2, table: "T14" },
  { time: "19:30", guest: "Keller", party: 6, table: "T12" },
  { time: "19:45", guest: "Huber", party: 3, table: "T2" },
  { time: "20:00", guest: "Moreau", party: 8, table: "Terrace 3" },
];

function Row({ arrival }: { arrival: (typeof arrivals)[number] }) {
  return (
    <li className="flex items-center gap-4 border-b border-divider py-2 text-label-14">
      <span className="text-label-13-mono text-content-secondary">{arrival.time}</span>
      <span className="flex-1">{arrival.guest}</span>
      <span className="text-label-13-mono">{arrival.party}</span>
      <span className="w-20 text-right text-content-secondary">{arrival.table}</span>
    </li>
  );
}

export default function CollapsibleControlled() {
  const [open, setOpen] = useState(false);
  const shown = 2;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="flex w-full max-w-md flex-col gap-2">
      <span className="text-label-13 text-content-secondary">Next arrivals, dinner</span>
      <div>
        <ul className="flex flex-col border-t border-divider">
          {arrivals.slice(0, shown).map((a) => (
            <Row key={a.time} arrival={a} />
          ))}
        </ul>
        <CollapsibleContent>
          <ul className="flex flex-col">
            {arrivals.slice(shown).map((a) => (
              <Row key={a.time} arrival={a} />
            ))}
          </ul>
        </CollapsibleContent>
      </div>
      <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="self-start" />}>
        {open ? "Show fewer arrivals" : `Show ${arrivals.length - shown} more arrivals`}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
