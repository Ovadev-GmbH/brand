import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13-mono">ovadev-logo.svg</span>
        <span className="text-label-12 text-content-secondary">Right-click or long press</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Open file</ContextMenuItem>
        <ContextMenuItem>Copy link</ContextMenuItem>
        <ContextMenuItem>Download</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Remove from press kit</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
