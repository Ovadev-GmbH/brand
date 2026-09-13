import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function ContextMenuShortcuts() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 max-w-full flex-col items-center justify-center gap-1 material-base">
        <span className="text-label-14">Lina Brunner, party of 6</span>
        <span className="text-label-13-mono text-content-tertiary">20:15</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          Seat guests
          <ContextMenuShortcut>↵</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Edit booking
          <ContextMenuShortcut>E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Move to table
          <ContextMenuShortcut>M</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Send reminder
          <ContextMenuShortcut>⇧⌘R</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
