import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";
import { RefreshCwIcon } from "lucide-react";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Redeploy" />}>
          <RefreshCwIcon />
        </TooltipTrigger>
        <TooltipContent>Redeploy</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
