import * as React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Clock01Icon, Delete02Icon, Edit02Icon } from "@hugeicons/core-free-icons";

export default function ContextMenuDemo() {
  const [status, setStatus] = React.useState("available");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 w-full max-w-sm items-center justify-center rounded-3xl border border-dashed text-label-13 text-content-secondary">
        Right-click Table 12
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>Table 12 · Terrace · 4 seats</ContextMenuLabel>
          <ContextMenuItem>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
            New booking here
            <ContextMenuShortcut>N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <HugeiconsIcon icon={Edit02Icon} strokeWidth={2} />
            Edit table
            <ContextMenuShortcut>E</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
              Assign to shift
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Lunch · 11:30 to 14:30</ContextMenuItem>
              <ContextMenuItem>Dinner · 18:00 to 23:00</ContextMenuItem>
              <ContextMenuItem>Both shifts</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={status} onValueChange={setStatus}>
          <ContextMenuLabel>Status</ContextMenuLabel>
          <ContextMenuRadioItem value="available">Available</ContextMenuRadioItem>
          <ContextMenuRadioItem value="reserved">Reserved</ContextMenuRadioItem>
          <ContextMenuRadioItem value="blocked">Blocked</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
          Remove table
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
