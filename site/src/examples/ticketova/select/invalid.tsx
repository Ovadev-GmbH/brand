import {
  Field,
  FieldError,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ticketova";

const plans = [
  { label: "Starter", value: "starter" },
  { label: "Team", value: "team" },
  { label: "Scale", value: "scale" },
];

export default function SelectInvalid() {
  return (
    <Field data-invalid className="w-56">
      <FieldLabel htmlFor="select-invalid-plan">Plan</FieldLabel>
      <Select items={plans}>
        <SelectTrigger id="select-invalid-plan" className="w-full" aria-invalid>
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent>
          {plans.map((plan) => (
            <SelectItem key={plan.value} value={plan.value}>
              {plan.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError>Choose a plan before creating the tenant.</FieldError>
    </Field>
  );
}
