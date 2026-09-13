import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

const tables = ["T4 · 2 seats", "T9 · 6 seats", "T15 · 4 seats"];
const servers = ["Jonas Meier", "Sofia Rossi", "Luca Weber"];

export default function ContextMenuSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 max-w-full flex-col items-center justify-center gap-1 material-base">
        <span className="text-label-14">Terrace 3</span>
        <span className="text-label-12 text-content-tertiary">4 seats · booked at 19:30</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem>Open table</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Move booking to</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            {tables.map((table) => (
              <ContextMenuItem key={table}>{table}</ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Assign server</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            {servers.map((server) => (
              <ContextMenuItem key={server}>{server}</ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}
