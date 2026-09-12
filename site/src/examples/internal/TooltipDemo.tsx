import {
  Button,
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ovadev-gmbh/ui-internal";
import { RotateCcwIcon, RefreshCwIcon, KeyIcon } from "lucide-react";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-3">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <RefreshCwIcon />
            <span className="sr-only">Redeploy</span>
          </TooltipTrigger>
          <TooltipContent>
            Redeploy <Kbd>R</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <RotateCcwIcon />
            <span className="sr-only">Roll back</span>
          </TooltipTrigger>
          <TooltipContent>Roll back to previous build</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <KeyIcon />
            <span className="sr-only">Rotate API key</span>
          </TooltipTrigger>
          <TooltipContent side="bottom">Rotate API key</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
