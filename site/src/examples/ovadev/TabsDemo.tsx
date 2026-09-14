import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="shop" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="shop">Shop</TabsTrigger>
        <TabsTrigger value="entrance">Entrance</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="shop" className="text-content-secondary">
        <span className="text-label-13-mono">14</span> ticket types, on sale from{" "}
        <span className="text-label-13-mono">06:00</span> each day.
      </TabsContent>
      <TabsContent value="entrance" className="text-content-secondary">
        <span className="text-label-13-mono">3</span> scanners at Strandbad Türlersee,{" "}
        <span className="text-label-13-mono">1&apos;204</span> admissions today.
      </TabsContent>
      <TabsContent value="reports" className="text-content-secondary">
        <span className="text-label-13-mono">CHF 8&apos;410.00</span> today, updated at{" "}
        <span className="text-label-13-mono">14:02</span>.
      </TabsContent>
    </Tabs>
  );
}
