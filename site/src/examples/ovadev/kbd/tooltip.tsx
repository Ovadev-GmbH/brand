import {
  Button,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { RotateCcwIcon } from "lucide-react";

export default function KbdTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Undo the last edit" />}>
          <RotateCcwIcon />
        </TooltipTrigger>
        <TooltipContent>
          Undo the last edit
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
