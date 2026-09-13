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
} from "@ovadev-gmbh/ui-internal";

const plans = [
  { value: "starter", name: "Starter", price: "49.00", members: "up to 3 members" },
  { value: "team", name: "Team", price: "390.00", members: "up to 10 members" },
  { value: "scale", name: "Scale", price: "1'240.00", members: "no member limit" },
];

export default function FieldChoiceCard() {
  return (
    <FieldSet className="w-96">
      <FieldLegend variant="label">Plan for helvetia-labs</FieldLegend>
      <RadioGroup defaultValue="team">
        {plans.map((plan) => (
          <FieldLabel key={plan.value} htmlFor={`field-choice-${plan.value}`}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{plan.name}</FieldTitle>
                <FieldDescription>
                  <span className="text-label-13-mono">CHF {plan.price}</span> a month, {plan.members}
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value={plan.value} id={`field-choice-${plan.value}`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  );
}
