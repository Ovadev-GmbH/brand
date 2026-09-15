import {
  Button,
  Field,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-ticketova";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Seat limit</PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Seat limit</PopoverTitle>
          <PopoverDescription>Overrides the Scale plan default of 25 for acme-logistics.</PopoverDescription>
        </PopoverHeader>
        <Field>
          <FieldLabel htmlFor="popover-seats">Seats</FieldLabel>
          <Input id="popover-seats" type="number" min={1} defaultValue={40} className="text-label-13-mono" />
        </Field>
        <Button size="sm" className="self-end">
          Save limit
        </Button>
      </PopoverContent>
    </Popover>
  );
}
