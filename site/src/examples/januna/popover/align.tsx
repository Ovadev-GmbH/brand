import { Button, Popover, PopoverContent, PopoverTrigger } from "@ovadev-gmbh/ui-januna";

const aligns = ["start", "center", "end"] as const;

export default function PopoverAlign() {
  return (
    <div className="flex items-center gap-2">
      {aligns.map((align) => (
        <Popover key={align}>
          <PopoverTrigger render={<Button variant="outline" size="sm" className="capitalize" />}>{align}</PopoverTrigger>
          <PopoverContent align={align}>
            <p className="m-0 text-copy-14 text-content-secondary">
              A deposit of <span className="text-label-14-mono text-content-primary">CHF 40.00</span> per guest is held
              until 24 hours before the booking.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
