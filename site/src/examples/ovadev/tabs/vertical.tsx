import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

const sections = [
  { value: "general", label: "General", text: "Ovadev GmbH, Baar ZG, founded 2024. Three people, two products." },
  { value: "logo", label: "Logo", text: "The pixel O with the red block in the lower right. Never rounded, rotated or recoloured." },
  { value: "colours", label: "Colours", text: "Paper, ink and one red. The red appears once per screen and is never type." },
  { value: "type", label: "Type", text: "Geist for everything. Headings 900 above 30 px, 700 below." },
  { value: "motion", label: "Motion", text: "One axis, 260 ms. Reduced motion drops every duration to zero." },
];

export default function TabsVertical() {
  return (
    <Tabs orientation="vertical" defaultValue="colours" className="w-full max-w-xl gap-6">
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
