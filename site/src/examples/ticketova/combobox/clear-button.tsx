import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-ticketova";

const tenants = ["acme-logistics", "bergwerk-ag", "helvetia-labs", "nordlicht-energie", "rheintal-bau", "seeblick-hotels"];

export default function ComboboxClearButton() {
  return (
    <Combobox items={tenants} defaultValue="bergwerk-ag">
      <ComboboxInput placeholder="Search tenants" aria-label="Tenant" showClear className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No tenant matches.</ComboboxEmpty>
        <ComboboxList>
          {(tenant: string) => (
            <ComboboxItem key={tenant} value={tenant}>
              <span className="text-label-13-mono">{tenant}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
