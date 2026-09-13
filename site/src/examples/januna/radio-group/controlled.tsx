import * as React from "react";
import { Field, FieldLabel, RadioGroup, RadioGroupItem } from "@ovadev-gmbh/ui-januna";

const deposits = [
  { value: "0", label: "No deposit" },
  { value: "20", label: "CHF 20.00 per guest" },
  { value: "50", label: "CHF 50.00 per guest" },
];

const party = 6;

export default function RadioGroupControlled() {
  const [deposit, setDeposit] = React.useState("20");
  const total = (Number(deposit) * party).toFixed(2);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <RadioGroup value={deposit} onValueChange={(value) => setDeposit(value as string)} aria-label="Deposit">
        {deposits.map((d) => (
          <Field key={d.value} orientation="horizontal">
            <RadioGroupItem id={`radio-group-controlled-${d.value}`} value={d.value} />
            <FieldLabel htmlFor={`radio-group-controlled-${d.value}`}>{d.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <div className="flex items-baseline justify-between border-t border-divider pt-3">
        <span className="text-label-13 text-content-secondary">Party of {party}, paid when booking</span>
        <span className="text-label-13-mono">CHF {total}</span>
      </div>
    </div>
  );
}
