import {
  Button,
  ButtonGroup,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ovadev";

const currencies = [
  { label: "CHF", value: "chf" },
  { label: "EUR", value: "eur" },
];

export default function ButtonGroupWithSelect() {
  return (
    <ButtonGroup className="w-80">
      <Select items={currencies} defaultValue="chf">
        <SelectTrigger aria-label="Currency">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((currency) => (
            <SelectItem key={currency.value} value={currency.value}>
              {currency.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input aria-label="Budget" className="text-right text-label-13-mono" defaultValue="15'000.00" />
      <Button variant="outline">Request quote</Button>
    </ButtonGroup>
  );
}
