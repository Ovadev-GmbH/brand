import { DirectionProvider, Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-ovadev";

// A TICKETOVA ticket in Arabic: the arrow keys between the tabs follow the reading direction.
export default function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" lang="ar" className="w-full max-w-sm">
        <Tabs defaultValue="ticket" className="gap-3">
          <TabsList>
            <TabsTrigger value="ticket">التذكرة</TabsTrigger>
            <TabsTrigger value="receipt">الإيصال</TabsTrigger>
          </TabsList>
          <TabsContent value="ticket" className="flex items-center justify-between gap-4 text-label-13">
            <div className="flex flex-col gap-0.5">
              <bdi className="text-label-13-mono">T-2026-018231</bdi>
              <span className="text-label-12 text-content-secondary">
                صالحة في <bdi className="text-label-12-mono">2026-09-14</bdi>
              </span>
            </div>
            <bdi className="text-label-13-mono">CHF 8.00</bdi>
          </TabsContent>
          <TabsContent value="receipt" className="flex items-center justify-between gap-4 text-label-13">
            <span>
              تم الدفع في <bdi className="text-label-13-mono">2026-09-13</bdi>
            </span>
            <bdi className="text-label-13-mono">CHF 8.00</bdi>
          </TabsContent>
        </Tabs>
      </div>
    </DirectionProvider>
  );
}
