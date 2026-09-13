import * as React from "react";
import { Field, FieldLabel, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-internal";

const cycles = [
  { value: "monthly", label: "Monthly", amount: "CHF 190.00", per: "per month" },
  { value: "yearly", label: "Yearly", amount: "CHF 1'900.00", per: "per year" },
];

export default function RadioGroupControlled() {
  const [cycle, setCycle] = React.useState("monthly");
  const current = cycles.find((c) => c.value === cycle);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <RadioGroup value={cycle} onValueChange={(value) => setCycle(value as string)} aria-label="Billing cycle">
        {cycles.map((c) => (
          <Field key={c.value} orientation="horizontal">
            <RadioGroupItem id={`radio-group-controlled-${c.value}`} value={c.value} />
            <FieldLabel htmlFor={`radio-group-controlled-${c.value}`}>{c.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <div className="flex items-baseline justify-between border-t border-divider pt-3">
        <span className="text-label-13 text-content-secondary">Team plan, {current?.per}</span>
        <span className="text-label-13-mono">{current?.amount}</span>
      </div>
    </div>
  );
}
