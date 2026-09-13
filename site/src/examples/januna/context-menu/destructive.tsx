import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, NoteEditIcon, Table01Icon } from "@hugeicons/core-free-icons";

export default function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 max-w-full flex-col items-center justify-center gap-1 material-base">
        <span className="text-label-14">Walk-in, party of 2</span>
        <span className="text-label-12 text-content-tertiary">Seated at T4 since 19:12</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
          Move to table
        </ContextMenuItem>
        <ContextMenuItem>
          <HugeiconsIcon icon={NoteEditIcon} strokeWidth={2} />
          Add note
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
          Remove walk-in
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
