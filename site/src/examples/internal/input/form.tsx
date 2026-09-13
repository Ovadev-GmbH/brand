import {
  Button,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-internal";

const plans = [
  { label: "Starter", value: "starter" },
  { label: "Team", value: "team" },
  { label: "Scale", value: "scale" },
];

const regions = [
  { label: "ch-zrh-1", value: "ch-zrh-1" },
  { label: "eu-central-1", value: "eu-central-1" },
];

export default function InputForm() {
  return (
    <form className="w-96" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-company">Company</FieldLabel>
          <Input id="form-company" placeholder="Acme Logistics AG" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Billing e-mail</FieldLabel>
          <Input id="form-email" type="email" placeholder="billing@acme.ch" required />
          <FieldDescription>Invoices go here, not to the account owner.</FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-plan">Plan</FieldLabel>
            <Select items={plans} defaultValue="team">
              <SelectTrigger id="form-plan" className="w-full">
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
          </Field>
          <Field>
            <FieldLabel htmlFor="form-region">Region</FieldLabel>
            <Select items={regions} defaultValue="ch-zrh-1">
              <SelectTrigger id="form-region" className="w-full text-label-13-mono">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    <span className="text-label-13-mono">{region.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field orientation="horizontal" className="justify-end">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Create tenant</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
