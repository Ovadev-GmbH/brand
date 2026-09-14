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
} from "@ovadev-gmbh/ui-ovadev";

const plans = [
  { value: "starter", name: "Starter", price: "49.00", members: "one point of sale" },
  { value: "season", name: "Season", price: "390.00", members: "up to 5 points of sale" },
  { value: "venue", name: "Venue", price: "1'240.00", members: "no limit on points of sale" },
];

export default function FieldChoiceCard() {
  return (
    <FieldSet className="w-96">
      <FieldLegend variant="label">TICKETOVA plan for Strandbad Türlersee</FieldLegend>
      <RadioGroup defaultValue="season">
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
