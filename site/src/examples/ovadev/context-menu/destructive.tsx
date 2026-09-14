import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { CopyIcon, PencilIcon, RefreshCwIcon, Trash2Icon } from "lucide-react";

export default function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 flex-col items-center justify-center gap-1 border border-dashed border-divider-strong">
        <span className="text-label-13">Press kit</span>
        <span className="text-label-12-mono text-content-tertiary">ovadev-presskit-2026.zip</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <CopyIcon />
          Copy link
        </ContextMenuItem>
        <ContextMenuItem>
          <PencilIcon />
          Rename
        </ContextMenuItem>
        <ContextMenuItem>
          <RefreshCwIcon />
          Replace file
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2Icon />
          Delete file
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
