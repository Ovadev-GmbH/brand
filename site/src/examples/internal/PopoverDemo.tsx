import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function PopoverDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Adjust seat limit
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Seat limit</PopoverTitle>
            <PopoverDescription>
              Overrides the Scale plan default of 25 for this tenant.
            </PopoverDescription>
          </PopoverHeader>
          <div className="grid gap-1.5">
            <Label htmlFor="popover-seats">Seats</Label>
            <Input id="popover-seats" type="number" defaultValue={40} />
          </div>
          <Button size="sm" className="self-end">
            Apply
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
