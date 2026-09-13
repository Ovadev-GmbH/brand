import {
  Button,
  ButtonGroup,
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

export default function ButtonGroupWithSelect() {
  return (
    <ButtonGroup className="w-96">
      <Select items={shifts} defaultValue="dinner">
        <SelectTrigger aria-label="Shift">
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
      <Input aria-label="Cover limit" inputMode="numeric" className="text-right" defaultValue="112" />
      <Button variant="outline">Set cover limit</Button>
    </ButtonGroup>
  );
}
