import { Button, Popover, PopoverContent, PopoverTrigger } from "@ovadev-gmbh/ui-januna";

const sides = ["top", "right", "bottom", "left"] as const;

export default function PopoverSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" className="capitalize" />}>{side}</PopoverTrigger>
          <PopoverContent side={side} className="w-56">
            <p className="m-0 text-copy-14 text-content-secondary">
              <span className="text-content-primary">Terrace 3</span> has 4 seats and heaters from 19:00.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
