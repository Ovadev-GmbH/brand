import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-internal";

const currencies = [
  {
    region: "Europe",
    items: [
      ["CHF", "Swiss franc"],
      ["EUR", "Euro"],
      ["GBP", "Pound sterling"],
      ["SEK", "Swedish krona"],
      ["NOK", "Norwegian krone"],
      ["DKK", "Danish krone"],
      ["PLN", "Polish złoty"],
      ["CZK", "Czech koruna"],
    ],
  },
  {
    region: "Americas",
    items: [
      ["USD", "US dollar"],
      ["CAD", "Canadian dollar"],
      ["MXN", "Mexican peso"],
      ["BRL", "Brazilian real"],
    ],
  },
  {
    region: "Asia and Pacific",
    items: [
      ["JPY", "Japanese yen"],
      ["SGD", "Singapore dollar"],
      ["HKD", "Hong Kong dollar"],
      ["AUD", "Australian dollar"],
      ["NZD", "New Zealand dollar"],
    ],
  },
] as const;

const items = currencies.flatMap((group) => group.items.map(([code, name]) => ({ label: `${code} · ${name}`, value: code })));

export default function SelectScrollable() {
  return (
    <Select items={items} defaultValue="CHF">
      <SelectTrigger className="w-60" aria-label="Invoice currency">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((group) => (
          <SelectGroup key={group.region}>
            <SelectLabel>{group.region}</SelectLabel>
            {group.items.map(([code, name]) => (
              <SelectItem key={code} value={code}>
                <span className="text-label-13-mono">{code}</span>
                <span className="text-content-secondary">{name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
