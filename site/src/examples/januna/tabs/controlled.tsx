import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

export default function TabsControlled() {
  const [tab, setTab] = useState("waitlist");

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Tabs value={tab} onValueChange={(value) => setTab(String(value))}>
        <TabsList>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
          <TabsTrigger value="floor">Floor plan</TabsTrigger>
        </TabsList>
        <TabsContent value="bookings" className="text-content-secondary">
          24 bookings for dinner, 86 covers.
        </TabsContent>
        <TabsContent value="waitlist" className="text-content-secondary">
          Graf, party of 3, waiting since 18:40.
        </TabsContent>
        <TabsContent value="floor" className="text-content-secondary">
          T12 frees up at 20:45.
        </TabsContent>
      </Tabs>
      <span className="text-label-13-mono text-content-tertiary">/tonight?tab={tab}</span>
    </div>
  );
}
