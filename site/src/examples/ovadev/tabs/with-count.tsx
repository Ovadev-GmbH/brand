import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

const groups = [
  { value: "open", label: "Open", count: 3, text: "INV-2026-0142, INV-2026-0141 and INV-2026-0139, CHF 1'679.00 in total." },
  { value: "paid", label: "Paid", count: 128, text: "The last payment arrived 2026-09-02 for INV-2026-0136." },
  { value: "void", label: "Void", count: 2, text: "Voided by l.meier@ova.dev after a plan change." },
];

export default function TabsWithCount() {
  return (
    <Tabs defaultValue="open" className="w-full max-w-md">
      <TabsList>
        {groups.map((group) => (
          <TabsTrigger key={group.value} value={group.value}>
            {group.label}
            <span className="text-label-13-mono text-content-tertiary">{group.count}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {groups.map((group) => (
        <TabsContent key={group.value} value={group.value} className="text-content-secondary">
          {group.text}
        </TabsContent>
      ))}
    </Tabs>
  );
}
