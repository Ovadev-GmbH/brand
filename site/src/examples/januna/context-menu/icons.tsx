import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Message01Icon, NoteEditIcon, UserIcon } from "@hugeicons/core-free-icons";

export default function ContextMenuIcons() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-80 max-w-full flex-col items-center justify-center gap-1 material-base">
        <span className="text-label-14">Nora Keller</span>
        <span className="text-label-12 text-content-tertiary">Party of 4 at 19:30</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
          Call guest
        </ContextMenuItem>
        <ContextMenuItem>
          <HugeiconsIcon icon={Message01Icon} strokeWidth={2} />
          Send SMS
        </ContextMenuItem>
        <ContextMenuItem>
          <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
          Open profile
        </ContextMenuItem>
        <ContextMenuItem>
          <HugeiconsIcon icon={NoteEditIcon} strokeWidth={2} />
          Add note
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
