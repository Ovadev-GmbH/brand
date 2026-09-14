import {
  Field,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ovadev";

const roles = [
  { label: "Owner", value: "owner" },
  { label: "Admin", value: "admin" },
  { label: "Billing", value: "billing" },
  { label: "Read only", value: "read-only" },
];

export default function SelectDemo() {
  return (
    <Field className="w-full max-w-48">
      <FieldLabel htmlFor="select-role">Role</FieldLabel>
      <Select items={roles}>
        <SelectTrigger id="select-role" className="w-full">
          <SelectValue placeholder="Choose a role" />
        </SelectTrigger>
        <SelectContent>
          {roles.map((role) => (
            <SelectItem key={role.value} value={role.value}>
              {role.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
