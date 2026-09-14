import * as React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

const events = [
  { at: "16:44", what: "Rotated sk_live_4f9a…", who: "robin@ova.dev", ip: "185.12.64.3", system: false },
  { at: "16:30", what: "Renewed the TLS certificate", who: "system", ip: "", system: true },
  { at: "14:31", what: "Sent INV-2026-0142", who: "philip@ova.dev", ip: "185.12.64.9", system: false },
];

export default function ContextMenuCheckboxes() {
  const [showSystem, setShowSystem] = React.useState(true);
  const [showIps, setShowIps] = React.useState(false);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-[28rem] max-w-full material-base">
        <ul className="m-0 list-none p-0">
          {events
            .filter((e) => showSystem || !e.system)
            .map((e) => (
              <li key={e.at} className="flex items-center gap-3 border-b border-divider px-3 py-2 last:border-b-0">
                <span className="text-label-13-mono text-content-tertiary">{e.at}</span>
                <span className="text-label-13">{e.what}</span>
                <span className="ml-auto text-label-12-mono text-content-secondary">{showIps && e.ip ? e.ip : e.who}</span>
              </li>
            ))}
        </ul>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Show</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showSystem} onCheckedChange={setShowSystem}>
            System events
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showIps} onCheckedChange={setShowIps}>
            IP addresses
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
