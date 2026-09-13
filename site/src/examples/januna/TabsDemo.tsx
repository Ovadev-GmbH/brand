import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="bookings" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="bookings">Bookings</TabsTrigger>
        <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
        <TabsTrigger value="floor">Floor</TabsTrigger>
      </TabsList>
      <TabsContent value="bookings" className="text-content-secondary">
        24 bookings tonight, 86 covers. The next party arrives at 19:00.
      </TabsContent>
      <TabsContent value="waitlist" className="text-content-secondary">
        4 parties are waiting, the longest for 25 minutes.
      </TabsContent>
      <TabsContent value="floor" className="text-content-secondary">
        9 of 14 tables are seated. T12 should be free again around 20:30.
      </TabsContent>
    </Tabs>
  );
}
