import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-ovadev";

const plans = [
  { label: "Starter", value: "starter" },
  { label: "Season", value: "season" },
  { label: "Venue", value: "venue" },
  { label: "Enterprise", value: "enterprise", disabled: true },
];

export default function SelectDisabled() {
  return (
    <div className="flex items-center gap-3">
      <Select items={plans} defaultValue="season" disabled>
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
      <Select items={plans} defaultValue="season">
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
