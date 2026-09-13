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
} from "@ovadev-gmbh/ui-januna";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Covers limit</PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Covers for lunch</PopoverTitle>
          <PopoverDescription>Online booking closes once this many covers are taken. Walk-ins still come in.</PopoverDescription>
        </PopoverHeader>
        <Field>
          <FieldLabel htmlFor="popover-covers">Covers</FieldLabel>
          <Input id="popover-covers" type="number" min={0} defaultValue={40} className="text-label-14-mono" />
        </Field>
        <Button size="sm" className="self-end">
          Save limit
        </Button>
      </PopoverContent>
    </Popover>
  );
}
