import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-internal";

export default function TooltipDisabledButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<span tabIndex={0} className="inline-flex" />}>
          <Button disabled>Deploy to production</Button>
        </TooltipTrigger>
        <TooltipContent>Deploys are frozen until 2026-09-15 06:00 CEST</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
