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
} from "@ovadev-gmbh/ui-ovadev";

const plans = [
  { label: "TICKETOVA", value: "ticketova" },
  { label: "JANUNA", value: "januna" },
  { label: "Consulting", value: "consulting" },
];

const regions = [
  { label: "de-CH", value: "de-CH" },
  { label: "en-GB", value: "en-GB" },
];

export default function InputForm() {
  return (
    <form className="w-96" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-company">Company</FieldLabel>
          <Input id="form-company" placeholder="Strandbad Türlersee AG" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">E-mail</FieldLabel>
          <Input id="form-email" type="email" placeholder="info@tuerlersee.ch" required />
          <FieldDescription>We answer here, usually within a working day.</FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-plan">Product</FieldLabel>
            <Select items={plans} defaultValue="ticketova">
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
            <FieldLabel htmlFor="form-region">Language</FieldLabel>
            <Select items={regions} defaultValue="de-CH">
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
          <Button type="submit">Request a quote</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
