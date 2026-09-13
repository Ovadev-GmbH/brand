import {
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons";

export default function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <HugeiconsIcon icon={FilterHorizontalIcon} strokeWidth={2} data-icon="inline-start" />
        Party size
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80">
        <PopoverHeader>
          <PopoverTitle>Filter by party size</PopoverTitle>
          <PopoverDescription>Tonight&apos;s bookings between the two sizes, both included.</PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="popover-form-min">From</FieldLabel>
            <Input id="popover-form-min" type="number" min={1} className="text-label-14-mono" defaultValue={4} />
          </Field>
          <Field>
            <FieldLabel htmlFor="popover-form-max">To</FieldLabel>
            <Input id="popover-form-max" type="number" min={1} className="text-label-14-mono" defaultValue={8} />
          </Field>
        </FieldGroup>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm">
            Clear
          </Button>
          <Button size="sm">Apply filter</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
