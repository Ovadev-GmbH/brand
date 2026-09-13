import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-internal";

const tenants = [
  { slug: "acme-logistics", id: "ten_8f3a2c", name: "Acme Logistics AG" },
  { slug: "bergwerk-ag", id: "ten_1b77e0", name: "Bergwerk AG" },
  { slug: "helvetia-labs", id: "ten_c40d19", name: "Helvetia Labs SA" },
];

export default function CommandKeywords() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Slug, company or ID, e.g. ten_1b77" />
      <CommandList>
        <CommandEmpty>No tenant matches.</CommandEmpty>
        <CommandGroup heading="Tenants">
          {tenants.map((tenant) => (
            <CommandItem key={tenant.id} value={tenant.slug} keywords={[tenant.id, tenant.name]}>
              {tenant.slug}
              <span className="ml-auto text-label-12-mono text-content-tertiary">{tenant.id}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
