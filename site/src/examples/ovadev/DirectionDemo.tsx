import { DirectionProvider, Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

// A tenant's billing tabs in Arabic: the arrow keys between the tabs follow the reading direction.
export default function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" lang="ar" className="w-full max-w-sm">
        <Tabs defaultValue="invoices" className="gap-3">
          <TabsList>
            <TabsTrigger value="invoices">الفواتير</TabsTrigger>
            <TabsTrigger value="payments">المدفوعات</TabsTrigger>
          </TabsList>
          <TabsContent value="invoices" className="flex items-center justify-between gap-4 text-label-13">
            <div className="flex flex-col gap-0.5">
              <bdi className="text-label-13-mono">INV-2026-0142</bdi>
              <span className="text-label-12 text-content-secondary">
                تستحق في <bdi className="text-label-12-mono">2026-10-01</bdi>
              </span>
            </div>
            <bdi className="text-label-13-mono">CHF 1'240.00</bdi>
          </TabsContent>
          <TabsContent value="payments" className="flex items-center justify-between gap-4 text-label-13">
            <span>
              آخر دفعة في <bdi className="text-label-13-mono">2026-09-01</bdi>
            </span>
            <bdi className="text-label-13-mono">CHF 1'240.00</bdi>
          </TabsContent>
        </Tabs>
      </div>
    </DirectionProvider>
  );
}
