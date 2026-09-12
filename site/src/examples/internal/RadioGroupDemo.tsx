import { Label, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-internal";

const plans = [
  { value: "starter", label: "Starter", hint: "CHF 49 / mo" },
  { value: "team", label: "Team", hint: "CHF 190 / mo" },
  { value: "enterprise", label: "Enterprise", hint: "custom" },
  { value: "legacy", label: "Legacy", hint: "closed", disabled: true },
];

export default function RadioGroupDemo() {
  return (
    <RadioGroup aria-label="Plan" defaultValue="team" className="max-w-xl">
      {plans.map((plan) => (
        <div key={plan.value} className="flex items-center gap-3">
          <RadioGroupItem
            id={`plan-${plan.value}`}
            value={plan.value}
            disabled={plan.disabled}
          />
          <Label htmlFor={`plan-${plan.value}`}>
            {plan.label}
            <span className="text-label-12-mono text-content-secondary">{plan.hint}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
