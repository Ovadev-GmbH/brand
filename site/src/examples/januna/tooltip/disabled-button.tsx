import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-januna";

export default function TooltipDisabledButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <span
              tabIndex={0}
              className="inline-flex rounded-regular outline-none focus-visible:ring-1 focus-visible:ring-brand-bright"
            />
          }
        >
          <Button disabled>Seat party</Button>
        </TooltipTrigger>
        <TooltipContent>Table 12 is still occupied by the 18:00 party</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
