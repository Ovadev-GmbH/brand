import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm flex-col items-center justify-center gap-1 rounded-regular border border-dashed border-divider-strong">
        <span className="text-label-14">Table 12</span>
        <span className="text-label-12 text-content-secondary">Right-click or long press</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>New booking here</ContextMenuItem>
        <ContextMenuItem>Seat a walk-in</ContextMenuItem>
        <ContextMenuItem>Block for the evening</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Remove from floor plan</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
