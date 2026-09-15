import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ticketova";

const switzerland = [
  { label: "ch-zrh-1", value: "ch-zrh-1" },
  { label: "ch-gva-1", value: "ch-gva-1" },
];
const europe = [
  { label: "eu-central-1", value: "eu-central-1" },
  { label: "eu-west-1", value: "eu-west-1" },
];

export default function SelectGroups() {
  return (
    <Select items={[...switzerland, ...europe]}>
      <SelectTrigger className="w-48 text-label-13-mono" aria-label="Region">
        <SelectValue placeholder="Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Switzerland</SelectLabel>
          {switzerland.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              <span className="text-label-13-mono">{region.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>European Union</SelectLabel>
          {europe.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              <span className="text-label-13-mono">{region.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
