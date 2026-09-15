import { Button, Popover, PopoverContent, PopoverTrigger } from "@ovadev-gmbh/ui-ticketova";

const sides = ["top", "right", "bottom", "left"] as const;

export default function PopoverSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" className="capitalize" />}>{side}</PopoverTrigger>
          <PopoverContent side={side} className="w-56">
            <p className="m-0 text-label-13 text-content-secondary">
              Region <span className="text-label-13-mono text-content-primary">ch-zrh-1</span>, 3 availability zones.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
