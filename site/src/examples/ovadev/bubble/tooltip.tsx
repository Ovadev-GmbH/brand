import { Bubble, BubbleContent, Tooltip, TooltipContent, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function BubbleTooltip() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Bubble variant="muted">
        <Tooltip>
          <BubbleContent render={<TooltipTrigger />}>Is the season opening on 2027-05-09 still planned?</BubbleContent>
          <TooltipContent side="right">
            Sent <span className="text-label-12-mono">2026-09-12 16:47 CEST</span>
          </TooltipContent>
        </Tooltip>
      </Bubble>
      <Bubble align="end">
        <Tooltip>
          <BubbleContent render={<TooltipTrigger />}>Yes, 09:00, the shop opens at 06:00 the same day.</BubbleContent>
          <TooltipContent side="left">
            Sent <span className="text-label-12-mono">2026-09-12 16:52 CEST</span>
          </TooltipContent>
        </Tooltip>
      </Bubble>
    </div>
  );
}
