import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function TabsControlled() {
  const [tab, setTab] = React.useState("invoices");

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Tabs value={tab} onValueChange={(value) => setTab(String(value))}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="api-keys">API keys</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-content-secondary">
          Team plan, 18 seats, hosted in ch-zrh-1.
        </TabsContent>
        <TabsContent value="invoices" className="text-content-secondary">
          INV-2026-0141 over CHF 390.00 is open.
        </TabsContent>
        <TabsContent value="api-keys" className="text-content-secondary">
          sk_live_b21c, last used 2026-09-12 08:41 UTC.
        </TabsContent>
      </Tabs>
      <span className="text-label-13-mono text-content-tertiary">/tenants/bergwerk-ag?tab={tab}</span>
    </div>
  );
}
