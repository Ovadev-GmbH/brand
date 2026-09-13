import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-internal";

const plans = [
  { label: "Starter", value: "starter" },
  { label: "Team", value: "team" },
  { label: "Scale", value: "scale" },
  { label: "Enterprise", value: "enterprise", disabled: true },
];

export default function SelectDisabled() {
  return (
    <div className="flex items-center gap-3">
      <Select items={plans} defaultValue="team" disabled>
        <SelectTrigger className="w-40" aria-label="Plan, locked">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {plans.map((plan) => (
            <SelectItem key={plan.value} value={plan.value}>
              {plan.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={plans} defaultValue="team">
        <SelectTrigger className="w-40" aria-label="Plan">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {plans.map((plan) => (
            <SelectItem key={plan.value} value={plan.value} disabled={plan.disabled}>
              {plan.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
