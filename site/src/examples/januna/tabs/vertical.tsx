import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

const sections = [
  { value: "general", label: "General", text: "Brasserie Lindenhof, Zurich. Bookings open 60 days ahead." },
  { value: "shifts", label: "Shifts", text: "Lunch from 11:30 to 14:30, dinner from 18:00 to 23:00." },
  { value: "tables", label: "Tables", text: "14 tables and 3 on the terrace, 110 covers in total." },
  { value: "deposits", label: "Deposits", text: "CHF 20.00 per guest for parties of 6 or more." },
  { value: "messages", label: "Messages", text: "Confirmation by email, a reminder by text 3 hours before." },
];

export default function TabsVertical() {
  return (
    <Tabs orientation="vertical" defaultValue="deposits" className="w-full max-w-xl gap-6">
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
