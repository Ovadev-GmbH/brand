import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

export default function TabsLine() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <h2 className="text-heading-20">Tonight, Saturday 13 September</h2>
      <Tabs defaultValue="bookings">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
          <TabsTrigger value="floor">Floor plan</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-content-secondary">
          86 of 110 covers booked for dinner.
        </TabsContent>
        <TabsContent value="bookings" className="text-content-secondary">
          24 bookings, the next at 19:00 for Brunner, party of 4, on T7.
        </TabsContent>
        <TabsContent value="waitlist" className="text-content-secondary">
          4 parties waiting, the longest since 18:40.
        </TabsContent>
        <TabsContent value="floor" className="text-content-secondary">
          9 of 14 tables seated, Terrace 3 held for 20:00.
        </TabsContent>
      </Tabs>
    </div>
  );
}
