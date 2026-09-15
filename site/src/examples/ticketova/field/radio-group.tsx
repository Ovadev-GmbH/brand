import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-ticketova";

const regions = ["ch-zrh-1", "eu-central-1"];

export default function FieldRadioGroup() {
  return (
    <FieldSet className="w-80">
      <FieldLegend variant="label">Region</FieldLegend>
      <FieldDescription>Where the data of bergwerk-ag is stored. It cannot move later.</FieldDescription>
      <RadioGroup defaultValue="ch-zrh-1">
        {regions.map((region) => (
          <Field key={region} orientation="horizontal">
            <RadioGroupItem value={region} id={`field-radio-${region}`} />
            <FieldLabel htmlFor={`field-radio-${region}`} className="text-label-13-mono">
              {region}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  );
}
