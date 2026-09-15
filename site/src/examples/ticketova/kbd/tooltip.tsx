import {
  Button,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ovadev-gmbh/ui-ticketova";
import { ArrowCounterClockwiseIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function KbdTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Roll back deployment" />}>
          <ArrowCounterClockwiseIcon />
        </TooltipTrigger>
        <TooltipContent>
          Roll back to dpl_9e02a
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
