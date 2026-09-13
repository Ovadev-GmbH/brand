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
} from "@ovadev-gmbh/ui-januna";

const shifts = [
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
];

export default function InputForm() {
  return (
    <form className="w-96" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-form-name">Name on booking</FieldLabel>
          <Input id="input-form-name" placeholder="Meier" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-form-phone">Phone</FieldLabel>
          <Input id="input-form-phone" type="tel" placeholder="+41 79 123 45 67" required />
          <FieldDescription>The reminder goes to this number at 10:00 on the day.</FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="input-form-shift">Shift</FieldLabel>
            <Select items={shifts} defaultValue="dinner">
              <SelectTrigger id="input-form-shift" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {shifts.map((shift) => (
                  <SelectItem key={shift.value} value={shift.value}>
                    {shift.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="input-form-party">Party size</FieldLabel>
            <Input id="input-form-party" type="number" min={1} max={12} defaultValue={6} />
          </Field>
        </div>
        <Field orientation="horizontal" className="justify-end">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Create booking</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
