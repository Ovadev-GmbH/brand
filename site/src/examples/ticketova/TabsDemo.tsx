import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ticketova";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
        <TabsTrigger value="keys">API keys</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-content-secondary">
        Scale plan, <span className="text-label-13-mono">42</span> seats, hosted in{" "}
        <span className="text-label-13-mono">ch-zrh-1</span>.
      </TabsContent>
      <TabsContent value="invoices" className="text-content-secondary">
        <span className="text-label-13-mono">3</span> open invoices,{" "}
        <span className="text-label-13-mono">CHF 1&apos;240.00</span> due 2026-10-01.
      </TabsContent>
      <TabsContent value="keys" className="text-content-secondary">
        <span className="text-label-13-mono">2</span> active keys, last used at{" "}
        <span className="text-label-13-mono">14:02 UTC</span>.
      </TabsContent>
    </Tabs>
  );
}
