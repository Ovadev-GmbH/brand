import * as React from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@ovadev-gmbh/ui-ovadev";

const products = [
  { label: "TICKETOVA", value: "ticketova" },
  { label: "JANUNA", value: "januna" },
  { label: "Consulting", value: "consulting" },
  { label: "Something else", value: "other" },
];

export default function SelectAlignItem() {
  const [aligned, setAligned] = React.useState(true);

  return (
    <FieldGroup className="w-72">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="select-align-switch">Align item with trigger</FieldLabel>
          <FieldDescription>Off opens the list below the trigger.</FieldDescription>
        </FieldContent>
        <Switch id="select-align-switch" checked={aligned} onCheckedChange={setAligned} />
      </Field>
      <Select items={products} defaultValue="consulting">
        <SelectTrigger className="w-full" aria-label="Product">
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={aligned}>
          {products.map((product) => (
            <SelectItem key={product.value} value={product.value}>
              {product.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldGroup>
  );
}
