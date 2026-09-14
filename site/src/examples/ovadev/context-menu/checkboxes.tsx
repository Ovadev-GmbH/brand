import * as React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

const entries = [
  { at: "16:44", what: "Published Pool season 2026", who: "robin@ova.dev", lang: "en", system: false },
  { at: "16:30", what: "Renewed the ova.dev certificate", who: "system", lang: "", system: true },
  { at: "14:31", what: "Answered the request from Türlersee", who: "philip@ova.dev", lang: "de-CH", system: false },
];

export default function ContextMenuCheckboxes() {
  const [showSystem, setShowSystem] = React.useState(true);
  const [showLangs, setShowLangs] = React.useState(false);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-[28rem] max-w-full material-base">
        <ul className="m-0 list-none p-0">
          {entries
            .filter((e) => showSystem || !e.system)
            .map((e) => (
              <li key={e.at} className="flex items-center gap-3 border-b border-divider px-3 py-2 last:border-b-0">
                <span className="text-label-13-mono text-content-tertiary">{e.at}</span>
                <span className="text-label-13">{e.what}</span>
                <span className="ml-auto text-label-12-mono text-content-secondary">{showLangs && e.lang ? e.lang : e.who}</span>
              </li>
            ))}
        </ul>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Show</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showSystem} onCheckedChange={setShowSystem}>
            System entries
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showLangs} onCheckedChange={setShowLangs}>
            Languages
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
