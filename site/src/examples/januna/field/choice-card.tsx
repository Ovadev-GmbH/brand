import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-januna";

const tables = [
  { value: "t12", name: "T12", where: "Dining room, by the window", seats: 6 },
  { value: "terrace-3", name: "Terrace 3", where: "Heated terrace", seats: 8 },
  { value: "t20", name: "T20", where: "Back room, quiet", seats: 10 },
];

export default function FieldChoiceCard() {
  return (
    <FieldSet className="w-96">
      <FieldLegend variant="label">Table for the party of 6 at 19:30</FieldLegend>
      <RadioGroup defaultValue="t12">
        {tables.map((table) => (
          <FieldLabel key={table.value} htmlFor={`field-choice-${table.value}`}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{table.name}</FieldTitle>
                <FieldDescription>
                  {table.where}, seats <span className="text-label-13-mono">{table.seats}</span>
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value={table.value} id={`field-choice-${table.value}`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  );
}
