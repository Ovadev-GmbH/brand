import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-januna";

const areas = [
  { value: "inside", title: "Inside", description: "Beside the open kitchen, 14 tables." },
  { value: "terrace", title: "Terrace", description: "Heated, 8 tables, closes at 22:00." },
  { value: "bar", title: "Bar", description: "Walk-ins and parties of 2." },
];

export default function RadioGroupChoiceCard() {
  return (
    <RadioGroup defaultValue="terrace" aria-label="Seating area" className="w-full max-w-sm">
      {areas.map((area) => (
        <FieldLabel key={area.value} htmlFor={`radio-group-card-${area.value}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{area.title}</FieldTitle>
              <FieldDescription>{area.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem id={`radio-group-card-${area.value}`} value={area.value} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
