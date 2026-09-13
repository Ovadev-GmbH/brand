import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

const groups = [
  { value: "confirmed", label: "Confirmed", count: 18, text: "18 bookings still to arrive, the next at 19:00." },
  { value: "seated", label: "Seated", count: 9, text: "9 parties at their tables, 31 covers." },
  { value: "no-show", label: "No-show", count: 2, text: "Huber and Graf, both past 15 minutes late." },
  { value: "cancelled", label: "Cancelled", count: 3, text: "1 after the deadline, deposit of CHF 80.00 kept." },
];

export default function TabsWithCount() {
  return (
    <Tabs defaultValue="confirmed" className="w-full max-w-lg">
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
