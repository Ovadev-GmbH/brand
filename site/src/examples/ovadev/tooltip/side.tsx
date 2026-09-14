import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";

const sides = ["top", "right", "bottom", "left"] as const;

export default function TooltipSide() {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-2">
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline" className="capitalize" />}>{side}</TooltipTrigger>
            <TooltipContent side={side}>Last published 2026-09-13 14:02 CEST</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
