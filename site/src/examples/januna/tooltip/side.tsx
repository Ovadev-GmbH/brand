import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-januna";

const sides = ["top", "right", "bottom", "left"] as const;

export default function TooltipSide() {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-2">
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline" className="capitalize" />}>{side}</TooltipTrigger>
            <TooltipContent side={side}>Terrace 3 was last seated at 19:42</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
