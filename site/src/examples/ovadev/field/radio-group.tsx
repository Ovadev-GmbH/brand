import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-ovadev";

const languages = ["de-CH", "en"];

export default function FieldRadioGroup() {
  return (
    <FieldSet className="w-80">
      <FieldLegend variant="label">Site language</FieldLegend>
      <FieldDescription>The language ova.dev opens in. The switch in the footer changes it later.</FieldDescription>
      <RadioGroup defaultValue="de-CH">
        {languages.map((language) => (
          <Field key={language} orientation="horizontal">
            <RadioGroupItem value={language} id={`field-radio-${language}`} />
            <FieldLabel htmlFor={`field-radio-${language}`} className="text-label-13-mono">
              {language}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  );
}
