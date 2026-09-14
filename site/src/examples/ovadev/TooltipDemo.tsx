import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";
import { LinkIcon } from "lucide-react";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Copy link" />}>
          <LinkIcon />
        </TooltipTrigger>
        <TooltipContent>Copy link</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
