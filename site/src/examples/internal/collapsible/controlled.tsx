import * as React from "react";
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-internal";

const events = [
  { time: "09:14:02", actor: "r.markant@ova.dev", action: "plan.changed" },
  { time: "09:11:47", actor: "l.meier@ova.dev", action: "api_key.rotated" },
  { time: "08:58:30", actor: "r.markant@ova.dev", action: "member.invited" },
  { time: "08:40:12", actor: "system", action: "invoice.issued" },
  { time: "08:02:55", actor: "l.meier@ova.dev", action: "webhook.updated" },
];

function Row({ event }: { event: (typeof events)[number] }) {
  return (
    <li className="flex items-center gap-4 border-b border-divider py-2 text-label-13">
      <span className="text-label-13-mono text-content-secondary">{event.time}</span>
      <span className="flex-1 text-label-13-mono">{event.action}</span>
      <span className="text-content-secondary">{event.actor}</span>
    </li>
  );
}

export default function CollapsibleControlled() {
  const [open, setOpen] = React.useState(false);
  const shown = 2;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="flex w-full max-w-md flex-col gap-2">
      <span className="text-label-13 text-content-secondary">Audit log, acme-logistics, 2026-09-13 UTC</span>
      <div>
        <ul className="flex flex-col border-t border-divider">
          {events.slice(0, shown).map((event) => (
            <Row key={event.time} event={event} />
          ))}
        </ul>
        <CollapsibleContent>
          <ul className="flex flex-col">
            {events.slice(shown).map((event) => (
              <Row key={event.time} event={event} />
            ))}
          </ul>
        </CollapsibleContent>
      </div>
      <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="self-start" />}>
        {open ? "Show fewer events" : `Show ${events.length - shown} more events`}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
