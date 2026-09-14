import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ovadev";

const company = [
  { label: "ova.dev", value: "ova.dev" },
  { label: "status.ova.dev", value: "status.ova.dev" },
];
const products = [
  { label: "ticketova.ch", value: "ticketova.ch" },
  { label: "januna.ch", value: "januna.ch" },
];

export default function SelectGroups() {
  return (
    <Select items={[...company, ...products]}>
      <SelectTrigger className="w-48 text-label-13-mono" aria-label="Site">
        <SelectValue placeholder="Site" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Ovadev</SelectLabel>
          {company.map((site) => (
            <SelectItem key={site.value} value={site.value}>
              <span className="text-label-13-mono">{site.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Products</SelectLabel>
          {products.map((site) => (
            <SelectItem key={site.value} value={site.value}>
              <span className="text-label-13-mono">{site.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
