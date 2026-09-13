import * as React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-internal";

type Tenant = { slug: string; plan: string; region: string };

const tenants: Tenant[] = [
  { slug: "acme-logistics", plan: "Scale", region: "ch-zrh-1" },
  { slug: "bergwerk-ag", plan: "Team", region: "eu-central-1" },
  { slug: "helvetia-labs", plan: "Starter", region: "ch-gva-1" },
];

export default function ComboboxControlled() {
  const [tenant, setTenant] = React.useState<Tenant | null>(tenants[0] ?? null);

  return (
    <div className="flex flex-col items-start gap-2">
      <Combobox
        items={tenants}
        value={tenant}
        onValueChange={setTenant}
        itemToStringLabel={(t: Tenant) => t.slug}
      >
        <ComboboxInput placeholder="Search tenants" aria-label="Tenant" className="w-64" />
        <ComboboxContent>
          <ComboboxEmpty>No tenant matches.</ComboboxEmpty>
          <ComboboxList>
            {(t: Tenant) => (
              <ComboboxItem key={t.slug} value={t}>
                <span className="text-label-13-mono">{t.slug}</span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <span className="text-label-13 text-content-secondary">
        {tenant ? (
          <>
            {tenant.plan} plan in <span className="text-label-13-mono">{tenant.region}</span>
          </>
        ) : (
          "No tenant chosen"
        )}
      </span>
    </div>
  );
}
