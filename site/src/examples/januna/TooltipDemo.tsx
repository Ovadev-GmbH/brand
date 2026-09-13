import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { PrinterIcon } from "@hugeicons/core-free-icons";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Print run sheet" />}>
          <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} />
        </TooltipTrigger>
        <TooltipContent>Print run sheet</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
