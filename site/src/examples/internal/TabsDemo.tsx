import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-internal";

export default function TabsDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="api-keys">API keys</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-content-secondary">
          acme-gmbh · Pro plan · 14 seats · eu-central-1
        </TabsContent>
        <TabsContent value="invoices" className="text-content-secondary">
          3 open invoices, last paid 2 Sep.
        </TabsContent>
        <TabsContent value="api-keys" className="text-content-secondary">
          2 active keys, 1 revoked this month.
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="logs">
        <TabsList variant="line">
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
        </TabsList>
        <TabsContent value="logs" className="text-content-secondary">
          Streaming from api-eu-1, last line 4s ago.
        </TabsContent>
        <TabsContent value="metrics" className="text-content-secondary">
          p99 latency 182 ms over the last hour.
        </TabsContent>
        <TabsContent value="deployments" className="text-content-secondary">
          #4821 on main, deployed 14:02.
        </TabsContent>
      </Tabs>
    </div>
  );
}
