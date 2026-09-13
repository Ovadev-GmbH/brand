import {
  Button,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { UndoIcon } from "@hugeicons/core-free-icons";

export default function KbdTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Undo seating at T12" />}>
          <HugeiconsIcon icon={UndoIcon} strokeWidth={2} />
        </TooltipTrigger>
        <TooltipContent>
          Undo seating at T12
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
