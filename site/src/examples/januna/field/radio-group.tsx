import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-januna";

const deposits = [
  { value: "none", label: "No deposit" },
  { value: "25", label: "CHF 25.00 per guest" },
  { value: "50", label: "CHF 50.00 per guest" },
];

export default function FieldRadioGroup() {
  return (
    <FieldSet className="w-80">
      <FieldLegend variant="label">Deposit for parties of 6 or more</FieldLegend>
      <FieldDescription>Charged when the booking is made, returned if it is cancelled in time.</FieldDescription>
      <RadioGroup defaultValue="25">
        {deposits.map((deposit) => (
          <Field key={deposit.value} orientation="horizontal">
            <RadioGroupItem value={deposit.value} id={`field-radio-${deposit.value}`} />
            <FieldLabel htmlFor={`field-radio-${deposit.value}`}>{deposit.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  );
}
