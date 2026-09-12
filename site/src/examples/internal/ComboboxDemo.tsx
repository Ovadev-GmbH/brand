import * as React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  Label,
  useComboboxAnchor,
} from "@ovadev-gmbh/ui-internal";

const tenants = [
  "acme-gmbh",
  "bergwerk-ag",
  "cloudnine",
  "delta-logistics",
  "eisenhof",
  "fabrik-zwei",
];

const labels = ["billing", "p1", "migration", "trial", "churn-risk", "enterprise"];

export default function ComboboxDemo() {
  const [tenant, setTenant] = React.useState<string | null>(null);
  const [selected, setSelected] = React.useState<string[]>(["billing"]);
  const anchor = useComboboxAnchor();

  return (
    <div className="grid w-full max-w-xl gap-3">
      <div className="grid gap-2">
        <Label htmlFor="combobox-tenant">Tenant</Label>
        <Combobox items={tenants} value={tenant} onValueChange={setTenant}>
          <ComboboxInput
            id="combobox-tenant"
            placeholder="Search tenants"
            showClear
            className="w-64"
          />
          <ComboboxContent>
            <ComboboxEmpty>No tenant matches.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  <span className="text-label-13-mono">{item}</span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="combobox-labels">Ticket labels</Label>
        <Combobox items={labels} multiple value={selected} onValueChange={setSelected}>
          <ComboboxChips ref={anchor}>
            <ComboboxValue>
              {(value: string[]) => (
                <React.Fragment>
                  {value.map((label) => (
                    <ComboboxChip key={label}>{label}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput id="combobox-labels" placeholder="Add a label…" />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No matching label.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </div>
  );
}
