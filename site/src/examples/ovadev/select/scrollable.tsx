import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-ovadev";

const cantons = [
  {
    region: "German-speaking",
    items: [
      ["ZH", "Zürich"],
      ["BE", "Bern"],
      ["LU", "Luzern"],
      ["ZG", "Zug"],
      ["SG", "St. Gallen"],
      ["AG", "Aargau"],
      ["BS", "Basel-Stadt"],
      ["TG", "Thurgau"],
    ],
  },
  {
    region: "French-speaking",
    items: [
      ["GE", "Genève"],
      ["VD", "Vaud"],
      ["NE", "Neuchâtel"],
      ["JU", "Jura"],
    ],
  },
  {
    region: "Italian-speaking and bilingual",
    items: [
      ["TI", "Ticino"],
      ["VS", "Valais"],
      ["FR", "Fribourg"],
      ["GR", "Graubünden"],
      ["BL", "Basel-Landschaft"],
    ],
  },
] as const;

const items = cantons.flatMap((group) => group.items.map(([code, name]) => ({ label: `${code} · ${name}`, value: code })));

export default function SelectScrollable() {
  return (
    <Select items={items} defaultValue="ZG">
      <SelectTrigger className="w-60" aria-label="Canton of the venue">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {cantons.map((group) => (
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
