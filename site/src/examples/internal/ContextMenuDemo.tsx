import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13-mono">INV-2026-0142</span>
        <span className="text-label-12 text-content-secondary">Right-click or long press</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Open invoice</ContextMenuItem>
        <ContextMenuItem>Copy invoice number</ContextMenuItem>
        <ContextMenuItem>Download PDF</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Void invoice</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
