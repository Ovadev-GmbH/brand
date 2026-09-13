import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Field,
  FieldLabel,
} from "@ovadev-gmbh/ui-internal";

const tenants = ["acme-logistics", "bergwerk-ag", "helvetia-labs", "nordlicht-energie", "rheintal-bau", "seeblick-hotels"];

export default function ComboboxDemo() {
  return (
    <Field className="w-full max-w-64">
      <FieldLabel htmlFor="combobox-tenant">Tenant</FieldLabel>
      <Combobox items={tenants}>
        <ComboboxInput id="combobox-tenant" placeholder="Search tenants" className="w-full" />
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
    </Field>
  );
}
