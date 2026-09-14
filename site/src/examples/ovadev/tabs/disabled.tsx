import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="ticketova">TICKETOVA</TabsTrigger>
        <TabsTrigger value="januna" disabled>
          JANUNA
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-content-secondary">
        Two products, built and run in Baar. JANUNA opens in 2027.
      </TabsContent>
      <TabsContent value="ticketova" className="text-content-secondary">
        Shop, admission control and reports for pools and venues.
      </TabsContent>
      <TabsContent value="januna" className="text-content-secondary">
        Till, kitchen displays and orders for restaurants.
      </TabsContent>
    </Tabs>
  );
}
