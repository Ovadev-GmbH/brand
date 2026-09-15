import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ticketova";
import { ArrowsClockwiseIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Redeploy" />}>
          <ArrowsClockwiseIcon />
        </TooltipTrigger>
        <TooltipContent>Redeploy</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
