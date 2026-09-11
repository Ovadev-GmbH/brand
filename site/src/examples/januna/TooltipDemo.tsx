import {
  Button,
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, PrinterIcon, Table01Icon } from "@hugeicons/core-free-icons";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
            New booking
          </TooltipTrigger>
          <TooltipContent>
            Add a booking to tonight&apos;s shift <Kbd>N</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} />
            Print run sheet
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Every booking for the shift, ordered by arrival time
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
            Block table
          </TooltipTrigger>
          <TooltipContent side="right">
            Keeps Table 12 out of online booking until you unblock it
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
