import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-internal";

const tenants = ["acme-logistics", "bergwerk-ag", "helvetia-labs", "rheintal-bau"];
const suspended = ["rheintal-bau"];

export default function ComboboxDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <Combobox items={tenants} defaultValue="helvetia-labs">
        <ComboboxInput aria-label="Tenant, locked" disabled className="w-64" />
        <ComboboxContent>
          <ComboboxList>
            {(tenant: string) => (
              <ComboboxItem key={tenant} value={tenant}>
                {tenant}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <Combobox items={tenants}>
        <ComboboxInput placeholder="Move invoice to tenant" aria-label="Tenant" className="w-64" />
        <ComboboxContent>
          <ComboboxEmpty>No tenant matches.</ComboboxEmpty>
          <ComboboxList>
            {(tenant: string) => (
              <ComboboxItem key={tenant} value={tenant} disabled={suspended.includes(tenant)}>
                <span className="text-label-13-mono">{tenant}</span>
                {suspended.includes(tenant) ? (
                  <span className="ml-auto text-label-12 text-content-tertiary">suspended</span>
                ) : null}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
