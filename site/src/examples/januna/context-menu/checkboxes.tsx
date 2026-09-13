import * as React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

const parties = [
  { added: "19:42", name: "Keller, party of 2", phone: "+41 79 412 33 18", seated: true },
  { added: "19:48", name: "Brunner, party of 4", phone: "+41 78 205 91 44", seated: false },
  { added: "19:55", name: "Haddad, party of 3", phone: "+41 76 330 12 07", seated: false },
];

export default function ContextMenuCheckboxes() {
  const [showSeated, setShowSeated] = React.useState(true);
  const [showPhones, setShowPhones] = React.useState(false);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-[28rem] max-w-full material-base">
        <ul className="m-0 list-none p-0">
          {parties
            .filter((p) => showSeated || !p.seated)
            .map((p) => (
              <li key={p.added} className="flex items-center gap-3 border-b border-divider px-4 py-2.5 last:border-b-0">
                <span className="text-label-13-mono text-content-tertiary">{p.added}</span>
                <span className="text-label-14">{p.name}</span>
                <span className={`ml-auto text-content-secondary ${showPhones ? "text-label-12-mono" : "text-label-12"}`}>
                  {showPhones ? p.phone : p.seated ? "Seated" : "Waiting"}
                </span>
              </li>
            ))}
        </ul>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Show</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showSeated} onCheckedChange={setShowSeated}>
            Seated parties
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showPhones} onCheckedChange={setShowPhones}>
            Phone numbers
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
