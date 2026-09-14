import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function TooltipDisabledButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<span tabIndex={0} className="inline-flex" />}>
          <Button disabled>Publish post</Button>
        </TooltipTrigger>
        <TooltipContent>The German translation is still missing</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
