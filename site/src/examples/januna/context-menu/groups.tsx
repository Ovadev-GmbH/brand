import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function ContextMenuGroups() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 max-w-full flex-col items-center justify-center gap-1 material-base">
        <span className="text-label-14">Table 12</span>
        <span className="text-label-12 text-content-tertiary">Right-click the table</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>Table</ContextMenuLabel>
          <ContextMenuItem>Edit seats</ContextMenuItem>
          <ContextMenuItem>Block for tonight</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Booking at 19:30</ContextMenuLabel>
          <ContextMenuItem>Open booking</ContextMenuItem>
          <ContextMenuItem>Seat guests</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
