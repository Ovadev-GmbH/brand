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
} from "@ovadev-gmbh/ui-ovadev";
import { ListFilterIcon } from "lucide-react";

export default function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <ListFilterIcon data-icon="inline-start" />
        Amount
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80">
        <PopoverHeader>
          <PopoverTitle>Filter by amount</PopoverTitle>
          <PopoverDescription>Invoices between the two amounts, in CHF.</PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="popover-form-min">From</FieldLabel>
            <Input id="popover-form-min" className="text-right text-label-13-mono" inputMode="decimal" defaultValue="500.00" />
          </Field>
          <Field>
            <FieldLabel htmlFor="popover-form-max">To</FieldLabel>
            <Input id="popover-form-max" className="text-right text-label-13-mono" inputMode="decimal" defaultValue="5'000.00" />
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
