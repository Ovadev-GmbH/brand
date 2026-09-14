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
} from "@ovadev-gmbh/ui-ovadev";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Reading time</PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Reading time</PopoverTitle>
          <PopoverDescription>Overrides the estimate of 6 min from the word count of this post.</PopoverDescription>
        </PopoverHeader>
        <Field>
          <FieldLabel htmlFor="popover-seats">Minutes</FieldLabel>
          <Input id="popover-seats" type="number" min={1} defaultValue={8} className="text-label-13-mono" />
        </Field>
        <Button size="sm" className="self-end">
          Save
        </Button>
      </PopoverContent>
    </Popover>
  );
}
