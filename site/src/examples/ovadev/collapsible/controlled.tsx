import * as React from "react";
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ovadev";

const events = [
  { time: "09:14:02", actor: "robin@ova.dev", action: "post.published" },
  { time: "09:11:47", actor: "beni@ova.dev", action: "page.updated" },
  { time: "08:58:30", actor: "philip@ova.dev", action: "job.opened" },
  { time: "08:40:12", actor: "system", action: "sitemap.rebuilt" },
  { time: "08:02:55", actor: "beni@ova.dev", action: "press_kit.updated" },
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
      <span className="text-label-13 text-content-secondary">Site changes, ova.dev, 2026-09-13 CEST</span>
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
        {open ? "Show fewer changes" : `Show ${events.length - shown} more changes`}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
