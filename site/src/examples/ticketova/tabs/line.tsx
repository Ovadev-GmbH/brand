import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ticketova";

export default function TabsLine() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <h2 className="text-heading-20">acme-logistics</h2>
      <Tabs defaultValue="deployments">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="audit">Audit log</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-content-secondary">
          Scale plan, 42 seats, hosted in ch-zrh-1.
        </TabsContent>
        <TabsContent value="deployments" className="text-content-secondary">
          4f8c2a9 on api-gateway, live since 09:14 UTC.
        </TabsContent>
        <TabsContent value="invoices" className="text-content-secondary">
          INV-2026-0142 over CHF 1'240.00, due 2026-09-30.
        </TabsContent>
        <TabsContent value="audit" className="text-content-secondary">
          12 events today, the last by r.markant@ova.dev.
        </TabsContent>
      </Tabs>
    </div>
  );
}
