import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

const sections = [
  { value: "general", label: "General", text: "Acme Logistics AG, slug acme-logistics, created 2024-03-11." },
  { value: "members", label: "Members", text: "42 seats, 3 of them admins. 2 invitations are open." },
  { value: "billing", label: "Billing", text: "Scale plan, invoiced monthly in CHF to billing@acme.ch." },
  { value: "api-keys", label: "API keys", text: "2 live keys and 1 test key. The oldest was rotated 2026-06-02." },
  { value: "webhooks", label: "Webhooks", text: "1 endpoint receiving invoice and deployment events." },
];

export default function TabsVertical() {
  return (
    <Tabs orientation="vertical" defaultValue="billing" className="w-full max-w-xl gap-6">
      <TabsList className="w-40">
        {sections.map((section) => (
          <TabsTrigger key={section.value} value={section.value}>
            {section.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {sections.map((section) => (
        <TabsContent key={section.value} value={section.value} className="flex flex-col gap-1">
          <h3 className="text-heading-16">{section.label}</h3>
          <p className="text-content-secondary">{section.text}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
}
