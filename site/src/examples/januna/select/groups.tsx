import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-januna";

const floor = [
  { label: "Lea Brunner", value: "lea" },
  { label: "Marco Rossi", value: "marco" },
  { label: "Sara Meier", value: "sara" },
];
const bar = [
  { label: "Jonas Weber", value: "jonas" },
  { label: "Elif Yilmaz", value: "elif" },
];

export default function SelectGroups() {
  return (
    <Select items={[...floor, ...bar]}>
      <SelectTrigger className="w-56" aria-label="Server for T12">
        <SelectValue placeholder="Assign a server" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Floor</SelectLabel>
          {floor.map((person) => (
            <SelectItem key={person.value} value={person.value}>
              {person.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Bar</SelectLabel>
          {bar.map((person) => (
            <SelectItem key={person.value} value={person.value}>
              {person.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
