import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ovadev-gmbh/ui-januna";

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="bookings" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="bookings">Bookings</TabsTrigger>
        <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
        <TabsTrigger value="deposits" disabled>
          Deposits
        </TabsTrigger>
      </TabsList>
      <TabsContent value="bookings" className="text-content-secondary">
        24 bookings tonight. Deposits open once a payment account is connected.
      </TabsContent>
      <TabsContent value="waitlist" className="text-content-secondary">
        4 parties waiting for the dinner shift.
      </TabsContent>
      <TabsContent value="deposits" className="text-content-secondary">
        No deposits taken.
      </TabsContent>
    </Tabs>
  );
}
