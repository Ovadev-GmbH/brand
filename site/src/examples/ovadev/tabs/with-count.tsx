import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

const groups = [
  { value: "new", label: "New", count: 3, text: "Gemeinde Hausen am Albis, Hallenbad Baar and Restaurant Seerose, all from this week." },
  { value: "answered", label: "Answered", count: 128, text: "The last answer went out 2026-09-02 to Lido Locarno." },
  { value: "spam", label: "Spam", count: 2, text: "Marked by philip@ova.dev, kept for 30 days." },
];

export default function TabsWithCount() {
  return (
    <Tabs defaultValue="new" className="w-full max-w-md">
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
