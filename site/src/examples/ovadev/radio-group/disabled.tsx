import { Field, FieldLabel, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-ovadev";

const plans = [
  { value: "starter", label: "Starter", price: "CHF 49.00" },
  { value: "team", label: "Team", price: "CHF 190.00" },
  { value: "scale", label: "Scale", price: "CHF 790.00" },
  { value: "legacy", label: "Legacy, closed to new tenants", price: "CHF 29.00", disabled: true },
];

export default function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="team" aria-label="Plan" className="w-full max-w-sm">
      {plans.map((plan) => (
        <Field key={plan.value} orientation="horizontal" data-disabled={plan.disabled || undefined}>
          <RadioGroupItem id={`radio-group-disabled-${plan.value}`} value={plan.value} disabled={plan.disabled} />
          <FieldLabel htmlFor={`radio-group-disabled-${plan.value}`}>
            {plan.label}
            <span className="ml-auto text-label-13-mono text-content-secondary">{plan.price}</span>
          </FieldLabel>
        </Field>
      ))}
    </RadioGroup>
  );
}
