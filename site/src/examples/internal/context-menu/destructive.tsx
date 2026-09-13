import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-internal";
import { CopyIcon, PencilIcon, RotateCwIcon, Trash2Icon } from "lucide-react";

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
          <PencilIcon />
          Rename
        </ContextMenuItem>
        <ContextMenuItem>
          <RotateCwIcon />
          Rotate
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2Icon />
          Revoke key
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
