import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ticketova";
import { CopyIcon, PencilSimpleIcon, ArrowClockwiseIcon, TrashIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13">Reporting export</span>
        <span className="text-label-12-mono text-content-tertiary">sk_live_b21c…</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <CopyIcon />
          Copy key ID
        </ContextMenuItem>
        <ContextMenuItem>
          <PencilSimpleIcon />
          Rename
        </ContextMenuItem>
        <ContextMenuItem>
          <ArrowClockwiseIcon />
          Rotate
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon />
          Revoke key
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
