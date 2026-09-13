import { Bubble, BubbleContent, Tooltip, TooltipContent, TooltipTrigger } from "@ovadev-gmbh/ui-januna";

export default function BubbleTooltip() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Bubble variant="muted">
        <Tooltip>
          <BubbleContent render={<TooltipTrigger />}>Is the terrace open tonight?</BubbleContent>
          <TooltipContent side="right">Sent Friday 12 September, 16:47</TooltipContent>
        </Tooltip>
      </Bubble>
      <Bubble align="end">
        <Tooltip>
          <BubbleContent render={<TooltipTrigger />}>Yes, from 18:00 until 22:30.</BubbleContent>
          <TooltipContent side="left">Sent Friday 12 September, 16:52</TooltipContent>
        </Tooltip>
      </Bubble>
    </div>
  );
}
