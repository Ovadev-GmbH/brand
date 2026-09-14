import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function TabsLine() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <h2 className="text-heading-20">Strandbad Türlersee</h2>
      <Tabs defaultValue="season">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="season">Season</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-content-secondary">
          Gemeinde Hausen am Albis, on TICKETOVA since 2025.
        </TabsContent>
        <TabsContent value="season" className="text-content-secondary">
          2026-05-09 to 2026-09-13, 48'212 tickets sold.
        </TabsContent>
        <TabsContent value="tickets" className="text-content-secondary">
          14 ticket types, day ticket CHF 8.00.
        </TabsContent>
        <TabsContent value="devices" className="text-content-secondary">
          3 scanners, all online, last seen 14:02.
        </TabsContent>
      </Tabs>
    </div>
  );
}
