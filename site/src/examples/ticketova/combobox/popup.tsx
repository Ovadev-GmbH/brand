import {
  Button,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@ovadev-gmbh/ui-ticketova";

const tenants = ["acme-logistics", "bergwerk-ag", "helvetia-labs", "nordlicht-energie", "rheintal-bau", "seeblick-hotels"];

export default function ComboboxPopup() {
  return (
    <Combobox items={tenants} defaultValue="acme-logistics">
      <ComboboxTrigger render={<Button variant="outline" className="w-56 justify-between" />}>
        <span className="text-label-13-mono">
          <ComboboxValue />
        </span>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search tenants" aria-label="Search tenants" />
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
