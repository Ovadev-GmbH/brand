import { Label, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-ovadev";

const plans = [
  { value: "starter", label: "Starter" },
  { value: "team", label: "Team" },
  { value: "scale", label: "Scale" },
];

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="team" aria-label="Plan" className="w-fit">
      {plans.map((plan) => (
        <div key={plan.value} className="flex items-center gap-3">
          <RadioGroupItem id={`radio-group-${plan.value}`} value={plan.value} />
          <Label htmlFor={`radio-group-${plan.value}`}>{plan.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
